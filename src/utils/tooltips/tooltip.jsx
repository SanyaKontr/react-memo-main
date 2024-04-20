import styles from "./tooltip.module.css";

export function ToolTips({ title, text }) {
  return (
    <div className={styles.toolTip}>
      {title ? <p className={styles.toolTipTitle}>{title}</p> : null}
      <p className={styles.toolTipText}>{text}</p>
    </div>
  );
}
