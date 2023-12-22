"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import { BsFillSendFill } from "react-icons/bs";
import { CgSpinnerAlt } from "react-icons/cg";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values) => {
      await handleSubmit(values);
    },
    validationSchema: validationSchema,
  });

  const handleSubmit = async (values: any) => {
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitted(true);
    return;

    const res = await fetch("/api/contact/send-message", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      setIsLoading(false);
      return;
    }

    formik.resetForm();
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h3 className="h3 mb-2">Thank you for your message!</h3>
        <p className="mb-4">We will get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <label htmlFor="name" className=" ">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          onChange={formik.handleChange}
          className="form-input"
        />
        {formik.errors.name && (
          <span className="text-danger ml-2">{formik.errors.name}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mydomain.com"
          onChange={formik.handleChange}
          className="form-input"
        />
        {formik.errors.email && (
          <span className="text-danger ml-2">{formik.errors.email}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="mr-2">
          Phone Number
        </label>
        {/* <small>format: (555) 555-5555</small> */}
        {/* <PhoneInput
          id="phone"
          name="phone"
          country="CA"
          className="form-input"
          onChange={formik.handleChange}
        /> */}
        <input
          type="phone"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          onChange={formik.handleChange}
          className="form-input"
        />
        {formik.errors.phone && (
          <span className="text-danger ml-2">{formik.errors.phone}</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          rows={4}
          onChange={formik.handleChange}
          className="form-input p-2"
        ></textarea>
        {formik.errors.message && (
          <span className="text-danger ml-2">{formik.errors.message}</span>
        )}
      </div>

      <button type="submit" className="rn-btn-fill">
        {isLoading ? 
          "Sending..." : 
          <>Send Message <BsFillSendFill /></>}
      </button>
    </form>
  );
}
