"use client";

import { Controller, set, useForm } from "react-hook-form";
import * as z from "zod";
import SubmitButton from "./SubmitButton";
import FormErrorMessage from "./ErrorMessage";
import { useState, useActionState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactForm } from "@/lib/api";
const formSchema = z.object({
  fullName: z.string().trim().min(2, {
    message: "Please enter your name",
  }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .trim(),
  subject: z.string().trim().min(2, {
    message: "Please enter a subject",
  }),
  message: z.string().trim().min(10, {
    message: "Please enter a message",
  }),
});

export default function ContactForm({}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // form init
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // form state
  const onSubmit = async (values: any) => {
    setLoading(true);

    try {
      await sendContactForm(values);
      setSuccess(true);
      form.reset();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Something went wrong, please try again.");
    }

    // const response = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     subject: values.subject,
    //     message: values.message,
    //     email: values.email,
    //     name: values.fullName,
    //   }),
    // });
    // console.log(await response.json());
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-8">
      <div className="flex flex-col lg:flex-row items-center gap-x-6 justify-between">
        <Controller
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <div className="space-y-2 w-full">
              <label className="uppercase text-content mb-1.5 font-bold text-sm">Your Name</label>
              <input
                className="w-full gredient2 border border-theme rounded-md px-4 py-3 white focus:outline-none focus:border-theme focus:ring-1 focus:ring-theme"
                {...field}
                placeholder="Enter your name"
              />
              <FormErrorMessage message={form.formState.errors.fullName?.message} />
            </div>
          )}
        />
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <div className="space-y-2 w-full">
              <label className="uppercase text-content mb-1.5 font-bold text-sm">Your email</label>
              <input
                className="w-full gredient2 border border-theme rounded-md px-4 py-3 white focus:outline-none focus:border-theme focus:ring-1 focus:ring-theme"
                {...field}
                placeholder="Enter your email"
              />
              <FormErrorMessage message={form.formState.errors.email?.message} />
            </div>
          )}
        />
      </div>
      <Controller
        control={form.control}
        name="subject"
        render={({ field }) => (
          <div className="space-y-2 w-full">
            <label className="uppercase text-content mb-1.5 font-bold text-sm"> subject</label>
            <input
              className="w-full gredient2 border border-theme rounded-md px-4 py-3 white focus:outline-none focus:border-theme focus:ring-1 focus:ring-theme"
              {...field}
              placeholder="Enter your subject"
            />
            <FormErrorMessage message={form.formState.errors.subject?.message} />
          </div>
        )}
      />
      <Controller
        control={form.control}
        name="message"
        render={({ field }) => (
          <div className="space-y-2 w-full">
            <label className="uppercase text-content mb-1.5 font-bold text-sm">Your message</label>
            <textarea
              className="w-full h-32 resize-none gredient2 border border-theme rounded-md px-4 py-2 white focus:outline-none focus:border-theme focus:ring-1 focus:ring-theme"
              {...field}
              placeholder="Enter your message"></textarea>

            <FormErrorMessage message={form.formState.errors.message?.message} />
          </div>
        )}
      />

      <div className="w-full">
        <SubmitButton title="Send Message" loading={loading} loadingText="Message sending..." />
      </div>

      {error && <FormErrorMessage message={error} />}
      {success && (
        <p className="text-white bg-green-500 rounded-md p-4 font-semibold text-center">
          Your message has been sent successfully. We will get back to you as soon as possible.
        </p>
      )}
    </form>
  );
}
