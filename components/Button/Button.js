import styles from "./Button.module.scss";

const Button = ({
  children,
  bgColor = "fff",
  textColor = "111",
  shade = "light",
  url,
  target
}) => {
  return (
    <a
      target={target || "_self"}
      rel="noreferrer"
      href={url || '#'}
      className={styles.button}
      style={{
        backgroundColor: `#${bgColor}`,
        color: `#${textColor}`,
      }}>
      {children}
      {
        shade === 'light' ? <div className={styles.buttonHover} /> : <div className={styles.buttonHoverDark} />
      }
      
      
    </a>
  );
};

export default Button;
