import { CHANGE_TAB_NO} from "./tabActionTypes";

const initialState={
    tabNo:1
}

export const tabReducer=(state=initialState,action)=>{
    switch(action.type){
        case CHANGE_TAB_NO:
            return{
                ...state,
                tabNo:action.payload
            }

        default:
              return state
    }
}