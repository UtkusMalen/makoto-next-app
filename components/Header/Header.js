import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

const navigation = [
  {
    id: 1,
    title: 'Главная',
    path: '/',
    secondPath: '',
  },
  {
    id: 2,
    title: 'О нас',
    path: '/about',
    secondPath: '',
  },
  {
    id: 3,
    title: 'Правила',
    path: '/rules',
    secondPath: '',
  },

  {
    id: 4,
    title: 'Вики',
    path: '/wiki',
    secondPath: '/navigator',
  },
];

const Header = () => {
  const { pathname } = useRouter();
  const pathFormatted = pathname.split('/');
  const [burger, setBurger] = useState(false);

  if (typeof window !== 'undefined') {
    document.body.style.overflow = burger ? 'hidden' : 'scroll';
  }

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
                    '/' + pathFormatted[1] === path
                      ? styles.active
                      : null
                  }
                >
                  {title}
                </a>
              </Link>
            ))}
          </nav>

          <Button>Начать игру</Button>
        </div>

        <div
          onClick={() => setBurger(!burger)}
          className={styles.navbarBurger}
        >
          <span
            style={{
              transform: burger
                ? `rotate(45deg) translateY(0)`
                : 'rotate(0) translateY(-3px)',
            }}
            className={styles.hamburger__top_bun}
          ></span>
          <span
            style={{
              transform: burger
                ? `rotate(-45deg) translateY(0)`
                : 'rotate(0) translateY(3px)',
            }}
            className={styles.hamburger__bottom_bun}
          ></span>
        </div>

        <div
          style={{
            height: `${burger ? '100%' : '0'}`,
            background: `${
              burger
                ? 'rgba(17, 17, 17, 0.7)'
                : 'rgba(100, 100, 100, 0)'
            }`,
          }}
          className={`${styles.navbarMobileWrapper} ${styles.lol}`}
        >
          <ul
            className={
              burger
                ? styles.navbarMobileListActive
                : styles.navbarMobileList
            }
          >
            <li>Главная</li>
            <li>О нас</li>
            <li>Правила</li>
            <li>Вики</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
