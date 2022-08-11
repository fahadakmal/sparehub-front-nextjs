import { Console } from "console";
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant";

const countrySlice=(data=[], action: any)=>{
    switch(action.type){
        case PRODUCT_LIST:
            console.log("reducer",action)
            return[action.data]
            case SET_PRODUCT_LIST:
            console.log("reducer",action)
            return[action.data]
            default:
                return data
    }

}
export default countrySlice


// export default const mycountry = (data: any)=>{
//     console.log(data,"props")
// return{
//     type : PRODUCT_LIST,
//     data :data
// }
// }
// export default mycountry