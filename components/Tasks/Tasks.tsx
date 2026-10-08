import Link from "next/link";
import styles from "./Tasks.module.css";

const tasks = [
  {
    title: "Не знаете, с чего начать продвижение?",
    description:
      "Помогу определить, кто ваш клиент, что ему предложить и какие каналы продвижения действительно нужны.",
  },
  {
    title: "Соцсети есть, но клиентов от них нет?",
    description:
      "Разберём позиционирование, контент и рекламу и найдём, что мешает соцсетям работать на бизнес.",
  },
  {
    title: "Реклама запускается, но результат непонятен?",
    description:
      "Найду слабые места, протестирую новые варианты и оптимизирую продвижение по результатам.",
  },
];

export default function Tasks() {
  return (
    <section
      id="services"
      className={styles.services}
      aria-labelledby="services-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 id="services-title" className={styles.title}>
            Знакомая ситуация?
          </h2>
        </div>

        <div className={styles.grid}>
          {tasks.map((task) => (
            <Link key={task.title} href="#contacts" className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{task.title}</h3>

                <p className={styles.cardDescription}>{task.description}</p>
              </div>

              <span className={styles.cardArrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
