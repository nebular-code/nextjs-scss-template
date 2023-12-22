import "@/app/styles/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Next.js + Sass + Bootstrap Template",
  description: "Next.js + Sass + Bootstrap Template",
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
        <Footer />
      </body>
    </html>
  );
}
