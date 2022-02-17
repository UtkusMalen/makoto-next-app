import Image from "next/image";
import Button from "../Button/Button";
import TimerLine from "../TimerLine/TimerLine";
import styles from "./MainText.module.scss";
// import playerHead from "../../public/PlayerHead.png";
import axios from "axios";

const MainText = ({ pageData, serverData }) => {
  const tags = pageData.fields.mainTextTags.items;

  return (
    <div className="container">
      <div className={styles.mainTextWrapper}>
        <div className={styles.playersWrapper}>
          <div className={styles.ourPlayersText}></div>
          <div className={styles.playersHeads}>
            {!serverData.players
              ? [1, 2, 3, 4, 5, 6].map((i) => <div key={i} />)
              : serverData.players.sample
                  .slice(0, 6)
                  .map((player) => (
                    <img
                      key={player.id}
                      className="imagePlayer"
                      src={`https://mc-heads.net/avatar/${player.id}`}
                      alt="PlayerHead"
                    />
                  ))}

            <div className={styles.playersNumber}>
              +
              {serverData.players.online >= 6
                ? serverData.players.online - 6
                : 0}
            </div>
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
          <p>{tags[0].toUpperCase()}</p>
          <span className={styles.circle} />
          <p>{tags[1].toUpperCase()}</p>
          <span className={styles.circle} />
          <p>{tags[2].toUpperCase()}</p>
        </h3>
        <h1 className={styles.text}>{pageData.fields.mainText}</h1>
        <div className={styles.serverStats}>
          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Статус Сервера</div>
            <div className={styles.serverStatsWrapper}>
              <div
                className={
                  serverData.status
                    ? styles.serverStatsLampActive
                    : styles.serverStatsLamp
                }
              />
              <div className={styles.serverStatsText}>
                {serverData.status ? "Активный" : "Неактивен"}
              </div>
            </div>
          </div>

          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Дата Открытия</div>
            <div className={styles.serverStatsWrapper}>
              <div className={styles.serverStatsCalendar} />
              <div className={styles.serverStatsText}>8 Апреля, 2020</div>
            </div>
          </div>

          <div className={styles.serverStatus}>
            <div className={styles.serverStatsTitle}>Онлайн</div>
            <div className={styles.serverStatsWrapper}>
              <div className={styles.serverStatsOnline} />
              <div className={styles.serverStatsText}>
                {serverData.players.online}/{serverData.players.max}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const data = await fetch(
    "https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru"
  );

  return {
    props: {
      data,
    },
  };
};

export default MainText;
