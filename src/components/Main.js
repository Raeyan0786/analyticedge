import React,{useState,useEffect} from 'react'
import { Fragment } from 'react';
import Loader from './Loader'
import UserTable from './table/UserTable'
import {useDispatch,useSelector} from 'react-redux'
import { loadUser } from '../actions/userActions'

const Main = () => {
    //const [loading,setLoading]=useState('false');
    const {loading,user}=useSelector(state=> state.user)
    //const [data, setData] = useState([]);
const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadUser())
    },[dispatch])
    


    console.log(user,loading)
    
  return (
    <Fragment>
        {loading ? <Loader/> : <UserTable data={user}/>}
    </Fragment>
    
  )
}

export default Main