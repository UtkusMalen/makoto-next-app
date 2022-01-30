import styles from "./Button.module.scss";

const Button = ({
  children,
  bgColor = "fff",
  textColor = "111",
  shade = "light",
}) => {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: `#${bgColor}`,
        color: `#${textColor}`,
      }}>
      {children}
      {
        shade === 'light' ? <div className={styles.buttonHover} /> : <div className={styles.buttonHoverDark} />
      }
      
      
    </div>
  );
};

export default Button;
