import style from "./Layout.module.scss";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Head>
        <title>Makoto</title>
        
      </Head>
      <h1>Header</h1>
      {children}
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;
