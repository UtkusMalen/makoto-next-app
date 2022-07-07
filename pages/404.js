import Link from "next/link";
import Button from "../components/Button/Button";
import styles from "../styles/404.module.scss";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.notFoundImage}></div>
        <div className={styles.textWrapper}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <div className={styles.notFoundSubtitle}>
            <div className={styles.pageNotFoundEmoji}></div>
            <h2 className={styles.pageNotFoundText}>Страница не найденна</h2>
          </div>
          <Button url={"/"} bgColor="ECDB85" textColor="111111" shade="light">
            Домой
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
