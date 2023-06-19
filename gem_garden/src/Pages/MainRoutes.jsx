import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { HomePage } from './HomePage'
import { Admin } from './Admin'
import { Login } from './Login'
import { SignUp } from './SignUp'
import { Product } from './Product'
import { Contact } from './Contact'
import { About } from './About'
import { SingleProductPage } from './SingleProductPage'
import { Cart } from './Cart'
import  Payment from './Payment'
import { WishList } from './WishList.jsx'
import { AdminLogin } from './AdminLogin'
import { PrivateRoute } from '../Components/PrivateRoute'



export const MainRoutes = () => {
  return (
   <Box>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/adminlogin' element={<AdminLogin/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/product' element={
       
          <Product/>
  
    } />
      <Route path='/product/:id' element={
        // <PrivateRoute>
          <SingleProductPage/>
      //  {/* </PrivateRoute> */}

      } />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<WishList/>} />
      <Route path='/payment' element={<Payment/>} />
    </Routes>
   </Box>
  )
}
