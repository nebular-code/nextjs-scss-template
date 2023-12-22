"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="container page-404">
        <h1>404</h1>
        <p>
          Whoops, we couldn&apos;t find the page you&apos;re looking for...
        </p>

        <div className="buttons-container">
          <button
            onClick={() => {
              window.history.back();
            }}
            className="theme-btn-fill"
          >
            Go Back
          </button>
          <>
            <Link className="theme-btn" href={"/"}>Go to homepage</Link>
          </>
        </div>
      </div>
    </>
  );
}
