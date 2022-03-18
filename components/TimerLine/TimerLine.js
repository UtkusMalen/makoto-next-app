import Button from "../Button/Button";
import styles from "./TimerLine.module.scss";
import moment from "moment";
import "moment-precise-range-plugin";

const TimerLine = () => {
  const timer = (date) => {
    const starts = moment(date);
    const ends = moment();

    const diff = moment.preciseDiff(starts, ends, true);

    const years =
      String(diff.years).length <= 1 ? "0" + diff.years : diff.years;
    const months =
      String(diff.months).length <= 1 ? "0" + diff.months : diff.months;
    const days = String(diff.days).length <= 1 ? "0" + diff.days : diff.days;

    return { years, months, days };
  };

  const timeSinceOpening = timer("2020-03-24");

  return (
    <div className={styles.timerLineWrapper}>
      <div className="container">
        <div className={styles.timerLine}>
          <div className={styles.timerWrapper}>
            <div
              className={
                styles.timer
              }>{`${timeSinceOpening.years} : ${timeSinceOpening.months} : ${timeSinceOpening.days}`}</div>
            <div className={styles.timerNames}>
              <div className={styles.timerName}>YEARS</div>
              <div className={styles.timerName}>MONTHS</div>
              <div className={styles.timerName}>DAYS</div>
            </div>
          </div>

          <div className={styles.timerTextWrapper}>
            <div className={styles.timerTextTitle}>
              Именно столько существует сервер
            </div>
            <div className={styles.timerTextSubtitle}>
              Будем рады видеть тебя у нас
            </div>
          </div>

          <Button bgColor="111" textColor="fff" shade="dark">
            Начать играть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimerLine;
