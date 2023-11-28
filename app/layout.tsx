import "@/app/styles/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/header";
import FooterDark from "@/components/layout/footer-dark";

export const metadata: Metadata = {
  title: "Next.js + Sass + Bootstrap Template",
  description: "",
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FooterDark />
      </body>
    </html>
  );
}
