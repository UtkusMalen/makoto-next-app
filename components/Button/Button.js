import Image from "next/image";
import styles from "./Button.module.scss";

const Button = ({
  children,
  bgColor = "fff",
  textColor = "111",
  shade = "light",
  url,
  target,
  borderColor,
  icon,
  serverIcon,
}) => {
  return (
    <a
      target={target || "_self"}
      rel="noreferrer"
      href={url || "#"}
      className={styles.button}
      style={{
        backgroundColor: borderColor ? `transparent` : `#${bgColor}`,
        color: `#${textColor}`,
        border: borderColor ? `1px solid #${borderColor}` : ``,
      }}>
      {icon ? (
        <div className={styles.buttonIcon}>
          <Image
            src={`/icons/${icon}`}
            alt="Button Icon"
            width={20}
            height={20}
          />
        </div>
      ) : (
        ""
      )}
      {serverIcon ? (
        <div className={styles.buttonIcon}>
          <Image
            src={`http:${serverIcon.fields.file.url}`}
            alt="Button Icon"
            width={20}
            height={20}
          />
        </div>
      ) : (
        ""
      )}
      <p>{children}</p>

      {shade === "light" ? (
        <div className={styles.buttonHover} />
      ) : (
        <div className={styles.buttonHoverDark} />
      )}
    </a>
  );
};

export default Button;
