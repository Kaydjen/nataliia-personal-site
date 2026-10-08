import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Tasks from "@/components/Tasks/Tasks";
import Cases from "@/components/Cases/Cases";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
      <Hero />
      <Tasks />
      <Cases />
      <About />
      
    </main>
  );
}
