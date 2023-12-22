import PageHero from "@/components/elements/page-breadcrumb";
import ContactForm from "@/components/forms/contact-form";
import { BreadcrumbData } from "@/lib/types";

export default function Contact() {
  return (
    <>
      <PageHero
        breadcrumbs={[new BreadcrumbData("Contact", "/contact", true)]}
      />

      <div className="container my-5">
        <h1>Get In Touch</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
          accusamus?
        </p>

        <h4>Send Us a Message</h4>
        <p>
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p>

        <div className="row">
          <div className="col-lg-5">
            <ContactForm />
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0">
            <div className="card rounded-0">
              <div className="card-body">
                <h5 className="card-title">Hello World!</h5>
                <p className="card-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Temporibus ipsa corporis animi neque! Ratione, autem.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
