import Button from "../Button/Button";
import styles from "./Donate.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutItem = ({ eternalPlus }) => {
  return (
    <div className="container">
      <div className={styles.donate}>
        <div className={styles.donateImage} />
        <div className={styles.donateTextWrapper}>
          <div className={styles.donateTitleWrapper}>
            <h3 className={styles.donateTitle}>
              {eternalPlus[0].fields.title}
            </h3>
            <div
              style={{
                backgroundImage: `url("${eternalPlus[0].fields.emoji.fields.file.url}")`,
              }}
              className={styles.donateTitleEmoji}
            />
          </div>

          <div className={styles.donateDescription}>
            {documentToReactComponents(eternalPlus[0].fields.description)}
          </div>

          <div className={styles.donateBenefits}>
            {eternalPlus[0].fields.benifits.map((benifit) => (
              <div key={benifit} className={styles.benefit}>
                {benifit}
              </div>
            ))}
          </div>

          <Button
            target="_blank"
            bgColor="ECDB85"
            textColor="111111"
            shade="light"
            serverIcon={eternalPlus[0].fields.buttonIcon}>
            Купить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
