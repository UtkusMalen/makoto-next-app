import styles from "./RuleItem.module.scss";

const RuleItem = () => {
  return (
    <div className={styles.ruleItem}>
      <h2 className={styles.ruleItemTitle}>I. Поведение на сервере</h2>
      <div className={styles.ruleItemWrapper}>
        <ul className={styles.ruleItemList}>
          <li className={styles.item}>
            <div className={styles.itemNumber}>1.1</div>
            <div className={styles.itemWrapper}>
              <div className={styles.itemText}>
                Запрещены оскорбления в грубом виде. Наказание приводится в
                исполнение при условии что, потерпевшая сторона подаёт жалобу на
                обидчика, либо при условии того, что нарушитель очевидно всерьёз
                оскорбляет человека.
              </div>
              <div className={styles.itemPenalty}>
                <div className={styles.itemPenaltyIcon} />
                <div className={styles.itemPenaltyText}>
                  <span className={styles.itemPenaltyColor}>Наказание:</span> Временный мут, срок определяется
                  модератором. Максимальный срок за оскорбление - 7 дней. При
                  неоднократном нарушении срок мута может быть увеличен вплоть
                  до 2-ух месяцев.
                </div>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.itemNumber}>1.1</div>
            <div className={styles.itemWrapper}>
              <div className={styles.itemText}>
                Запрещены оскорбления в грубом виде. Наказание приводится в
                исполнение при условии что, потерпевшая сторона подаёт жалобу на
                обидчика, либо при условии того, что нарушитель очевидно всерьёз
                оскорбляет человека.
              </div>
              <div className={styles.itemPenalty}>
                <div className={styles.itemPenaltyIcon} />
                <div className={styles.itemPenaltyText}>
                  <span className={styles.itemPenaltyColor}>Наказание:</span> Временный мут, срок определяется
                  модератором. Максимальный срок за оскорбление - 7 дней. При
                  неоднократном нарушении срок мута может быть увеличен вплоть
                  до 2-ух месяцев.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RuleItem;
