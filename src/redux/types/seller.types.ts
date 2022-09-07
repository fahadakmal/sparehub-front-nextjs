export interface SellerState{
    seller:SellerOnBoardingInterface,
    error:string,
    loading:boolean
}


interface SellerOnBoardingInterface{
    companyName: string,
    companyNameAr:string,
    displayName: string,
    displayNameAr: string,
    registrationNo: string,
    email: string,
    website: string,
    country: number,
    state:number,
    city:number,
    dialCode: string,
    address1:string
    location:SellerLocationsInterface,
    bank:BankDetailsInterface,
    stores:any
    documents:any
}


interface SellerLocationsInterface{
    incharge:LocationInchargeInterface
    name:string,
    nameArabic:string,
    country:string,
    state:string,
    city:string,
    address:string
}



interface LocationInchargeInterface{
    firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string
}


interface BankDetailsInterface{
    bankName:string,
    accountTitle:string,
    branchCode:string,
    accountNo:string,
    iban:string
}