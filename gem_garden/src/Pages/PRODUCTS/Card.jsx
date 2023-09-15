import { Text ,Button, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { ToastStatusExample } from './alert';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartProduct } from '../../Redux/Cart/action';

export const Card = ({ele}) => {
  const token = localStorage.getItem("user-token") || "";
  const {src1,src2,currentprice,orignalprice,name,material,video,src3,id} = ele
  const toast = useToast()
  // console.log(src1)
  const [cartData,setCartData] = useState({})
  const {errmsg,addcartmsg} = useSelector(store=>store.cartReducer)

   const dispatch = useDispatch()

  const handleAddProduct = () => {
    // console.log(ele)
    dispatch(addToCartProduct(token,ele))
  }
  // console.log(cartData)

  useEffect(()=>{
    if(addcartmsg){
     return toast({
        title: "Success",
        description: "Product Added to cart Succesfully!",
        status: "success",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }

    if(errmsg){
   toast({
      title: "Already Exists!",
      description: errmsg,
      status: "warning",
      position: "top",
      duration: 4000,
      isClosable: true,
    });
    return
    }
    
  },[addcartmsg,errmsg])

  return (
    <DIV src={src2} className='card'>
        <Link  to={`/product/${id}`}> <img className='cardImage' src={src1} alt='img'/>
        <Text style={{fontSize:"0.9rem",marginBottom:"9px"}} className='name'>{name}</Text>
        <Text style={{fontSize:"0.8rem"}} className='price'>Rs.{currentprice}.00 <span style={{color:"red",verticalAlign:"middle",textDecoration: "line-through"}}  >(Rs.{orignalprice})</span></Text>
        <Button style={{backgroundColor:"#C7A550",color:"white"}}>Add To Cart</Button>
        </Link>
        {/* <ToastStatusExample/> */}
        </DIV>
  )
}

const DIV=styled.div`
/* background-color: #524F4F; */  
  .cardImage:hover{
content: url(${(props) => props.src});
  }
`
