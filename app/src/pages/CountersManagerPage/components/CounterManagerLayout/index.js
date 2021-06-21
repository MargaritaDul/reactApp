import Counter from "../../../../commonComponents/Counter";

const CounterManagerLayout = ({
  addOnBtnClick,
  counterList,
  handleIncrement,
  handleDecrement,
  handleReset,
  handleCounterRemove,
  countersValueSum,
}) => {
  return (
    <div>
      <div>
        <p>Sum: {countersValueSum}</p>
        <p>Quantity: {counterList.length}</p>
      </div>
      <div>
        <button onClick={addOnBtnClick}>Add Counter</button>
        <button onClick={handleReset}>Reset</button>
        <div>
          {counterList.map((counter, index) => {
            return (
              <div key={index}>
                <Counter
                  countValue={counter.countValue}
                  handleIncrement={() => handleIncrement(index)}
                  handleDecrement={() => handleDecrement(index)}
                  handleReset={handleReset}
                  handleCounterRemove={() => handleCounterRemove(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default CounterManagerLayout;
