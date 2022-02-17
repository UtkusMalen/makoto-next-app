import Head from "next/head";
import client from "../contentful";
import MainText from "../components/MainText/MainText";
import TimerLine from "../components/TimerLine/TimerLine";
import About from "../components/About/About";

export default function Home({ home, serverData, articles }) {
  return (
    <>
      <div className="container">
        <Head>
          <title>{home.fields.title}</title>
        </Head>
        <MainText pageData={home} serverData={serverData} />
      </div>
      <TimerLine />
      <About articles={articles} />
    </>
  );
}

export const getServerSideProps = async () => {
  const home = await client.getEntries({
    content_type: "homePage",
    limit: 1,
  });

  const articles = await client.getEntries({
    content_type: "aboutArticle",
  });

  const data = await fetch(
    "https://eu.mc-api.net/v3/server/ping/vanilla.makotomc.ru"
  );
  const dataJson = await data.json();

  const [homePage] = home.items;
  return {
    props: {
      home: homePage,
      articles: articles.items,
      serverData: dataJson,
    },
  };
};
