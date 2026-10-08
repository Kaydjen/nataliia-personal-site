import Link from "next/link";
import styles from "./Cases.module.css";

const cases = [
  {
    number: "01",
    client: "Beauty brand",
    task: "Увеличить количество заявок из Instagram.",
    solution:
      "Пересобрали рекламную стратегию, протестировали новые аудитории и креативы.",
    results: [
      { value: "+42%", label: "заявок" },
      { value: "−28%", label: "стоимость лида" },
    ],
    visual: "beauty",
  },
  {
    number: "02",
    client: "Локальный бизнес",
    task: "Увеличить количество обращений из социальных сетей.",
    solution:
      "Пересмотрели позиционирование, обновили контент и перенастроили рекламные кампании.",
    results: [
      { value: "+XX%", label: "обращений" },
      { value: "−YY%", label: "стоимость обращения" },
    ],
    visual: "localBusiness",
  },
  {
    number: "03",
    client: "Экспертный проект",
    task: "Собрать понятную систему продвижения вместо разрозненных активностей.",
    solution:
      "Определили ключевую аудиторию, оффер и основные каналы продвижения, после чего выстроили единую систему.",
    results: [
      { value: "+XX%", label: "целевых обращений" },
      { value: "+YY%", label: "конверсия" },
    ],
    visual: "expert",
  },
];

const visualClassNames = {
  beauty: styles.beauty,
  localBusiness: styles.localBusiness,
  expert: styles.expert,
};

export default function Cases() {
  return (
    <section id="cases" className={styles.cases} aria-labelledby="cases-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>РЕЗУЛЬТАТЫ</span>

          <h2 id="cases-title" className={styles.title}>
            Результаты работы
          </h2>

          <p className={styles.description}>
            Реальные задачи, решения и результаты.
          </p>
        </div>

        <div className={styles.list}>
          {cases.map((item) => (
            <article key={item.number} className={styles.case}>
              <div
                className={`${styles.visual} ${visualClassNames[item.visual as keyof typeof visualClassNames]}`}
                aria-hidden="true"
              >
                <div className={styles.visualHeader}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.visualContent}>
                  <div className={styles.visualMain}>
                    <div className={styles.visualLargeBlock} />

                    <div className={styles.visualRow}>
                      <div className={styles.visualSmallBlock} />
                      <div className={styles.visualSmallBlock} />
                    </div>
                  </div>

                  <div className={styles.visualSide}>
                    <div className={styles.visualSideBlock} />
                    <div className={styles.visualSideBlock} />
                    <div className={styles.visualSideBlock} />
                  </div>
                </div>

                <span className={styles.visualNumber}>{item.number}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.metaLabel}>КЛИЕНТ / НИША</span>
                  <span className={styles.metaValue}>{item.client}</span>
                </div>

                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>ЗАДАЧА</span>
                    <p className={styles.detailText}>{item.task}</p>
                  </div>

                  <div className={styles.detail}>
                    <span className={styles.detailLabel}>РЕШЕНИЕ</span>
                    <p className={styles.detailText}>{item.solution}</p>
                  </div>
                </div>

                <div className={styles.results}>
                  <span className={styles.resultLabel}>РЕЗУЛЬТАТ</span>

                  <div className={styles.resultGrid}>
                    {item.results.map((result) => (
                      <div key={result.label} className={styles.result}>
                        <strong className={styles.resultValue}>
                          {result.value}
                        </strong>

                        <span className={styles.resultMetric}>
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="#cases" className={styles.ctaLink}>
            Смотреть все кейсы <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
