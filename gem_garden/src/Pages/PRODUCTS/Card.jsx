import { Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { ToastStatusExample } from './alert';
import styled from '@emotion/styled';

export const Card = ({src1,src2,currentprice,orignalprice,name,material,video,src3,id}) => {
  return (
    <DIV src={src2} className='card'>
        <Link  to={`/product/${id}`}> <img className='cardImage' src={src1} alt='img'/>
        <Text style={{fontSize:"0.9rem",marginBottom:"9px"}} className='name'>{name}</Text>
        <Text style={{fontSize:"0.8rem"}} className='price'>Rs.{currentprice}.00 <span style={{color:"red",verticalAlign:"middle",textDecoration: "line-through"}}  >(Rs.{orignalprice})</span></Text>
        </Link>
        <ToastStatusExample/>
        {/* <Button style={{backgroundColor:"#C7A550",color:"white"}}>Add To Cart</Button> */}
        </DIV>
  )
}

const DIV=styled.div`
/* background-color: #524F4F; */
  .cardImage:hover{
content: url(${(props) => props.src});
  }
`
