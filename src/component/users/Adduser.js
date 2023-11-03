import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layout/Navbar'


const Adduser = () => {

let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })


const {name,username,email,phone,website}=user;
    const onInputChange= e =>{
              setUser({...user,[e.target.name]:e.target.value})
    }


    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post(" http://localhost:3001/users",user)
        navigate("/home")

    }
  
  return (
    <div className='container'>
         <Navbar></Navbar>
      <div className='w-75 mx-auto shadow p-5'>
         <h2 className='text-center mb-4'>Add a user</h2>

         <form onSubmit={e=>onSubmit(e)}>

            <div className='form-group'>
                <input type='text' 
                className='form-control form-control-lg'
                placeholder='enter your name'
                name="name"
                value={name} 
                onChange={e=>onInputChange(e)}></input>
            </div>


            <div className='form-group'>
                <input type='text' 
                className='form-control form-control-lg'
                placeholder='enter your user name'
                name="username"
                value={username} 
                onChange={e=>onInputChange(e)}></input>
            </div>


            <div className='form-group'>
                <input type='email' 
                className='form-control form-control-lg'
                placeholder='enter your mail id'
                name="email"
                value={email} 
                onChange={e=>onInputChange(e)}></input>
            </div>


            <div className='form-group'>
                <input type='text' 
                className='form-control form-control-lg'
                placeholder='enter your phone number'
                name="phone"
                value={phone} 
                onChange={e=>onInputChange(e)}></input>
            </div>

             

            <div className='form-group'>
                <input type='text' 
                className='form-control form-control-lg'
                placeholder='enter your website'
                name="website"
                value={website} 
                onChange={e=>onInputChange(e)}></input>
            </div>

            <button className='btn btn-primary btn-block' type='submit'>Add user</button>
         </form>

      </div>
    </div>
  )
}

export default Adduser
