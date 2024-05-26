

const CONTACT_MESSAGE_FIELDS: any = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const generateEmailContent = (data: any) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

// // const handler = async (req, res) => {
// //   if (req.method === "POST") {
// //     const data = req.body;
// //     if (!data || !data.name || !data.email || !data.subject || !data.message) {
// //       return res.status(400).send({ message: "Bad request" });
// //     }

// //     try {
// //       await transporter.sendMail({
// //         ...mailOptions,
// //         ...generateEmailContent(data),
// //         subject: data.subject,
// //       });

// //       return res.status(200).json({ success: true });
// //     } catch (err) {
// //       console.log(err);
// //       return res.status(400).json({ message: err.message });
// //     }
// //   }
// //   return res.status(400).json({ message: "Bad request" });
// // };
// // export default handler;

// export async function POST(req:Request){
//     const data = req.body;
//     console.log(data);
//     return NextResponse.json(data);

//     // if (!data || !data.name || !data.email || !data.subject || !data.message) {
//     //     return { status: 400, body: { message: "Bad request" } };
//     // }

//     // try {
//     //     await transporter.sendMail({
//     //     ...mailOptions,
//     //     ...generateEmailContent(data),
//     //     subject: data.subject,
//     //     });

//     //     return { status: 200, body: { success: true } };
//     // } catch (err) {
//     //     console.log(err);
//     //     return { status: 400, body: { message: err.message } };
//     // }
// }

// import { transporter } from "@/config/nodemailer";
// import { NextResponse, NextRequest } from "next/server";

// // Handles POST requests to /api

// export async function POST(request: Request) {
//   const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
//   const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
//   const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

//   const formData = await request.formData();
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const message = formData.get("message");

//   try {
//     const mail = await transporter.sendMail({
//       from: username,
//       to: myEmail,
//       replyTo: email,
//       subject: `Website activity from ${email}`,
//       html: `
//         <p>Name: ${name} </p>
//         <p>Email: ${email} </p>
//         <p>Message: ${message} </p>
//         `,
//     });

//     return NextResponse.json({ message: "Success: email was sent" });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Error: email was not sent" });
//   }
// }

import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.subject || !data.message || !data.email || !data.name) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  console.log(data);

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: data.subject,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }

  // const mailOption = {
  //   from: "careeros@tryporpra.com",
  //   to: "augustinerepos@gmail.com",
  //   subject: "Send Email Tutorial",
  //   html: `
  //     <h3>Hello Augustine</h3>
  //     <li> title: ${subject}</li>
  //     <li> message: ${message}</li>
  //     `,
  // };

  // await transporter.sendMail({
  //     ...mailOptions,
  //     subject: subject,
  //     html: message
  // });
}
