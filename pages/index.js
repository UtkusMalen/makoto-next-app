import Head from "next/head";
import MainText from "../components/MainText/MainText";
import TimerLine from "../components/TimerLine/TimerLine";
export default function Home({ title }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>{title}</title>
        </Head>
        <MainText />
      </div>
      <TimerLine />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      title: "Makoto | Главная",
    },
  };
};
