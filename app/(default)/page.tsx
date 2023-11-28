import Link from "next/link";
import { HomePageCarousel } from "@/components/page-elements/home-page/home-page-carousel";

export default function Home() {
  return (
    <main>
      <HomePageCarousel />

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <Link href="/project1">Project 1</Link>
          </li>
          <li>
            <Link href="/project2">Project 2</Link>
          </li>
          <li>
            <Link href="/project3">Project 3</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
