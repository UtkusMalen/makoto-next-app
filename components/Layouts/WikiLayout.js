import Head from "next/head";
import Link from "next/link";
import styles from "./WikiLayout.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";

const navigation = [
  {
    id: 1,
    title: "",
    links: [
      {
        id: 1,
        title: "Навигатор",
        path: "/docs/page1",
      },
      {
        id: 2,
        title: "Часто задаваемые вопросы",
        path: "/docs/page2",
      },
    ],
  },
  {
    id: 2,
    title: "Миры сервера",
    links: [
      {
        id: 1,
        title: "Верхний мир",
        path: "/docs/page1",
      },
      {
        id: 2,
        title: "Энд",
        path: "/docs/page1",
      },
      {
        id: 3,
        title: "Ад",
        path: "/docs/page1",
      },
    ],
  },
  {
    id: 3,
    title: "Прочее",
    links: [
      {
        id: 1,
        title: "Хайперлуп",
        path: "/docs/page1",
      },
      {
        id: 2,
        title: "Карта",
        path: "/docs/page1",
      },
    ],
  },
];

const WikiLayout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="container-max">
      <Head>
        <title>{"Makoto | Вики"}</title>
      </Head>
      <div className={styles.wikiWrapper}>
        <div className={styles.wikiMenuWrapper}>
          <h2 className={styles.wikiMenuTitle}>Вики</h2>
          <nav className={styles.wikiMenu}>
            {navigation.map((menuBlock) => (
              <>
                {menuBlock.title ? (
                  <h4 className={styles.wikiMenuSubtitle}>{menuBlock.title}</h4>
                ) : (
                  ""
                )}

                <ul key={menuBlock.id} className={styles.wikiMenuList}>
                  {menuBlock.links.map((menuItem) => (
                    <li
                      key={menuItem.id}
                      className={
                        pathname === menuItem.path
                          ? styles.wikiMenuItemActive
                          : styles.wikiMenuItem
                      }>
                      <Image
                        src={"/emoji/emoji1.png"}
                        width={30}
                        height={30}
                        alt="emoji"
                      />
                      <Link href={`${menuItem.path}`}>
                        <a>{menuItem.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </nav>
        </div>
        <div className={styles.wikiContentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default WikiLayout;
