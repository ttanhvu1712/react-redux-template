import { combineReducers } from "@reduxjs/toolkit";
import authenticateReducer, { sliceName as authenticateSliceName} from "./authenticate";

const reducers = combineReducers({
  [authenticateSliceName]: authenticateReducer,
});

export default reducers;
