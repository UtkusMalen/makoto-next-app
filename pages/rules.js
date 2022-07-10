import Head from "next/head";
import RuleItem from "../components/RuleItem/RuleItem";
import RulesSidebar from "../components/RulesSidebar/RulesSidebar";
import client from "../contentful";
import styles from "../styles/Rules.module.scss";
import items from "../utils/rulesData";
import { animateScroll } from "react-scroll";

const Rules = ({ rules, ruleContainers }) => {
  const { title } = rules.fields;

  function SortAscending(arr) {
    return arr.sort((a, b) => (a.fields.id > b.fields.id ? 1 : -1));
  }
  SortAscending(ruleContainers);

  const pageUp = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Head>
        <title>{rules ? title : "Makoto"}</title>
      </Head>
      <div className="container">
        <div className={styles.rulesWrapper}>
          <div onClick={pageUp} className={styles.rulesPageUp}>
            <div className={styles.rulesArrow}></div>
          </div>
          <div className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Правила сервера</h2>
            <div className={styles.sidebarListWrapper}>
              <ul className={styles.sidebarList} id="sidebarList">
                {ruleContainers.map((rule) => (
                  <RulesSidebar
                    key={rule.fields.slug}
                    title={rule.fields.title}
                    emoji={rule.fields.emoji}
                    slug={rule.fields.slug}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.rulesitemsList}>
            {ruleContainers.map((container) => (
              <RuleItem
                key={container.fields.slug}
                ruleList={container.fields.listOfRules}
                title={container.fields.title}
                slug={container.fields.slug}
              />
            ))}
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

  const ruleContainers = await client.getEntries({
    content_type: "ruleContainer",
  });

  const [rulesPage] = rules.items;
  return {
    props: {
      rules: rulesPage,
      ruleContainers: ruleContainers.items,
    },
  };
};

export default Rules;
