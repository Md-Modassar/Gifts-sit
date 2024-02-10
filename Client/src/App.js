import './App.css';
import Home from './page/Home/Home';
import {Routes,Route} from "react-router-dom"
import Cakes from "./page/Cake/Cakes"
import Product from './page/Product/Product';
import CartPage from './page/Cartpage/CartPage';
import SignUp from './page/SignUp/SignUp';
import Login from './page/Login/Login';
import Flower from './page/flower/Flower';
import Gifts from './page/gifts/Gifts';
import Plants from './page/pants/Plants';
import ForgetPassword from './page/forgetpassword/ForgetPassword';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cakes' element={<Cakes/>}/>
      <Route path='/product/:productparams' element={<Product/>}>
      </Route>
      <Route path='/cart' element={<CartPage/>}/> 
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/flower' element={<Flower/>}/>
      <Route path='/gifts' element={<Gifts/>}/>
      <Route path='/plant' element={<Plants/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
    </Routes>

  );
}

export default App;
