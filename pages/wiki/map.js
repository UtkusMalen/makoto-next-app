import DocsLayout from "../../components/Layouts/WikiLayout";
import styles from "../../styles/Map.module.scss";

const DocsPage = () => {
  return (
    <div className={styles.map}>
      <h2 className={styles.mapTitle}>Карта</h2>
      <div className={styles.mapWrapper}>
        <h3 className={styles.mapAttention}>
          Приносим свои извинения, но карта пока не готова. Возможно в будущем
          мы добавим её. Желаем вам приятной игры!
        </h3>
      </div>
    </div>
  );
};

DocsPage.Layout = DocsLayout;

export default DocsPage;
