import styles from "./Tasks.module.css";

const services = [
  {
    number: "01",
    title: "Таргетированная реклама",
    description:
      "Настройка, запуск и оптимизация рекламных кампаний для привлечения целевой аудитории и заявок.",
  },
  {
    number: "02",
    title: "SMM",
    description:
      "Выстраивание присутствия бизнеса в социальных сетях: контент, позиционирование и коммуникация с аудиторией.",
  },
  {
    number: "03",
    title: "Маркетинговая стратегия",
    description:
      "Определение аудитории, предложения и каналов продвижения, чтобы собрать маркетинг в понятную систему.",
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
          <span className={styles.eyebrow}>УСЛУГИ</span>

          <h2 id="services-title" className={styles.title}>
            Что могу сделать для бизнеса
          </h2>

          <p className={styles.description}>
            Выбираю инструменты под задачу, а не подстраиваю задачу под
            инструмент.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.number} className={styles.card}>
              <span className={styles.number}>{service.number}</span>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>

                <p className={styles.cardDescription}>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
