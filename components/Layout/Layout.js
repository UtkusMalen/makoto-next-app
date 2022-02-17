import style from "./Layout.module.scss";
import Head from "next/head";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className="container-global">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
