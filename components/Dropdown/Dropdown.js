import styles from "./Dropdown.module.scss";
import { useState } from "react";

const Dropdown = ({ data, width }) => {
  const [open, setOpen] = useState(false);

  return (
    <div onClick={() => setOpen(!open)} className={styles.dropdownBranch}>
      <div className={styles.dropdownBranchHeader}>
        <h4
          style={{
            color:
              data.color === "red"
                ? "#E57272"
                : data.color === "blue"
                ? "#72A7E5"
                : data.color === "green"
                ? "#B9E572"
                : data.color === "yellow"
                ? "#E5D372"
                : "#E7E7E7",
          }}
          className={styles.dropdownBranchTitle}>
          {data.title}
        </h4>
        <div
          style={{
            transform: `rotate(${open ? "225" : "45"}deg) scale(0.8)`,
            borderColor:
              data.color === "red"
                ? "#E57272"
                : data.color === "blue"
                ? "#72A7E5"
                : data.color === "green"
                ? "#B9E572"
                : data.color === "yellow"
                ? "#E5D372"
                : "#E7E7E7",
          }}
          className={styles.dropdownBranchArrow}
        />
      </div>

      <ul
        className={
          open ? styles.dropdownBranchListActive : styles.dropdownBranchList
        }>
        {data
          ? data.items.items.map((item) => (
              <li className={styles.dropdownItem} key={item.id}>
                <div
                  style={{ width: `${width}px` || "30px" }}
                  className={styles.dropdownCoordinates}>
                  {item.coordinates.replace(/,/g, " | ")}
                </div>
                <span className={styles.dropdownLine}>—</span>
                <div className={styles.dropdownText}> {item.text}</div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default Dropdown;
