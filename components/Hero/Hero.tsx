import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>SMM · РЕКЛАМА · СТРАТЕГИЯ</p>

        <h1 id="hero-title" className={styles.title}>
          Помогаю бизнесу привлекать больше клиентов через рекламу и соцсети.
        </h1>

        <p className={styles.description}>
          Разбираюсь в задаче бизнеса и выстраиваю продвижение вокруг
          конкретного результата.
        </p>

        <div className={styles.actions}>
          <Link href="#contacts" className={styles.primaryAction}>
            Обсудить задачу
          </Link>

          <Link href="#cases" className={styles.secondaryAction}>
            Посмотреть кейсы
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder} role="img" aria-label="Photo">
          <span>Photo</span>
        </div>
      </div>
    </section>
  );
}
