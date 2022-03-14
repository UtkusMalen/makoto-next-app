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
        path: "/wiki/navigator",
        emoji: "/emoji/navigator.png",
      },
      {
        id: 2,
        title: "Часто задаваемые вопросы",
        path: "/wiki/faq",
        emoji: "/emoji/questions.png",
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
        path: "/wiki/overworld",
        emoji: "/emoji/overworld.png",
      },
      {
        id: 2,
        title: "Энд",
        path: "/wiki/end",
        emoji: "/emoji/end.png",
      },
      {
        id: 3,
        title: "Ад",
        path: "/wiki/nether",
        emoji: "/emoji/nether.png",
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
        path: "/wiki/page1",
        emoji: "/emoji/hyperloop.png",
      },
      {
        id: 2,
        title: "Карта",
        path: "/wiki/page1",
        emoji: "/emoji/map.png",
      },
    ],
  },
];

const WikiLayout = ({ children, paths }) => {
  const { pathname } = useRouter();
  console.log(paths);

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
              <div key={menuBlock.id}>
                {menuBlock.title ? (
                  <h4 className={styles.wikiMenuSubtitle}>{menuBlock.title}</h4>
                ) : (
                  ""
                )}

                <ul key={menuBlock.id} className={styles.wikiMenuList}>
                  {menuBlock.links.map((menuItem) => (
                    <Link key={menuItem.id} href={`${menuItem.path}`}>
                      <a>
                        <li
                          className={
                            pathname === menuItem.path
                              ? styles.wikiMenuItemActive
                              : styles.wikiMenuItem
                          }>
                          <img
                            className={styles.wikiMenuEmoji}
                            src={
                              menuItem.emoji
                                ? menuItem.emoji
                                : "/emoji/emoji1.png"
                            }
                            alt="Emoji"
                          />
                          <h5 className={styles.wikiMenuItemTitle}>
                            {menuItem.title}
                          </h5>
                        </li>
                      </a>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.wikiContentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default WikiLayout;
