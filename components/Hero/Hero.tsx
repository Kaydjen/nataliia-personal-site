import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>DIGITAL-МАРКЕТИНГ</p>

        <h1 id="hero-title" className={styles.title}>
          Помогаю бизнесу привлекать больше клиентов через рекламу и SMM.
        </h1>

        <p className={styles.description}>
          Разбираюсь в задаче бизнеса, нахожу точки роста и выстраиваю
          продвижение вокруг конкретного результата.
        </p>

        <div className={styles.actions}>
          <Link href="#contacts" className={styles.primaryAction}>
            Обсудить задачу
          </Link>

          <Link href="#cases" className={styles.secondaryAction}>
            Смотреть кейсы
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div
          className={styles.imagePlaceholder}
          role="img"
          aria-label="Фотография Наталии — специалиста по digital-маркетингу"
        >
          <span>Фото специалиста</span>
        </div>
      </div>
    </section>
  );
}
