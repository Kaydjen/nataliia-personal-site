import Link from "next/link";
import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Разбираемся",
    description: "Обсуждаем бизнес, текущую ситуацию и цель.",
  },
  {
    number: "02",
    title: "Выбираем решение",
    description: "Определяем стратегию, аудиторию и подходящие инструменты.",
  },
  {
    number: "03",
    title: "Запускаем и растим результат",
    description:
      "Запускаем работу, анализируем показатели и постоянно оптимизируем то, что можно улучшить.",
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
          <span className={styles.eyebrow}>КАК ПРОХОДИТ РАБОТА</span>

          <h2 id="process-title" className={styles.title}>
            От задачи до результата
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

        <div className={styles.cta}>
          <Link href="#contacts" className={styles.primaryAction}>
            Обсудить мою задачу
          </Link>
        </div>
      </div>
    </section>
  );
}
