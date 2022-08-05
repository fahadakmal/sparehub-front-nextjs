import { PRODUCT_LIST } from "../constant"

const mycountry = (data: any)=>{
    console.log(data,"props")
return{
    type : PRODUCT_LIST,
    data :data
}
}
export default mycountry