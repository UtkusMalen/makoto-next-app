import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className={styles.footerContentWrapper}>
            <div className={styles.footerLogoWrapper}>
              <div className={styles.footerLogoImage} />
              <div className={styles.footerLogoName}>MAKOTO</div>
            </div>

            <div className={styles.footerDescription}>
              Майнкрафт, который мы заслужили
            </div>

            <div className={styles.footerNavWrapper}>
              <div className={styles.footerNavBlock}>
                <h4 className={styles.footerNavTitle}>Навигация</h4>
                <ul className={styles.footerNavList}>
                  <li className={styles.footerNavItem}>
                    <a href="#" className={styles.footerNavLink}>
                      Главная
                    </a>
                  </li>
                  <li className={styles.footerNavItem}>
                    <a href="#" className={styles.footerNavLink}>
                      О нас
                    </a>
                  </li>
                  <li className={styles.footerNavItem}>
                    <a href="#" className={styles.footerNavLink}>
                      Правила
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.footerNavBlock}>
                <h4 className={styles.footerNavTitle}>Контакты</h4>
                <ul className={styles.footerNavList}>
                  <li className={styles.footerNavItem}>
                    <div className={styles.footerNavIcon} />
                    <a href="#" className={styles.footerNavLink}>
                      Дискорд
                    </a>
                  </li>
                  <li className={styles.footerNavItem}>
                    <div className={styles.footerNavIcon} />
                    <a href="#" className={styles.footerNavLink}>
                      ВКонтакте
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.footerCopyright}>
              Copyright 2022 Makoto. All rights reserved.
            </div>
          </div>
          <div className={styles.footerImage} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
