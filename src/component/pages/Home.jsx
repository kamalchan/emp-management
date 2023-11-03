import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import ReactToPrint, {useReactToPrint} from "react-to-print"
import ReactHTMLTableToExcel from "react-html-table-to-excel"
import Navbar from '../layout/Navbar';



const Home = () => {
    const[users,setUsers]=useState([]);

    useEffect(()=>{
          loadUser()
    },[]);


    const loadUser =async()=>{
      const result =await axios.get("http://localhost:3001/users");

      setUsers(result.data)
    }
    

    const deleteUser = async id =>{
      await axios.delete(`http://localhost:3001/users/${id}`);
      loadUser()
    }

    const navigate=useNavigate();


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    })
  return (
    <div className='container' ref={componentRef}>

<Navbar></Navbar>
      <div className='py-4'>
      <h1>Home</h1>


      <table class="table" id="table-to-xls">
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
         {users.map((user,index)=>(
          <tr>
            <th scope='row'>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <Link className='btn btn-dark m-2' to={`/user/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>
              <Link className='btn btn-outline-primary m-2' to={`/user/edit/${user.id}`}><i class="fa-solid fa-pen"></i></Link>
              <Link className='btn btn-danger m-2' onClick={()=>deleteUser(user.id)}>Delete</Link>
            </td>
          </tr>
         ))}
  </tbody>
</table>
      </div>
     <button onClick={handlePrint}  className='btn btn-primary mb-3' >Print/Download pdf</button>
     
     <ReactHTMLTableToExcel 
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Download as XLS"/>

                    <button onClick={()=>navigate("/") }   className='btn btn-danger mb-3 '>Log out</button>
     <p>A react project by SivaShakthiRam</p>
    </div>
  )
}

export default Home
