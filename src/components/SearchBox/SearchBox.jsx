import styles from "./SearchBox.module.css";
import { useState } from "react";

function SearchBox({ value, setValue }) {
  const [val, setVal] = useState(value);

  const handleOnChange = (e) => {
    setVal(e.target.value);
  };

  const handleOnClick = () => {
    setValue(val);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick();
    }
  };

  return (
    <>
      <div className={styles.searchBoxContainer}>
        <p>GitHub username:</p>
        <input
          type="text"
          placeholder="Enter username..."
          className={styles.input}
          value={val}
          onChange={handleOnChange}
          onKeyDown={handleOnKeyDown}
        />
        <button className={styles.btn} onClick={handleOnClick}>
          GO!
        </button>
      </div>
    </>
  );
}

export default SearchBox;
