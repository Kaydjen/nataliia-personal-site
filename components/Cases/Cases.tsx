import styles from "./Cases.module.css";

const cases = [
  {
    number: "01",
    client: "Beauty brand",
    task: "Увеличить количество заявок из Instagram.",
    solution:
      "Пересобрали рекламную стратегию, протестировали новые аудитории и креативы.",
    result:
      "Количество заявок выросло на 42%, а стоимость лида снизилась на 28%.",
  },
  {
    number: "02",
    client: "Локальный бизнес",
    task: "Увеличить количество обращений из социальных сетей.",
    solution:
      "Пересмотрели позиционирование, обновили контент и перенастроили рекламные кампании.",
    result:
      "Продвижение стало работать как единая система, а коммуникация с аудиторией стала понятнее.",
  },
  {
    number: "03",
    client: "Экспертный проект",
    task: "Собрать понятную систему продвижения вместо разрозненных активностей.",
    solution:
      "Определили ключевую аудиторию, оффер и основные каналы продвижения.",
    result:
      "Появилась единая логика продвижения, в которой каждый канал работает на общую задачу.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className={styles.cases} aria-labelledby="cases-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>КЕЙСЫ</span>

          <h2 id="cases-title" className={styles.title}>
            Как это выглядит в работе
          </h2>

          <p className={styles.description}>
            Примеры задач, подхода и результата.
          </p>
        </div>

        <div className={styles.list}>
          {cases.map((item) => (
            <article key={item.number} className={styles.case}>
              <div className={styles.caseNumber}>{item.number}</div>

              <div className={styles.content}>
                <p className={styles.client}>{item.client}</p>

                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.label}>ЗАДАЧА</span>

                    <p className={styles.text}>{item.task}</p>
                  </div>

                  <div className={styles.detail}>
                    <span className={styles.label}>ЧТО СДЕЛАЛИ</span>

                    <p className={styles.text}>{item.solution}</p>
                  </div>

                  <div className={styles.detail}>
                    <span className={styles.label}>РЕЗУЛЬТАТ</span>

                    <p className={styles.result}>{item.result}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
