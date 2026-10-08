import Link from "next/link";
import styles from "./Tasks.module.css";

const tasks = [
  {
    number: "01",
    title: "Не получаете достаточно клиентов из рекламы?",
    description:
      "Настрою и оптимизирую таргетированную рекламу, чтобы привлекать нужную аудиторию и снижать стоимость обращения.",
    category: "Таргетированная реклама",
  },
  {
    number: "02",
    title: "Соцсети есть, но они не приводят клиентов?",
    description:
      "Выстрою SMM под задачи бизнеса: контент, позиционирование и коммуникацию с аудиторией.",
    category: "SMM",
  },
  {
    number: "03",
    title: "Продвижение есть, но нет понятной системы?",
    description:
      "Помогу определить аудиторию, предложение и каналы продвижения и собрать маркетинг в единую систему.",
    category: "Маркетинговая стратегия",
  },
];

export default function Tasks() {
  return (
    <section
      id="services"
      className={styles.tasks}
      aria-labelledby="tasks-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ЧЕМ МОГУ БЫТЬ ПОЛЕЗНА</span>

          <h2 id="tasks-title" className={styles.title}>
            С какими задачами помогу
          </h2>

          <p className={styles.description}>
            Подберу решение под задачи и цели вашего бизнеса.
          </p>
        </div>

        <div className={styles.grid}>
          {tasks.map((task) => (
            <article key={task.number} className={styles.card}>
              <span className={styles.number}>{task.number}</span>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{task.title}</h3>

                <p className={styles.cardDescription}>{task.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>{task.category}</span>

                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.additionalTask}>
          Не нашли свою задачу?{" "}
          <Link href="#contacts" className={styles.additionalLink}>
            Расскажите, что вам нужно →
          </Link>
        </p>
      </div>
    </section>
  );
}
