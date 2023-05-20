import { USER_PAGE_REQUEST,
    USER_PAGE_SUCCESS,
    USER_PAGE_FAIL } from "../constants/paginationConstants";

export const userPages=(state={page:[]},action)=>{
    switch(action.type)
    {
        case USER_PAGE_REQUEST:
            return{
                loading:true,
            }
        case USER_PAGE_SUCCESS:
            return{
                ...state,
                loading:false,
                page:action.payload
            }
        case USER_PAGE_FAIL:
            return{
                loading:false,
                page:null
            }
        default:
            return state;
    }
}