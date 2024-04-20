import styles from "./Button.module.css";

export function Button({ disabled, children, onClick }) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
