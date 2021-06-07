import { combineReducers } from "redux";

import countersManager from "../pages/ReduxCounters/reducers";
import toDoListManager from "../pages/To-DoList/reducers";

const rootReducer = combineReducers({ countersManager, toDoListManager });

export default rootReducer;
