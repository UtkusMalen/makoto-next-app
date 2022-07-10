import Dropdown from "../../components/Dropdown/Dropdown";
import DocsLayout from "../../components/Layouts/WikiLayout";
import styles from "../../styles/Overworld.module.scss";
import client from "../../contentful";

const DocsPage = ({ overworld }) => {
  return (
    <div className={styles.overworld}>
      <h2 className={styles.overworldTitle}>Верхний мир</h2>
      <div className={styles.overworldWrapper}>
        <h3 className={styles.overworldSubtitle}>
          Верхний мир на нашем сервере – это бескранйяя территория для полета
          вашей фантазии.
        </h3>
        <div className={styles.overworldImage} />
        <p className={styles.overworldText}>
          У нас нет отдельного мира для ферм и построек, так что огромные фермы
          и постройки Вы можете спокойно воздвигать в обычном мире.
        </p>
        <p className={styles.overworldText}>
          Размер мира — 10к в каждую сторону.
        </p>

        <div className={styles.dropdownWrapper}>
          <Dropdown width="100" data={overworld[0].fields} />
        </div>
      </div>
    </div>
  );
};

DocsPage.Layout = DocsLayout;

export const getServerSideProps = async () => {
  const overworld = await client.getEntries({
    content_type: "overworld",
  });

  return {
    props: {
      overworld: overworld.items,
    },
  };
};

export default DocsPage;
