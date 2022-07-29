import { Console } from "console";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant";

const SellerDraftsReducer=(data=[], action: any)=>{
    switch(action.type){
            case SET_PRODUCT_LIST:
            console.log("reducer",action)
            return[action.data]
            default:
                return data
    }

}
export default SellerDraftsReducer