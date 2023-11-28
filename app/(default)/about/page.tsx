import PageHero from "@/components/elements/page-hero";
import { BreadcrumbData } from "@/lib/types";
import Link from "next/link";

export default function About() {
  return (
    <>
      <PageHero breadcrumbs={[new BreadcrumbData("About", "/about", true)]} />

      <div className="container">
        <div>
          <section className="my-5">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              autem non, dolore sit natus tenetur odio exercitationem numquam
              corporis impedit provident voluptatum in quas? Quam illo alias
              dolorem nisi nulla?
            </p>
          </section>
          {/* OUR APPROACH */}
          <section className="mb-5">
            <h3>Our Approach</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              facere quibusdam deleniti veritatis, soluta dolorum nesciunt ad
              accusamus quisquam neque.
            </p>
          </section>
          
        </div>
      </div>
    </>
  );
}
