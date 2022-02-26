import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const navigation = [
  {
    id: 1,
    title: "Главная",
    path: "/",
  },
  {
    id: 2,
    title: "О нас",
    path: "/about",
  },
  {
    id: 3,
    title: "Правила",
    path: "/rules",
  },
  {
    id: 4,
    title: "Вики",
    path: "/wiki",
  },
  {
    id: 5,
    title: "Доки",
    path: "/docs/page1",
  },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="container-max">
      <div className={styles.header}>
        <div className={styles.logo} />

        <div className={styles.navbarWrapper}>
          <nav>
            {navigation.map(({ id, title, path }) => (
              <Link key={id} href={path}>
                <a className={pathname === path ? styles.active : null}>
                  {title}
                </a>
              </Link>
            ))}
          </nav>

          <Button>Начать игру</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
