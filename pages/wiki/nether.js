import Dropdown from "../../components/Dropdown/Dropdown";
import DocsLayout from "../../components/Layouts/WikiLayout";
import styles from "../../styles/Nether.module.scss";
import client from "../../contentful";

const DocsPage = ({ branches }) => {
  return (
    <div className={styles.nether}>
      <h2 className={styles.netherTitle}>Ад</h2>
      <div className={styles.netherWrapper}>
        <h3 className={styles.netherSubtitle}>
          Нижний мир является логистическим центром на нашем сервере.
        </h3>
        <p className={styles.netherText}>
          Именно через ад путешествует большинство игроков. Этому способдствуют
          хайперлупы, которые простираются в даль адских пещер.
        </p>
        <h3 className={styles.netherSubtitle}>Важные места на ветках</h3>

        <div className={styles.netherTree}>
          {branches.map((block) => (
            <Dropdown key={block.fields.slug} data={block.fields} />
          ))}
        </div>
      </div>
    </div>
  );
};

DocsPage.Layout = DocsLayout;

export const getServerSideProps = async () => {
  const branches = await client.getEntries({
    content_type: "netherBranch",
  });

  return {
    props: {
      branches: branches.items,
    },
  };
};

export default DocsPage;
