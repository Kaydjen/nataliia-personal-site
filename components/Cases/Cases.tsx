import Link from "next/link";
import styles from "./Cases.module.css";

const cases = [
  {
    client: "Бренд у сфері краси",
    task: "Збільшити кількість заявок з Instagram.",
    solution:
      "Переглянула рекламну стратегію та протестувала нові аудиторії й креативи.",
    result: "+42% заявок",
    detail: "Вартість ліда зменшилася на 28%",
  },
  {
    client: "Локальний бізнес",
    task: "Збільшити кількість звернень із соціальних мереж.",
    solution: "Переглянула позиціювання, контент і рекламні кампанії.",
    result: "Просування стало ціліснішим",
    detail: "Комунікація з аудиторією стала зрозумілішою",
  },
  {
    client: "Експертний проєкт",
    task: "Побудувати систему просування замість окремих активностей.",
    solution:
      "Визначила цільову аудиторію, пропозицію та основні канали просування.",
    result: "З'явилася єдина стратегія просування",
    detail: "Усі канали працюють на спільну мету",
  },
];

export default function Cases() {
  return (
    <section id="cases" className={styles.cases} aria-labelledby="cases-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>КЕЙСИ</span>

          <h2 id="cases-title" className={styles.title}>
            Подібні завдання я вже вирішувала на практиці
          </h2>
        </div>

        <div className={styles.list}>
          <div className={styles.columnLabels} aria-hidden="true">
            <span>ТИП ПРОЄКТУ</span>
            <span>ЗАВДАННЯ</span>
            <span>МОЇ ДІЇ</span>
            <span>РЕЗУЛЬТАТ</span>
          </div>

          {cases.map((item) => (
            <article key={item.client} className={styles.case}>
              <div className={styles.client}>{item.client}</div>

              <div className={styles.task}>{item.task}</div>

              <div className={styles.solution}>{item.solution}</div>

              <div className={styles.result}>
                <strong>{item.result}</strong>
                <span>{item.detail}</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actionArea}>
          <Link href="#contacts" className={styles.action}>
            <span>Маєте схоже завдання?</span>

            <span className={styles.actionLink}>
              Обговорімо його
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
