import PageHero from "@/components/elements/page-hero";
import styles from "@/app/styles/scss/modules/_about.module.scss";
import FooterDark from "@/components/layout/footer-dark";
import { BreadcrumbData } from "@/lib/types";

export default function About() {
  return (
    <>
      <PageHero breadcrumbs={[new BreadcrumbData("About", "/about", true)]} />

      <div className="container">
        <div className={styles.pageContent}>
          {/* ABOUT US + VIDEO */}
          <section className="row mb-5">
            <div className="col-lg-6 py-5">
              <h1>About Us</h1>
              <p className="paragraph">
                Welcome to <strong>Elite Aces Basketball</strong>, where we
                nurture talent, build champions, and develop leaders both on and
                off the court. Our dedicated coaching team brings a wealth of
                experience, expertise, and passion to the world of basketball.
              </p>
            </div>
            <div className="col-lg-6">
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/QN0-4Op2X0M?si=IpxSUgPxVyiZw29D"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </section>
          {/* OUR APPROACH */}
          <section className="row mb-5">
            <h3>Our Approach</h3>
            <p className="paragraph">
              We believe that every player is unique, and our coaching staff is
              dedicated to tailoring their approach to suit each
              individual&apos;s needs and goals. We emphasize the importance of
              teamwork, sportsmanship, and personal growth, providing a
              well-rounded basketball experience that extends beyond the game
              itself.
            </p>
          </section>
          {/* WHAT SETS US APART */}
          <section>
            <h3 className="mb-4">What Sets Us Apart</h3>

            <div className="row">
              <div className="col-lg-6 mb-5">
                <p className="paragraph">
                  <strong className={styles.boldTitle}>
                    Personalized Coaching
                  </strong>
                  <br />
                  <br />
                  We recognize that each player has their own strengths and
                  areas for improvement. Our coaches work closely with
                  individuals to ensure they receive the guidance and support
                  they need to thrive.
                </p>
              </div>
              <div className="col-lg-6 mb-5">
                <p className="paragraph">
                  <strong className={styles.boldTitle}>
                    Skill Development
                  </strong>
                  <br />
                  <br />
                  We prioritize skill development, offering comprehensive
                  training in shooting, ball-handling, defense, and game
                  strategy to help our athletes excel on the court.
                </p>
              </div>
              <div className="col-lg-6 mb-5">
                <p className="paragraph">
                  <strong className={styles.boldTitle}>
                    Mentoring and Leadership
                  </strong>
                  <br />
                  <br />
                  Our coaching staff is not just here to develop athletes; they
                  are here to shape leaders. We instill the values of
                  dedication, integrity, and leadership in every player.
                </p>
              </div>
              <div className="col-lg-6 mb-5">
                <p className="paragraph">
                  <strong className={styles.boldTitle}>
                    Competitive Excellence
                  </strong>
                  <br />
                  <br />
                  Elite Aces Basketball strives for excellence in competition.
                  We participate in competitive leagues and tournaments, giving
                  our players the opportunity to showcase their skills and
                  develop a winning mentality.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <FooterDark />
    </>
  );
}
