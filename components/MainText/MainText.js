import Image from "next/image";
import Button from "../Button/Button";
import TimerLine from "../TimerLine/TimerLine";
import styles from "./MainText.module.scss";
// import playerHead from "../../public/PlayerHead.png";

const MainText = () => {
  return (
    <div className="container">
      <div className={styles.mainTextWrapper}>
        <div className={styles.playersWrapper}>
          <div className={styles.ourPlayersText}></div>
          <div className={styles.playersHeads}>
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <img
              className="imagePlayer"
              src="/PlayerHead.png"
              alt="PlayerHead"
            />
            <div className={styles.playersNumber}>+34</div>
          </div>
        </div>

        <div>
          <svg viewBox="0 0 0.84 1">
            <defs>
              <clipPath clipPathUnits="objectBoundingBox" id="deermask">
                <path
                  d="M480.42,279.63a.51.51,0,0,0,0,.74.51.51,0,0,1-.34.13.5.5,0,1,1,0-1A.51.51,0,0,1,480.42,279.63Z"
                  transform="translate(-479.58 -279.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h3 className={styles.secondaryText}>
          <p>MINECRAFT</p>
          <span className={styles.circle} />
          <p>VANILLA</p>
          <span className={styles.circle} />
          <p>SERVER</p>
        </h3>
        <h1 className={styles.text}>
          Тот самый сервер, который ты так долго искал
        </h1>
        <div className={styles.serverStats}>
          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Статус Сервера</div>
            <div className={styles.serverStatsWrapper}>
              <div className={styles.serverStatsLamp} />
              <div className={styles.serverStatsText}>Активный</div>
            </div>
          </div>

          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Дата Открытия</div>
            <div className={styles.serverStatsWrapper}>
              <div className={styles.serverStatsCalendar} />
              <div className={styles.serverStatsText}>6 Декабря, 2021</div>
            </div>
          </div>

          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Онлайн</div>
            <div className={styles.serverStatsWrapper}>
              <div className={styles.serverStatsOnline} />
              <div className={styles.serverStatsText}>40/100</div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default MainText;
