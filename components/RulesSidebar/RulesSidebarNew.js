import styles from "./RulesSidebar.module.scss";
import { Link } from "react-scroll";

const RulesSidebarNew = ({ title, emoji, slug }) => {
  const clickHandler = (event) => {
    event.preventDefault();
    const location = document.getElementById(slug).offsetTop;

    window.scrollTo({
      left: 0,
      top: location + 40,
    });
  };


  return (
    <li className={styles.sidebarItemWrapper}>
      <a href={`/rules#${slug}`} onClick={clickHandler}>
        <div className={styles.sidebarItem}>
          <div
            className={styles.sidebarEmoji}
            style={{
              backgroundImage: `url("${emoji.fields.file.url}")`,
            }}
          />
          <h3 className={styles.sidebarItemText}>{title}</h3>
        </div>
      </a>
    </li>
  );
};

export default RulesSidebarNew;
