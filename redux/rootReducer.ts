
import { combineReducers } from "redux"
import SellerDraftsReducer from "./reducer/SellerDraftsReducer"
export default combineReducers({
  mydata :SellerDraftsReducer,
})