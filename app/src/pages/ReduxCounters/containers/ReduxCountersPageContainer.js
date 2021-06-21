import { useDispatch, useSelector } from "react-redux";

import { useCallback } from "react";
import { CREATE_COUNTER, REMOVE_COUNTER } from "../actions";
import CounterManagerLayout from "../../CountersManagerPage/components/CounterManagerLayout";

const ReduxCountersPageContainer = () => {
  const dispatch = useDispatch();

  const { counters } = useSelector((state) => state.countersManager);

  const handleCounterCreate = useCallback(() => {
    dispatch(CREATE_COUNTER());
  }, [dispatch]);

  const handleCounterRemove = useCallback(
    (index) => {
      dispatch(REMOVE_COUNTER(index));
    },
    [dispatch]
  );

  return (
    <CounterManagerLayout
      addOnBtnClick={handleCounterCreate}
      handleCounterRemove={handleCounterRemove}
      counterList={counters}
    />
  );
};

export default ReduxCountersPageContainer;
