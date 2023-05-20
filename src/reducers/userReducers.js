import { REQUEST,
    SUCCESS,
    FAIL ,
POST_REQUEST,POST_SUCCESS,POST_FAIL,
COMMENT_REQUEST,COMMENT_FAIL,COMMENT_SUCCESS} from "../constants/userConstants";

export const userDetails=(state={user:[],post:[]},action)=>{
    switch(action.type)
    {
        case REQUEST:
            case POST_REQUEST:
            case COMMENT_REQUEST:
            return{
                loading:true,
            }
        case SUCCESS:
            return{
                ...state,
                loading:false,
                user:action.payload
            }

            case POST_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    post:action.payload
                }
            case COMMENT_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    comment:action.payload
                }
        case FAIL:
            case POST_FAIL:
            return{
                loading:false,
                user:null
            }
        default:
            return state;
    }
}