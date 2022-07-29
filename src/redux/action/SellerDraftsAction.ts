import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constant"

const SellerDraftsAction = (data: any)=>{
    console.log(data,"props")
return{
    type : PRODUCT_LIST,
    data :data
}
}
export default SellerDraftsAction