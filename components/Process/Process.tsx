import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Пишете",
    description: "Рассказываете, что сейчас происходит и чего хотите добиться.",
  },
  {
    number: "02",
    title: "Разбираемся",
    description:
      "Определяем, что мешает результату и что имеет смысл изменить.",
  },
  {
    number: "03",
    title: "Начинаем работу",
    description:
      "Собираем план действий и запускаем то, что действительно нужно бизнесу.",
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
          <span className={styles.eyebrow}>КАК РАБОТАЕМ</span>

          <h2 id="process-title" className={styles.title}>
            Всё проще, чем кажется
          </h2>

          <p className={styles.description}>
            Вам не нужно заранее разбираться в маркетинге или готовить подробное
            техническое задание.
          </p>
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
