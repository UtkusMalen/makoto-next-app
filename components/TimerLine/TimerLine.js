import Button from "../Button/Button";
import styles from "./TimerLine.module.scss";

const TimerLine = () => {
  return (
    <div className={styles.timerLineWrapper}>
      <div className="container">
        <div className={styles.timerLine}>
          <div className={styles.timerWrapper}>
            <div className={styles.timer}>60 : 18 : 56</div>
            <div className={styles.timerNames}>
              <div className={styles.timerName}>DAYS</div>
              <div className={styles.timerName}>HOURS</div>
              <div className={styles.timerName}>MINUTES</div>
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
