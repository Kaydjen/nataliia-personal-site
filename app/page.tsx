import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Tasks from "@/components/Tasks/Tasks";
import Cases from "@/components/Cases/Cases";
import About from "@/components/About/About";
import Process from "@/components/Process/Process";
import FinalCta from "@/components/FinalCta/FinalCta";
import Footer from "@/components/Footer/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Header />
        <Hero />
        <Tasks />
        <Cases />
        <About />
        <Process />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
