import { USER_PAGE_REQUEST,
    USER_PAGE_SUCCESS,
    USER_PAGE_FAIL } from "../constants/paginationConstants";
import axios from 'axios'
export const userPage=(uPage,limit)=>async(dispatch)=>{
    try {
        dispatch({type:USER_PAGE_REQUEST})

    const {data} =await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${uPage}&_limit=${limit}`);
    console.log("user data"+data);

    dispatch({type:USER_PAGE_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:USER_PAGE_FAIL,payload: error.response.data.message})
    }

}