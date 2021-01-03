import {CHANGE_TAB_NO,CHANGE_CONTENT} from "./tabActionTypes";
export const changeTabNo=(tabNo=1)=>{
    return {
        type:CHANGE_TAB_NO,
        payload:tabNo
    }
}

export const changeContent=(content='img1')=>{
    return {
        type:CHANGE_CONTENT,
        payload:content
    }
}