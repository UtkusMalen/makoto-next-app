import styles from "./RulesSidebar.module.scss";

const RulesSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.sidebarTitle}>Правила сервера</h2>
      <div className={styles.sidebarListWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
          <li className={styles.sidebarItem}>
            <div className={styles.sidebarEmoji} />
            <h3 className={styles.sidebarItemText}>I. Поведение на сервере</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RulesSidebar;
