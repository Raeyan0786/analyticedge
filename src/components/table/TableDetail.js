import React, { Fragment,useEffect ,useState} from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const TableDetail = ({data1}) => {
    const[id,setId]=useState(0);
    const navigate=useNavigate()
    const searchHandler=(e)=>{
        //setId(item.id)
        setId(e.target.value)
    
        if(id>0)
        {
            navigate(`users/${id}/posts`)
        }
        else{
          navigate('/')
        }
      }
    
  return (
    <Fragment>
        {data1.map(item => (
        <tr>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <td><button value={item.id} onClick={searchHandler}>Post</button></td>

    </tr>
    ))}
    </Fragment>
    
  )
}

export default TableDetail