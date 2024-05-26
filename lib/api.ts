export const sendContactForm = async (data: any) =>
  {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        subject: data.subject,
        message: data.message,
        email: data.email,
        name: data.fullName,
      }),
    });
    console.log(await response.json());
  }
