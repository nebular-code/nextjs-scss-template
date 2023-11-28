import PageHero from "@/components/elements/page-hero";
import styles from "@/app/styles/scss/modules/_contact.module.scss";
import FooterDark from "@/components/layout/footer-dark";

import { BsFillEnvelopeAtFill } from "react-icons/bs";
import Image from "next/image";
import ContactForm from "@/components/elements/contact-form";
import { BreadcrumbData } from "@/lib/types";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumbs={[new BreadcrumbData("Contact", "/contact", true)]}
      />

      <div className="container">
        <section>
          <div className="col">
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, accusamus?
            </p>

            <br />

            <h3>Send Us a Message</h3>
            <p>
              Please fill out the form below and we will get back to you as soon
              as possible.
            </p>

            <div className="col-lg-5 p-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>

      <FooterDark />
    </>
  );
}
