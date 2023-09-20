import { useNavigate} from "react-router-dom";
import '../Styles/Badge.css'
import axios from 'axios'
import { Base_URL } from '../Config/BaseURL'
import { useEffect, useState } from 'react'

function Navbar({countOfCart}) {

  console.log("Hello-Cart", countOfCart)

    const navigate = useNavigate()

    

    function handleLogout (){
      localStorage.removeItem('auth-id')
      window.location.reload()
    }

    
    return (
        


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AAYU</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class={`nav-item ${window.location.href.includes('/home') ? 'active':"" }  `}>
        <a class="nav-link" onClick={()=>{navigate('/home')}} style={{fontsize:'24px' , cursor : 'pointer'}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li class={`nav-item ${window.location.href.includes('/about') ? 'active' :"" } `}>
        <a class="nav-link" onClick={()=>{navigate('/about')}} style={{fontsize:'24px' , cursor : 'pointer'}}>About</a>
      </li>
      <li class={`nav-item ${window.location.href.includes('/contact') ? 'active' : "" } `}>
        <a class="nav-link" onClick={()=>{navigate('/contact')}} style={{fontsize:'24px' , cursor : 'pointer'}}>Contacts</a>
      </li>
      <li class={`nav-item ${window.location.href.includes('/products') ? 'active' : "" } `}>
        <a class="nav-link"onClick={()=>{navigate('/products' )}} style={{fontsize:'24px' , cursor : 'pointer'}}>Products</a>
      </li>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleLogout} >Logout</button>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" >Action</a>
          <a class="dropdown-item" >Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" >Something else here</a>
        </div>
      </li>
      <li class=>
        <a class="nav-link disabled" >Disabled</a>
      </li> */}
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
    <div style={{marginRight : '20px'}}>
    <i onClick={()=> navigate('/mycart')} class="fa" style={{fontsize:'24px' , cursor : 'pointer'}}>&#xf07a;</i>
    <span class='badge badge-warning' id='lblCartCount'>{countOfCart}  </span>
    </div>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    )
}

export default Navbar;