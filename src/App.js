import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Navbar from './component/layout/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import PagesNotFound from './component/pages/PagesNotFound'
import Adduser from './component/users/Adduser'
import EditUser from './component/users/EditUser'
import User from './component/users/User'
import Login from './component/login/Login'



const App = () => {
  return (

    <Router>
     <div >
  
  
    

   <Routes>
 
     <Route exact path='/' Component={Login}></Route>
     <Route exact path='/home' Component={Home}></Route>
     <Route exact path='/about' Component={About}></Route>
     <Route exact path='/contact' Component={Contact}></Route>
     <Route exact path='/user/add' Component={Adduser}></Route>
     <Route exact path='/user/edit/:id' Component={EditUser}></Route>
     <Route exact path='/user/:id' Component={User}></Route>
     <Route exact path='*' Component={PagesNotFound}></Route>

   </Routes>
   
      
  
    </div>
    </Router>
   
  )
}

export default App
