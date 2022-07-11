import Dropdown from "../../components/Dropdown/Dropdown";
import DocsLayout from "../../components/Layouts/WikiLayout";
import styles from "../../styles/End.module.scss";

const DocsPage = () => (
  <div className={styles.end}>
    <h2 className={styles.endTitle}>Энд</h2>
    <div className={styles.endWrapper}>
      <h3 className={styles.endSubtitle}>
        Край на нашем сервере – это пустота, в которой вы найдете заветные
        крылья.
      </h3>
      <div className={styles.endImage} />
      <p className={styles.endText}>
        Дракон спит и грезит, а шалкера с элитрами ждут Вас в
        бесконечной пустоте. Советуем быть аккуратными и не падать в бескрайнюю
        бездну.
      </p>
      <p className={styles.endText}>Размер мира всегда колеблется, уточняйте у администрации.</p>
    </div>
  </div>
);

DocsPage.Layout = DocsLayout;

export default DocsPage;
