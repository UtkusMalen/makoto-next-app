import Button from "../Button/Button";
import styles from "./AboutItem.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutItem = ({ reverse, articleFields }) => {
  const { title, description, buttonText, buttonUrl, emoji, image } =
    articleFields;
  return (
    <div
      style={{ flexDirection: reverse === "true" ? "row-reverse" : "row" }}
      className={styles.aboutItem}>
      <div
        style={{ backgroundImage: `url("${image.fields.file.url}")` }}
        className={styles.aboutImage}
      />
      <div className={styles.aboutTextWrapper}>
        <div className={styles.aboutTitleWtapper}>
          <div
            style={{ backgroundImage: `url("${emoji.fields.file.url}")` }}
            className={styles.aboutTitleEmoji}
          />
          <h3 className={styles.aboutTitle}>{title}</h3>
        </div>
        <div className={styles.aboutDescription}>
          {documentToReactComponents(description)}
        </div>
        <Button
          url={buttonUrl}
          target="_blank"
          bgColor="ECDB85"
          textColor="111111"
          shade="light">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default AboutItem;
