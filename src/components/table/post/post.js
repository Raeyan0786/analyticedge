import React,{useState,useEffect, Fragment} from 'react'
import Pagination from 'react-js-pagination'
import {useDispatch,useSelector} from 'react-redux'
//import { userPage } from '../../actions/paginationActions'
import { loadPost } from '../../../actions/userActions'
//import { userDetails } from '../../reducers/userReducers'
import Loader from '../../Loader'
import PostDetails from './PostDetails'
import { useParams } from 'react-router-dom'
//import SweetPagination from "sweetpagination";

const PostTable = () => {

    //const [currentPage, setCurrentPage] = useState(1)
    //const [start, setStart] = useState(0)
    //const [end, setEnd] = useState(10)
    const params=useParams();
   const [uPage, setPage] = useState(1);
  
   const limit= 5;
    const {loading,post}= useSelector(state=> state.user)
    const dispatch=useDispatch();
    //const resPerPage=10;
    console.log(params.id)
    useEffect(()=>{
        dispatch(loadPost(params.id,uPage,limit))
    },[dispatch,uPage,params.id])
    function setCurrentPageNo(pageNumber)
    {   
        setPage(pageNumber)  
    }

    
    
  return (
    <Fragment>
        {loading ? <Loader/> : (
            <div className='box'>
            <div className='container'>
                <div><h2>GPS Summary</h2></div>
                
                    <div className='search'>
                            <span><i class="fa-solid fa-magnifying-glass"></i></span>
                            <input className='inp'  placeholder='Search' type='text' />  
                    </div>
                
                <div className='tbl'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Website</th>
                                <th>btn</th>
    
                            </tr>
                            </thead>
                        <tbody>
                        {
              
                <PostDetails data1={post}/>
            }
                            
                        </tbody>
                        
                    </table>
                </div>
                <div className="d-flex justify-content-center mt-5">
                        <Pagination
                            activePage={uPage}
                            itemsCountPerPage={limit}
                            totalItemsCount={100}
                            onChange={setCurrentPageNo}
                            nextPageText={'Next'}
                            prevPageText={'Prev'}
                            firstPageText={'First'}
                            lastPageText={'Last'}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                
                
                
    
    {/* {currentPageData.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
          
                <SweetPagination
            currentPageData={setCurrentPageData}
            dataPerPage={10}
            getData={items}
            navigation={true}
          /> */}
            </div>
        </div>
        )}
    </Fragment>
  )
}

export default PostTable