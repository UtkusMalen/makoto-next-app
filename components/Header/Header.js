import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import styles from "./Header.module.scss";

const navigation = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    secondPath: "",
  },
  {
    id: 2,
    title: "О нас",
    path: "/about",
    secondPath: "",
  },
  {
    id: 3,
    title: "Правила",
    path: "/rules",
    secondPath: "",
  },

  {
    id: 4,
    title: "Вики",
    path: "/wiki",
    secondPath: "/navigator",
  },
];

const Header = () => {
  const { pathname } = useRouter();
  const pathFormatted = pathname.split("/");

  return (
    <div className="container-max">
      <div className={styles.header}>
        <div className={styles.logo} />

        <div className={styles.navbarWrapper}>
          <nav>
            {navigation.map(({ id, title, path, secondPath }) => (
              <Link key={id} href={path + secondPath}>
                <a
                  className={
                    "/" + pathFormatted[1] === path ? styles.active : null
                  }>
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
