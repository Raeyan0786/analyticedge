import { REQUEST,
    SUCCESS,
    FAIL ,
POST_REQUEST,POST_SUCCESS,POST_FAIL,
COMMENT_REQUEST,COMMENT_FAIL,COMMENT_SUCCESS} from "../constants/userConstants";
import axios from 'axios'
export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type:REQUEST})

    const {data} =await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log("user data"+data);

    dispatch({type:SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FAIL,payload: error.response.data.message})
    }

}

export const loadPost=(id,upage,limit)=>async(dispatch)=>{
    try {
        dispatch({type:POST_REQUEST})

    const {data} =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts?_page=${upage}&_limit=${limit}`);
    console.log("user data"+data);

    dispatch({type:POST_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:POST_FAIL,payload: error.response.data.message})
    }

}

export const loadComment=(id,uPage,limit)=>async(dispatch)=>{
    try {
        dispatch({type:COMMENT_REQUEST})

    const {data} =await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts?_page=${uPage}&_limit=${limit}`);
    console.log("user data"+data);

    dispatch({type:COMMENT_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:COMMENT_FAIL,payload: error.response.data.message})
    }

}