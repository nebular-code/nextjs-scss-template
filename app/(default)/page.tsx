import Link from "next/link";
import { HomePageCarousel } from "@/components/page-elements/home-page/home-page-carousel";

export default function Home() {
  return (
    <main>
      <HomePageCarousel />

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="bg-primary text-light p-2 rounded">Typography</h1>
            <h1>This is H1 text</h1>
            <h2>This is H2 text</h2>
            <h3>This is H3 text</h3>
            <h4>This is H4 text</h4>
            <h5>This is H5 text</h5>
            <h6>This is H6 text</h6>
            <p>This is {"<p>"} text</p>
            <p>
              <strong>This is bold ({"<strong>"}) text</strong>
            </p>
            <p>
              <em>This is italic ({"<em>"}) text</em>
            </p>
            <p>
              <u>This is underline ({"<u>"}) text</u>
            </p>

            <p>
              <a href="#">
                This is an <strong>({"<a>"}) tag</strong> link
              </a>
            </p>
            <p>
              <Link href="#">This a NextJS ({"<Link>"}) Link</Link>
            </p>
            <span>This is span text</span>
          </div>
        </div>
      </section>
    </main>
  );
}
