import Link from "next/link";
import styles from "./Cases.module.css";

const cases = [
  {
    client: "Beauty brand",
    task: "Получать больше заявок из Instagram.",
    solution:
      "Пересобрала рекламную стратегию и протестировала новые аудитории и креативы.",
    result: "+42% заявок",
    detail: "Стоимость лида −28%",
  },
  {
    client: "Локальный бизнес",
    task: "Получать больше обращений из социальных сетей.",
    solution: "Пересмотрела позиционирование, контент и рекламные кампании.",
    result: "Продвижение стало работать как единая система",
    detail: "Коммуникация с аудиторией стала понятнее",
  },
  {
    client: "Экспертный проект",
    task: "Выстроить систему продвижения вместо разрозненных активностей.",
    solution: "Определила аудиторию, оффер и основные каналы продвижения.",
    result: "Появилась единая логика продвижения",
    detail: "Каналы работают на общую задачу",
  },
];

export default function Cases() {
  return (
    <section id="cases" className={styles.cases} aria-labelledby="cases-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>КЕЙСЫ</span>

          <h2 id="cases-title" className={styles.title}>
            Похожие задачи уже решала на практике
          </h2>
        </div>

        <div className={styles.list}>
          <div className={styles.columnLabels} aria-hidden="true">
            <span>КЛИЕНТ</span>
            <span>ЗАДАЧА</span>
            <span>СДЕЛАЛИ</span>
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
            <span>Есть похожая задача?</span>
            <span className={styles.actionLink}>
              Расскажите о ней
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
