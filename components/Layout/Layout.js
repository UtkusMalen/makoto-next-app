import style from "./Layout.module.scss";
import Head from "next/head";

import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <div className="container-global">
        <Head>
          <title>Makoto</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header />

        {children}
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default Layout;
