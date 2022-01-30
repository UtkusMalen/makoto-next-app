import styles from "./Button.module.scss";

const Button = ({ children, bgColor = "fff", textColor = "111" }) => {
  return (
    <div
      className={styles.button}
      style={{
        backgroundColor: `#${bgColor}`,
        color: `#${textColor}`,
      }}>
      {children}
      <div className={styles.buttonHover} />
    </div>
  );
};

export default Button;
