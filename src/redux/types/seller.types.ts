export interface SellerState{
    seller:SellerOnBoardingInterface,
    error:string,
    loading:boolean
}


interface SellerOnBoardingInterface{
    businessName: string,
    businessNameArabic:string,
    shopName: string,
    shopNameArabic: string,
    regNumber: string,
    email: string,
    url: string,
    country: string,
    dialCode: string,
    bussinessAddress:string
}