import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Screens/Home';
import Contacts from '../Screens/Contacts';
import About from '../Screens/About';
import Products from '../Screens/Products';
import Navbar from '../Layout/Navbar';
import ViewProduct from '../Screens/ViewProduct';
import Cart from '../Screens/Cart';
import Checkout from '../Screens/Checkout';





const AllRouting = ({countOfCart}) => {


    return (

        <>
        <Navbar countOfCart = {countOfCart}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contacts/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/mycart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/products/:id' element={<ViewProduct/>} />
            <Route path='*' element={<Home/>} />
        </Routes>
{/* 
            <h1><Link to='/home'>Go to Home</Link></h1>
            <h1><Link to='/about'>Go to About</Link></h1>
            <h1><Link to='/contact'>Go to Contacts</Link></h1>
            <h1><Link to='/products'>Go to Products</Link></h1> */}
        </>
    )


}
export default AllRouting;