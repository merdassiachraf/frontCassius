import { SHOWLOADING, HIDELOADING } from "./SpinnerType";

export const showLoading=()=>{
    return {
        type:SHOWLOADING
    }
}
export const hideLoading=()=>{
    return {
        type:HIDELOADING
    }
}