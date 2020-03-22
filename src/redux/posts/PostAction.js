import { ADDPOST, EDITPOST, DELETEPOST, FILTREPOST } from "./PostType";

export const addPost=()=>{
    return{
        type:ADDPOST
    }
}
export const editPost =()=>{
    return{
        type:EDITPOST
    }
}
export const deletePost =()=>{
    return{
        type:DELETEPOST
    }
}
export const filtrePost=(payload)=>{
    return{
        type:FILTREPOST,
        payload
    }
}