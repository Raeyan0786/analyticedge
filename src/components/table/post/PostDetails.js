import React, { Fragment,useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const PostDetails = ({data1}) => {
    const [ids,setIds]=useState(0)
    const navigate=useNavigate()
    const pageHandler=(e)=>{
        //setId(item.id)
        setIds(e.target.value)
        console.log(e.target.value,ids);
        
            redirect(`posts/${e.target.value}/comments`)
        
      }
  return (
    <Fragment>
        {data1.map(item => (
        <tr>
        <td>{item.id}</td>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td><button value={item.id} onClick={pageHandler}>Comment</button></td>

    </tr>
    ))}
    </Fragment>
    
  )
}

export default PostDetails