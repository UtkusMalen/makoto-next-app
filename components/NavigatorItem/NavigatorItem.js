import Link from "next/link";
import styles from "./NavigatorItem.module.scss";

const NavigatorItem = ({ title, type, icon, href }) => {
  return (
    <Link href={`${href}`}>
      <a>
        <div
          className={
            type === "link" ? styles.navigatorItemLink : styles.navigatorItem
          }>
          <div className={styles.navigatorItemHeader}>
            <div
              style={{ backgroundImage: `url("${icon}")` }}
              className={styles.navigatorItemEmoji}
            />
            <div
              className={
                type === "link"
                  ? styles.navigatorItemLink
                  : styles.navigatorItemArrow
              }
            />
          </div>
          <h3 className={styles.navigatorItemTitle}>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default NavigatorItem;
