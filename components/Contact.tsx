import React from "react";
import ContactForm from "./Form/ContactForm";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="py-16 w-full gredient overflow-hidden">
      <div className="container relative mx-auto px-3 h-full flex justify-center items-center text-white">
        <div className="rounded-md border border-theme w-full">
          <div className="border-b border-theme py-10 flex pe-10 ps-2 justify-end gredient2">
            <div>
              <h2 className="text-3xl font-bold mb-1.5">Let’s Discuss Your Project</h2>
              <p className="text-content text-[17px] font-semibold">
                Always available for freelancing if the right project comes along, Feel free to contact me.
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row  justify-between xl:items-center px-5 xl:px-10 py-14">
            <div>
              <div>
                <span className="uppercase text-sm font-semibold text-content mb-3">write an email</span>
                <h3 className="text-xl font-bold">abdelbassetbenatmani@gmail.com</h3>
              </div>
              <div className="flex items-center gap-x-3 mt-5">
                <div className="w-10 h-10 rounded-full border-2 bg-[#171515] border-white relative flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
                  <Link href="https://github.com/abdelbassetbenatmani">
                    <Image src="/github-2.svg" width={40} height={40} alt="github" />
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white relative bg-[#0077B5] flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
                  <Link href="https://www.linkedin.com/in/abdelbasset-benatmani/">
                    <Image src="/linkedin.svg" width={25} height={25} alt="linkedin" className="invert" />
                  </Link>
                </div>
                <div className="w-10 h-10 rounded-full border-2 bg-[#1877F2] border-white relative flex items-center justify-center cursor-pointer duration-200 hover:-translate-y-1.5">
                  <Link href="https://www.facebook.com/abdelbasset.abdelbasset.355/">
                    <Image src="/facebook.svg" width={25} height={25} alt="facebook" />
                  </Link>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
