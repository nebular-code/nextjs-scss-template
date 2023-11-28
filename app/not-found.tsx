"use client";

import PageHero from "@/components/elements/page-hero";
import styles from "@/app/styles/scss/modules/_not-found.module.scss";
import Link from "next/link";
import FooterDark from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <PageHero />
      <div className={styles.wrapper}>
        <h3 className="text-center">404 | Not Found</h3>
        <p className="text-center">
          Whoops, we couldn&apos;t find the page you&apos;re looking for...{" "}
        </p>
        <div className="d-flex">
          <button
            onClick={() => {
              window.history.back();
            }}
            className="rn-btn-fill mr-2"
          >
            Go Back
          </button>
          <button className="rn-btn">
            <Link href={"/"}>Go to homepage</Link>
          </button>
        </div>
      </div>

      <FooterDark />
    </>
  );
}
