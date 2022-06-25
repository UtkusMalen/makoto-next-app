import Head from "next/head";
import NavigatorItem from "../../components/NavigatorItem/NavigatorItem";
import client from "../../contentful";
import styles from "../../styles/Navigator.module.scss";

const navigation = [
  {
    id: 1,
    title: "Вики",
    items: [
      {
        id: 1,
        title: "Часто задаваемые вопросы",
        icon: "/emoji/questions.png",
        type: "default",
        href: "/wiki/faq",
      },
      {
        id: 2,
        title: "Discord",
        icon: "/icons/discordIconWhte.svg",
        type: "link",
        href: "https://discord.com/invite/yzBCF4V",
      },
      {
        id: 3,
        title: "ВКонтакте",
        icon: "/icons/vkIconWhite.svg",
        type: "link",
        href: "https://vk.com/makotomc",
      },
      {
        id: 4,
        title: "Телеграм",
        icon: "/icons/telegramIconWhite.svg",
        type: "link",
        href: "https://t.me/makotomc",
      },
    ],
  },
  {
    id: 2,
    title: "Миры сервера",
    items: [
      {
        id: 1,
        title: "Верхний мир",
        icon: "/emoji/overworld.png",
        type: "default",
        href: "/wiki/overworld",
      },
      {
        id: 2,
        title: "Энд",
        icon: "/emoji/end.png",
        type: "default",
        href: "/wiki/end",
      },
      {
        id: 3,
        title: "Ад",
        icon: "/emoji/nether.png",
        type: "default",
        href: "/wiki/nether",
      },
    ],
  },
  {
    id: 3,
    title: "Прочее",
    items: [
      {
        id: 1,
        title: "Карта",
        icon: "/emoji/map.png",
        type: "default",
        href: "/wiki/map",
      },
      {
        id: 2,
        title: "Хайперлуп",
        icon: "/emoji/hyperloop.png",
        type: "default",
        href: "/wiki/hyperloop",
      },
    ],
  },
];

const DocsPage = ({ rules }) => {
  return (
    <div className={styles.navigator}>
      <Head>
        <title>Makoto | Навигатор</title>
      </Head>
      <div className="container-max">
        <div className={styles.navigatorWrapper}>
          {navigation.map((navBlock) => (
            <div key={navBlock.id} className={styles.navigatorBlock}>
              <h2 className={styles.navigatorBlockTitle}>{navBlock.title}</h2>
              <div className={styles.navigatorBlockWrapper}>
                {navBlock.items.map((navItem) => (
                  <NavigatorItem
                    type={navItem.type}
                    key={navItem.id}
                    title={navItem.title}
                    icon={navItem.icon}
                    href={navItem.href}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const rules = await client.getEntries({
    content_type: "rulesPage",
    limit: 1,
  });

  const ruleContainers = await client.getEntries({
    content_type: "ruleContainer",
  });

  const [rulesPage] = rules.items;
  return {
    props: {
      rules: rulesPage,
      ruleContainers: ruleContainers.items,
    },
  };
};

export default DocsPage;
