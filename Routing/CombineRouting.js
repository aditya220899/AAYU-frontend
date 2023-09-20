
import AllRouting from "./AllRouting";
import AuthRouting from "./AuthRouting";




function CombineRouting ({countOfCart}){

    
  
    


    return (
        
        <>
             { !localStorage.getItem('auth-id')  ?  <AuthRouting/> : <AllRouting  countOfCart = {countOfCart} />  }
        </>

    )
}

export default CombineRouting