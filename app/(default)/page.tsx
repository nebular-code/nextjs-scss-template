import Link from "next/link";
import { HomePageCarousel } from "@/components/page-elements/home-page/home-page-carousel";

export default function Home() {
  return (
    <>
      {/* <HomePageCarousel /> */}

      <section className="container my-5">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="display-5 text-light bg-theme ps-2">Headers</h3>
            <div>
              <h1>This is H1 text</h1>
              <h2>This is H2 text</h2>
              <h3>This is H3 text</h3>
              <h4>This is H4 text</h4>
              <h5>This is H5 text</h5>
              <h6>This is H6 text</h6>
            </div>
          </div>
          <div className="col-lg-6 mt-2 mt-lg-0 mb-2 mb-lg-0">
            <h3 className="display-5 text-light bg-theme ps-2">Typography</h3>
            <div>
              <p>This is a {"<p>"} tag</p>
              <p>
                <b>This is bold text</b>
              </p>

              <p>
                <em>This is italic {"<em>"} text</em>
              </p>

              <p>
                <u>This is underline {"<u>"} text</u>
              </p>

              <p>
                The following is a {"<code>"} tag: <code>var x = "hello world";</code>
              </p>

              <p>
                <a href="#">
                  This is an <b>{"<a>"} tag</b> link
                </a>
              </p>

              <p>
                <Link href="#">This is a NextJS {"<Link>"} Link</Link>
              </p>


              <span>This is span text</span>
              <br />
              <br />
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 text-light bg-theme ps-2">Buttons</h3>
        
            <h5>Theme Buttons</h5>
            <div className="d-flex flex-wrap gap-1 mb-3">
              <button className="btn-theme">Default</button>
              <button className="btn-theme btn-theme-primary">Primary</button>
              <button className="btn-theme btn-theme-primary-outline">Primary Outline</button>
            </div>

            <h5>Bootstrap Buttons</h5>
            <div className="d-flex flex-wrap gap-2 mb-2">
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary">Secondary Button</button>
              <button className="btn btn-success">Success Button</button>
              <button className="btn btn-danger">Danger Button</button>
              <button className="btn btn-warning">Warning Button</button>
              <button className="btn btn-info">Info Button</button>
              <button className="btn btn-light">Light Button</button>
              <button className="btn btn-dark">Dark Button</button>
              <button className="btn btn-link">Link Button</button>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="display-5 text-light bg-theme ps-2">Tmp</h3>
          </div>
        </div>
        
      </section>
    </>
  );
}
