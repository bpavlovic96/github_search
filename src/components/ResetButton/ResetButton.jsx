import styles from "./ResetButton.module.css";

function ResetButton({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Reset
    </button>
  );
}

export default ResetButton;
