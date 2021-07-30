import UserReducer from "./UserReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        data: UserReducer,
    }
)

export default rootReducer;