import styles from "./RuleItem.module.scss";

const RuleItem = ({ ruleList, title, slug }) => {
  console.log(ruleList);
  return (
    <section id={slug} className={styles.ruleItem}>
      <h2 className={styles.ruleItemTitle}>{title}</h2>
      <div className={styles.ruleItemWrapper}>
        <ul className={styles.ruleItemList}>
          {ruleList.rules.map((rule) => (
            <li key={rule.id} className={styles.item}>
              <div className={styles.itemNumber}>{rule.number}</div>
              <div className={styles.itemWrapper}>
                <div className={styles.itemText}>{rule.rule}</div>
                {rule.penalty ? (
                  <div className={styles.itemPenalty}>
                    <div className={styles.itemPenaltyIcon} />
                    <div className={styles.itemPenaltyText}>
                      <span className={styles.itemPenaltyColor}>
                        Наказание:
                      </span>{" "}
                      {rule.penalty}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RuleItem;
