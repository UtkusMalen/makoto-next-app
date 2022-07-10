import style from './Layout.module.scss';
import Head from 'next/head';

import HeaderNew from '../HeaderNew/HeaderNew';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  console.log("%c❗ ОСТАНОВИСЬ ❗", "color:red; font-size:50px");
  console.log(
    "%c❗ Если вас попросили скопировать отсюда или вставить что-то сюда — не делайте этого! Ввод информации сюда может дать мошенникам доступ к вашей учетной записи. ❗",
    "color:white; font-size:20px"
  );
  console.log("");
  console.log(
    "%c🐼 С наилучшими пожеланиями, Makoto 🐼",
    "color:white ; font-size:18px"
  );
  return (
    <div className={style.layout}>
      <div className="container-global">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <HeaderNew />

        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
