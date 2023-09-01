import { useToast } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import dummyimage from "../Assets/necklace.jpg"
import { Link, useNavigate } from 'react-router-dom'
export  const Payment = () => {

  const handleClick = () => {
    
  }

  return (


  
      <>
       <button onClick={handleClick}>Pay</button>
      </>

  )
}

const Div=styled.div`
  /* border: 1px solid red; */

  @media (max-width: 600px) {
.dummyimagediv{
  display: none;
}
.cartpage{
  border: 5px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;

}
.cartpage>div{
  border: 5px solid green;
  width: 100%;
}
.card{
  height: 50px;
}
  }
  
  background-color: #171819;
  height: 100vh;
  .calculationitem{
    display: flex;
    justify-content: space-between;
    background-color: #cbcbcb;
    margin-top: 2px;
    padding: 5px 20px;
  }
  #totalh1{
    padding: 0;
    
  }
  .totalprice{
    font-size: 1.4rem;
    font-weight: 800;
  }
  #checkout{
    width: 100%;
    border-radius: 0px;
    background-color: #171819;
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    height: 50px;
  }

  #checkout:hover{
    width: 100%;
    border-radius: 0px;
    background-color: #1d8f00b9;
    color: white;
    border: 2px solid white;
    color: #ffffff;
    height: 50px;
  }

  .totalcalculation{
    border: 3px solid grey;
  
    padding: 20px;
    width: 50%;
margin: auto;
  }
  h1{
    background-color:white;
    color: #171819;
    font-weight: 600;
    padding: none;
  }
  #price{

    color: rgb(255, 214, 93);
    font-weight: 600;
font-size: 1.5rem;
  }
h2{
  font-weight: 600;
font-size: 1.2rem;
}
.cartpage{
  /* border: 5px solid orange; */
  display: grid;
  grid-template-columns:30% 70%;
}
.cartpage>div{
  /* border: 5px solid blue; */
}
.dummyimagediv>img{
  height: 100vh;
  width: 100%;

  
}
#inc{
  background-color: #171819;
  /* border: 1px solid #171819; */
  
}
#inc:hover{
  background-color: white;
  color: #2e2e2e;
  border: 2px solid #171819;
}
#dec{
  background-color: #171819;
}

#inc{
  background-color: #171819;
}
#dec:hover{
  background-color: white;
  color: #2e2e2e;
  border: 2px solid #171819;
}
button{

  color: white;
  padding:5px 20px;
  border-radius: 5px;
  border: 1px solid #171819;
  
}
#remove{
background-color: #ff4c4c;
border: none;
}
#remove:hover{
  background-color: white;
  color: #ff4c4c;
  border: 2px solid #ff4c4c;
}
.card{
  height: 80px;
display: grid;
grid-template-columns: repeat(5,1fr);
justify-content: space-around;
color: #ffffff;
background-color: #797979bc;
padding: 10px 10px ;
margin-top: 10px;
align-items: center;
border-radius: 20px;

}
.imgdiv>img{
width: 60px;
border-radius: 50%;
}
.productsContainer{
  background-color: white;
  padding: 0px 10px;
}
`
