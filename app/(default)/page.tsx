import styles from "@/app/styles/scss/modules/_home.module.scss";
import Footer from "@/components/layout/footer-inner";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.backdrop}></div>

      <div className={styles.overlay}>
        <Image
          width={400}
          height={400}
          src="/assets/images/lion1-transparent.png"
          alt="Elite Aces Basketball"
        />

        <h1>ELEVATE YOUR GAME</h1>

        <div className={styles.buttonContainer}>
          <Link href="/teams" className="rn-btn-fill btn-primary-color">
            Register Now
          </Link>
          <Link href="/camps" className="rn-btn btn-primary-color">
            Youth Camps
          </Link>
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
