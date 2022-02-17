import AboutItem from "../AboutItem/AboutItem";
import Button from "../Button/Button";
import styles from "./About.module.scss";

const About = ({ articles }) => {
  console.log(articles);
  return (
    <div className="container">
      <div className={styles.about}>
        {articles.map((article) => (
          <AboutItem
            key={article.fields.slug}
            reverse={articles.indexOf(article) % 2 === 0 ? "true" : "false"}
            articleFields={article.fields}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
