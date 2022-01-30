import Button from "../Button/Button";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className="container-max">
      <div className={style.header}>
        <div className={style.logo} />
        <div className={style.navbarWrapper}>
          <nav>
            <a href="">Главная</a>
            <a href="">О нас</a>
            <a href="">Правила</a>
            <a href="">Вики</a>
          </nav>

          <Button>Начать игру</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
