import styles from "./RulesSidebar.module.scss";
import { Link } from "react-scroll";

const RulesSidebar = ({ title, emoji, slug }) => {
  return (
    <li className={styles.sidebarItemWrapper}>
      <Link
        activeClass={styles.sidebarItemActive}
        to={slug}
        spy={true}
        offset={-60}
        smooth={true}
        
        duration={500}>
        <div className={styles.sidebarItem}>
          <div
            className={styles.sidebarEmoji}
            style={{
              backgroundImage: `url("${emoji.fields.file.url}")`,
            }}
          />
          <h3 className={styles.sidebarItemText}>{title}</h3>
        </div>
      </Link>
    </li>
  );
};

export default RulesSidebar;
