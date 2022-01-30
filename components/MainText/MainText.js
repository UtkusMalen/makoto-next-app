import styles from "./MainText.module.scss";

const MainText = () => {
  return (
    <div className="container">
      <div className={styles.mainTextWrapper}>
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
      </div>
    </div>
  );
};

export default MainText;
