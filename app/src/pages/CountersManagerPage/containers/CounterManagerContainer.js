import { useState, useCallback, useMemo } from "react";

import CounterManagerLayout from "../components/CounterManagerLayout";

const CounterManagerContainer = () => {
  const [counterList, setCountersList] = useState([]);

  const countersValueSum = useMemo(
    () =>
      counterList.reduce((result, { countValue }) => result + countValue, 0),
    [counterList]
  );

  const addOnBtnClick = useCallback(() => {
    const updatedList = counterList.map((counter) => {
      const isEven = counter.countValue % 2 === 0;
      return {
        countValue: isEven ? counter.countValue + 1 : counter.countValue,
      };
    });
    setCountersList([...updatedList, { countValue: 0 }]);
  }, [counterList]);

  const handleCounterRemove = useCallback(
    (index) => {
      const countersCopy = [...counterList];

      countersCopy.splice(index, 1);

      const updatedList = countersCopy.map(({ countValue }) => {
        const isOdd = countValue % 2 !== 0;
        return {
          countValue: isOdd ? countValue - 1 : countValue,
        };
      });
      setCountersList(updatedList);
    },
    [counterList]
  );

  const handleIncrement = useCallback(
    (index) => {
      const countersListCopy = [...counterList];
      const findItem = countersListCopy[index];
      findItem.countValue = findItem.countValue + 1;
      setCountersList(countersListCopy);
    },
    [counterList]
  );

  const handleDecrement = useCallback(
    (index) => {
      const countersListCopy = [...counterList];
      const findItem = countersListCopy[index];
      if (findItem.countValue > 0) {
        findItem.countValue = findItem.countValue - 1;
        setCountersList(countersListCopy);
      }
    },
    [counterList]
  );

  const handleReset = useCallback(() => {
    setCountersList([]);
  }, []);

  return (
    <>
      <CounterManagerLayout
        addOnBtnClick={addOnBtnClick}
        counterList={counterList}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
        handleCounterRemove={handleCounterRemove}
        countersValueSum={countersValueSum}
      />
    </>
  );
};

export default CounterManagerContainer;
