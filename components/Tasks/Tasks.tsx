import Link from "next/link";
import styles from "./Tasks.module.css";

const tasks = [
  {
    title: "Не знаєте, з чого почати просування?",
    description:
      "Допоможу визначити вашу цільову аудиторію, сформулювати пропозицію та обрати канали просування, які відповідають цілям бізнесу.",
  },
  {
    title: "Соціальні мережі є, але клієнтів бракує?",
    description:
      "Проаналізую позиціонування, контент і рекламу, щоб визначити, що заважає соціальним мережам залучати потенційних клієнтів.",
  },
  {
    title: "Реклама працює, але результат неочевидний?",
    description:
      "Перевірю рекламні кампанії, знайду слабкі місця та запропоную зміни, які допоможуть ефективніше використовувати рекламний бюджет.",
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
            Знайомі ситуації?
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
