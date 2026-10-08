import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Разбираемся",
    description:
      "Обсуждаем бизнес, текущую ситуацию, цели и ограничения проекта.",
  },
  {
    number: "02",
    title: "Формируем план",
    description:
      "Определяем аудиторию, задачу, подходящие каналы и последовательность действий.",
  },
  {
    number: "03",
    title: "Работаем и оптимизируем",
    description:
      "Запускаем выбранные инструменты, смотрим на результаты и корректируем то, что можно улучшить.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className={styles.process}
      aria-labelledby="process-title"
    >
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>ПОДХОД</span>

          <h2 id="process-title" className={styles.title}>
            Как проходит работа
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article key={step.number} className={styles.step}>
              <span className={styles.number}>{step.number}</span>

              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>

                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
