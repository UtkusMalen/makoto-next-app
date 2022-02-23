import Head from "next/head";
import RuleItem from "../components/RuleItem/RuleItem";
import RulesSidebar from "../components/RulesSidebar/RulesSidebar";
import client from "../contentful";
import styles from "../styles/Rules.module.scss";
import items from "../utils/rulesData";

const Rules = ({ rules }) => {
  const { title } = rules.fields;
  console.log(rules);
  return (
    <>
      <Head>
        <title>{rules ? title : "Makoto"}</title>
      </Head>
      <div className="container-max">
        <div className={styles.rulesWrapper}>
          <RulesSidebar />
          <div className={styles.rulesitemsList}>
            <RuleItem />
            <RuleItem />
            <RuleItem />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const rules = await client.getEntries({
    content_type: "rulesPage",
    limit: 1,
  });

  const [rulesPage] = rules.items;
  return {
    props: {
      rules: rulesPage,
    },
  };
};

export default Rules;
