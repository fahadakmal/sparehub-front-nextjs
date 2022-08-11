import {takeEvery, put} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant";

function* getProduct(mydata: any){
    // let data
    console.log(mydata,"saga")
    let data: any=yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    data=yield data.json()
    console.log("Action",data)
    yield put({type: SET_PRODUCT_LIST,data: data})
}

function* Saga(){
yield takeEvery(PRODUCT_LIST,getProduct)
}
export default Saga