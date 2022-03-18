import DocsLayout from "../../components/Layouts/WikiLayout";
import client from "../../contentful";
import styles from "../../styles/Hyperloop.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const DocsPage = ({ portalGuide }) => {
  function SortAscending(arr) {
    return arr.sort((a, b) => (a.fields.id > b.fields.id ? 1 : -1));
  }
  SortAscending(portalGuide);
  return (
    <div className={styles.hyperloop}>
      <h2 className={styles.hyperloopTitle}>Хайперлуп</h2>
      <div className={styles.hyperloopWrapper}>
        <h3 className={styles.hyperloopSubtitle}>
          Хайперлуп — это основное средство передвижения на сервере.
        </h3>
        <p className={styles.hyperloopText}>
          Исходя из центра ада (хаба), протянулись четыре ветки метро
          (хайперлупы). На каждой такой ветке вы можете разместить свой магазин
          или портал, который ведет к вашему дому.
        </p>
        <div className={styles.guide}>
          <h3 className={styles.guideTitle}>
            Как разместить портал на ветке в аду?
          </h3>
          {portalGuide.map((guideItem) => (
            <div key={guideItem.fields.id} className={styles.guideItem}>
              <div
                style={{
                  backgroundImage: `url("${guideItem.fields.image.fields.file.url}")`,
                }}
                className={styles.guideImage}>
                <div className={styles.guideNumber}>
                  Шаг {guideItem.fields.id}
                </div>
              </div>
              <div className={styles.guideTextWrapper}>
                <h4 className={styles.guideTextTitle}>
                  {guideItem.fields.title}
                </h4>
                <div className={styles.guideText}>
                  {documentToReactComponents(guideItem.fields.text)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

DocsPage.Layout = DocsLayout;

export const getServerSideProps = async () => {
  const portalGuide = await client.getEntries({
    content_type: "hyperloopPortalGuide",
  });

  return {
    props: {
      portalGuide: portalGuide.items,
    },
  };
};

export default DocsPage;
