import { CHANGE_CONTENT} from "./tabActionTypes";

const initialState={
    img:'img1'
}

export const contentReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_CONTENT:
            return{
                ...state,
                img:action.payload
            }

        default:
              return state
    }
}