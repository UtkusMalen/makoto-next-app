import { parseRelativeUrl } from "next/dist/shared/lib/router/utils/parse-relative-url";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";
import "../styles/noiseBg.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
