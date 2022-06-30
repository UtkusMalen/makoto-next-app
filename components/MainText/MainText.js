import Image from "next/image";
import Button from "../Button/Button";
import TimerLine from "../TimerLine/TimerLine";
import styles from "./MainText.module.scss";
// import playerHead from "../../public/PlayerHead.png";
import axios from "axios";

const MainText = ({ pageData, serverData }) => {
  const tags = pageData.fields.mainTextTags.items;

  const test = 6;

  const tst = 0;
  console.log(serverData);

  // style={{
  //   transform: `translateX(${
  //     serverData ? '(serverData.players.online * 7) / 2' : "21"
  //   }px)`,
  // }}

  return (
    <div>
      <div className={styles.mainTextWrapper}>
        <div
          style={{
            transform: `translateX(${
              serverData &&
              serverData.players.online < 6 &&
              serverData.players.online !== 0
                ? (serverData.players.online * 7) / 2
                : "21"
            }px)`,
          }}
          className={styles.playersWrapper}>
          <div className={styles.ourPlayersText} />
          <div className={styles.playersHeads}>
            {!serverData.players || serverData.players === 0
              ? [1, 2, 3, 4, 5, 6].map((i, index) => (
                  <div
                    key={i}
                    style={{ transform: `translateX(-${index * 7}px)` }}
                    alt="PlayerHead"
                    className={styles.playerHeadLoader}>
                    <svg width="37" height="44" viewBox="0 0 37 44" fill="none">
                      <path
                        style={{
                          animationDelay: `${index * 200}ms`,
                        }}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M37 5.90641C32.6931 9.9224 30 15.6467 30 22C30 28.3533 32.6931 34.0776 37 38.0936C33.0702 41.7579 27.797 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0C27.797 0 33.0702 2.24209 37 5.90641Z"
                        fill="#C4C4C4"
                      />
                    </svg>
                  </div>
                ))
              : serverData.players.sample
                  .slice(0, 6)
                  .map((player, index) => (
                    <img
                      key={player.id}
                      className="imagePlayer"
                      src={`https://mc-heads.net/avatar/${player.id}`}
                      style={{ transform: `translateX(-${index * 7}px)` }}
                      alt="PlayerHead"
                    />
                  ))}

            <div
              // style={{
              //   transform: `translateX(-${
              //     serverData && serverData.players.online <= 6
              //       ? serverData.players.online * 7
              //       : "42"
              //   }px)`,
              // }}
              style={{
                transform: `translateX(-${
                  serverData
                    ? serverData.players.online <= 6 &&
                      serverData.players.online !== 0
                      ? serverData.players.online * 7
                      : "42"
                    : "21"
                }px)`,
              }}
              className={styles.playersNumber}>
              <p>
                +
                {serverData.players.online >= 6
                  ? serverData.players.online - 6
                  : 0}
              </p>
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
          <div className={styles.serverStatsWrapper}>
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
                <div className={styles.serverStatsText}>24 Марта, 2020</div>
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
