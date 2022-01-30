import Head from "next/head";
import MainText from "../components/MainText/MainText";
import styles from "../styles/Home.module.scss";

export default function Home({ title }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
      </Head>
      <MainText />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Makoto | Главная",
    },
  };
};
