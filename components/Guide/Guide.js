import styles from "./Guide.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Button from "../Button/Button";

const Guide = ({ guideTitleText, guideTitleEmoji, guideSteps }) => {
  return (
    <div className={styles.guide}>
      <div className="container">
        <div className={styles.guideWrapper}>
          <div className={styles.guideTitleWrapper}>
            <div
              style={{
                backgroundImage: `url("${guideTitleEmoji.fields.file.url}")`,
              }}
              className={styles.guideTitleEmoji}
            />
            <h3 className={styles.guideTitleText}>{guideTitleText}</h3>
          </div>
          <div className={styles.guideStepsWrapper}>
            {guideSteps.reverse().map((step) => (
              <div key={step.fields.slug} className={styles.guideStepWrapper}>
                <div
                  style={{
                    backgroundImage:
                      step.fields.image ||
                      guideSteps.slice(-1)[0].fields.slug === step.fields.slug
                        ? ""
                        : `url("/SVG/arrow.svg")`,
                  }}
                  className={styles.guideArrow}
                />
                <div
                  style={{
                    backgroundImage: `url("/SVG/arrow2.svg")`,
                  }}
                  className={styles.guideArrow2}
                />
                <div className={styles.guideStepHeader}>
                  <div className={styles.guideStepDot} />
                  <div className={styles.guideStepText}>
                    {documentToReactComponents(step.fields.guideStepText)}
                  </div>
                </div>
                <div className="yellowText"></div>
                {step.fields.image ? (
                  <div className={styles.guideStepImage}>
                    <Image
                      alt="Image"
                      width={500}
                      height={500}
                      src={`https:${step.fields.image.fields.file.url}`}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
          <div className={styles.guideButtonsWrapper}>
            <Button icon='discordButton.svg' borderColor="ECDB85" textColor="ECDB85">
              Discord Сервер
            </Button>
            <Button icon='shopButtonOutline.svg' bgColor="ECDB85" textColor="111" shade="light">
              Магазин
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
