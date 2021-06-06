import { combineReducers } from "redux";

import countersManager from "../pages/ReduxCounters/reducers";

const rootReducer = combineReducers({ countersManager });

export default rootReducer;
