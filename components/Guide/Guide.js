import styles from "./Guide.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Button from "../Button/Button";

const Guide = ({ guideTitleText, guideTitleEmoji, guideSteps }) => {
  function SortAscending(arr) {
    return arr.sort((a, b) => (a.fields.id > b.fields.id ? 1 : -1));
  }
  SortAscending(guideSteps);
  console.log(guideSteps[1].fields.image.fields.file.details.image.height);
  return (
    <section id="guide" className={styles.guide}>
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
            {guideSteps.map((step) => (
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
                      width={
                        step.fields.image.fields.file.details.image.width / 2
                      }
                      height={
                        step.fields.image.fields.file.details.image.height / 2
                      }
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
            <Button
              url="https://discord.com/invite/yzBCF4V"
              target="_blank"
              icon="discordButton.svg"
              borderColor="ECDB85"
              textColor="ECDB85">
              Discord Сервер
            </Button>
            <Button
              url="https://donate.makotomc.ru/"
              target="_blank"
              icon="shopButtonOutline.svg"
              bgColor="ECDB85"
              textColor="111"
              shade="light">
              Магазин
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
