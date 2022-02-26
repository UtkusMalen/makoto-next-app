import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url";
import Layout from "../components/Layout/Layout";
import DefaultLayout from "../components/Layouts/DefaultLayout";
import "../styles/globals.scss";
import "../styles/noiseBg.scss";

function MyApp({ Component, pageProps }) {
  const SecondLayout = Component.Layout || DefaultLayout;

  return (
    <Layout>
      <SecondLayout>
        <Component {...pageProps} />
      </SecondLayout>
    </Layout>
  );
}

export default MyApp;
