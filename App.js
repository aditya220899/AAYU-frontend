import CombineRouting from "./Routing/CombineRouting";
import axios from 'axios'
import { Base_URL } from './Config/BaseURL'
import { useEffect } from 'react'
import { useState } from "react";


function App() {


  const [cartCount, setCartCount] = useState(0)


  function getCartCount(){
    let u_id =  localStorage.getItem('auth-id')
    axios.get(Base_URL + '/get-cart-count' , {params : {u_id : u_id} }).then((res)=>{
        console.log(res.data)
        console.log("hi")
      setCartCount(res.data.count)
      localStorage.setItem('count' ,res.data.count ) 
    }).catch((err)=>{
      setCartCount(0)

    })
  }


  useEffect(()=>{
    getCartCount()
  },[])












  return(

    <CombineRouting  countOfCart = {cartCount} />
  )


  // // var [count, setCount] = useState(0);
  
  // //var [color , setColor] = useState('black')
  
  //  var [data , setData] = useState({
  //   name :"",
  //   email :"",
  //   mobile :"",
  //   address :"",
  //   city :""
  //  })

  // // function incre(){
  // //   setCount(count+1)
  // //   //console.log(count)
  // // }

  // function handleInput(e){
  //   setData({...data, [e.target.name]: e.target.value})
  // }

  // function handleSubmit(){
  //   console.log(data)
  // }


  // return (
  //   <>
  //   {/* <h1> This is my new React Project</h1>
    
  //   <h1>
  //     Value of Count is : {count}
  //   </h1>
  //   <button onClick={incre}>Increase Value</button> */}
   
  //   {/* <h1 style={{color:color}}> My color is {color}</h1><br></br> */}

  //   <h1>App Component</h1>
    
  //    <input placeholder='Enter Any Name' name='name' onChange={handleInput} /><br></br>
  //    <input placeholder='Enter Any Email' name='email' onChange={handleInput} /><br></br>
  //    <input placeholder='Enter Any mobile' name='mobile' onChange={handleInput} /><br></br>
  //    <input placeholder='Enter Any Address' name='address' onChange={handleInput} /><br></br>
  //    <input placeholder='Enter Any City' name='city' onChange={handleInput} /><br></br>
  //    <button onClick={handleSubmit}>Submit</button>


  //   {/* {data.map((value, index)=>(
  //     <h1 key={index}>
  //       Element on index {index} is {value}
  //     </h1>
  //   )
  //   )}
  //   <hr></hr>
  //   <Home color = {color} />
  //   <hr></hr> */}
    
    

  //   </>
  // );
}

export default App;
