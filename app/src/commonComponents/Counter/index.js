import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Counter = ({
  countValue,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCounterRemove,
  countersValueSum,
}) => {
  return (
    <div>
      <h1>Counter</h1>
      <div className={styles.wrapper}>
        <div className={styles.screen}>{countValue}</div>
        <div className={styles.isEven}>
          {countValue % 2 === 0 ? <p>Even</p> : <p>Odd</p>}
        </div>
        <div className={styles.controlsArea}>
          <button className={styles.controlButton} onClick={handleDecrement}>
            -
          </button>
          <button className={styles.controlButton} onClick={handleReset}>
            Reset
          </button>
          <button className={styles.controlButton} onClick={handleIncrement}>
            +
          </button>
          <button
            className={styles.controlButton}
            onClick={handleCounterRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

export default Counter;
