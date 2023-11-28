import styles from "@/app/styles/scss/modules/_layout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/scss/style.scss";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/header";

export const inter = Inter({ subsets: ["latin"] });

export const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Aces Basketball",
  description:
    "Elite Aces Basketball is a basketball organization based in Edmonton, Alberta, Canada. We provide basketball training camps as well as organize competitive basketball teams.",
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
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
