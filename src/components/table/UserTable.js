import React,{useState,useEffect, Fragment} from 'react'
import Pagination from 'react-js-pagination'
import {useDispatch,useSelector} from 'react-redux'
import { userPage } from '../../actions/paginationActions'
import { loadUser } from '../../actions/userActions'
import { userDetails } from '../../reducers/userReducers'
import Loader from '../Loader'
import Search from '../layout/Search'
import TableDetail from './TableDetail'
//import SweetPagination from "sweetpagination";

const UserTable = ({data}) => {

    //const [currentPage, setCurrentPage] = useState(1)
    //const [start, setStart] = useState(0)
    //const [end, setEnd] = useState(10)
   const [uPage, setPage] = useState(1);
  
   const limit= 5;
    const {loading,page}= useSelector(state=> state.userpage)
    const dispatch=useDispatch();
    //const resPerPage=10;
    useEffect(()=>{
        dispatch(userPage(uPage,limit))
    },[dispatch,uPage])
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
              
                <TableDetail data1={page}/>
            }
                            
                        </tbody>
                        
                    </table>
                </div>
                <div className="d-flex justify-content-center mt-5">
                        <Pagination
                            activePage={uPage}
                            itemsCountPerPage={limit}
                            totalItemsCount={10}
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

export default UserTable