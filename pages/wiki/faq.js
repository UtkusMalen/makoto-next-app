import DocsLayout from "../../components/Layouts/WikiLayout";
import client from "../../contentful";
import styles from "../../styles/Faq.module.scss";

const DocsPage = ({ faqItem }) => {
  return (
    <div className={styles.faq}>
      <h2 className={styles.faqTitle}>Часто задаваемые вопросы</h2>

      <div className={styles.faqWrapper}>
        {faqItem.map((faqItem) => (
          <div key={faqItem.fields.slug} className={styles.faqItem}>
            <h3 className={styles.faqItemQuestion}>
              {faqItem.fields.question}
            </h3>
            <p className={styles.faqItemAnswer}>{faqItem.fields.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const faq = await client.getEntries({
    content_type: "faqItem",
  });

  return {
    props: {
      faqItem: faq.items,
    },
  };
};

DocsPage.Layout = DocsLayout;

export default DocsPage;
