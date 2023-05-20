import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'

const Search = () => {
    const {user}=useSelector(state=> state.user)
    const [filter, setFilter] = useState(user);

    

  return (
    <div></div>
  )
}

export default Search