import { useToast } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import dummyimage from "../Assets/necklace.jpg"
import { Link } from 'react-router-dom'
export const Cart = () => {
  const [cart, setCart] = useState([])

  const toast = useToast()
  useEffect(() => {
    let cartdata = JSON.parse(localStorage.getItem("gem_garden_cart")) || []
    setCart([...cartdata])
  }, [])
  console.log(cart)

  const handelInc = (data) => {
    const updatedCart = cart.map((item) =>
      item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
    localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));
  }


  const handelDec = (data) => {
if(data.quantity>1){
  const updatedCart = cart.map((item) =>
  item.id === data.id ? { ...item, quantity: item.quantity - 1 } : item
);

setCart(updatedCart);
localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));
}
   }

   const handelRemove = (data) => {
    const updatedCart = cart.filter((item) => item.id !== data.id);

    setCart(updatedCart);
    localStorage.setItem("gem_garden_cart", JSON.stringify(updatedCart));
  };
  return (
    <Div>



<div className='cartpage'>
<div className='dummyimagediv'>
<img src="https://www.sundrenchd.com/cdn/shop/files/6B400614-B101-4890-A60C-2F4ADB2EF088.jpg?v=1669686695&width=1500" alt="" />
</div>
<div className='productsContainer'>
<div>
  <h1>Your bag🛍️ is waiting  for you</h1>
</div>
  {cart?.map((el)=>{
    return (

<div className='card'>
<div className='imgdiv'>
 <img src={ el.src1} alt="" />
</div>
<div style={{display:"flex"}}>
  <Link to={`/product/${el.id}`}>
  <p>{el.name.substr(0, 10)}</p>
  </Link>



</div>
<div style={{display:"flex",alignItems:"center"}}>
  <button id='inc' onClick={()=>handelInc(el)}>+</button>
  <p style={{margin:"10px"}}>{el.quantity}</p>
  <button id='dec' onClick={()=>handelDec(el)}>-</button>
</div>
<div>
  <button id='remove' onClick={()=>handelRemove(el)}>
    Remove
  </button>

</div>
  </div>


    )
  })}
</div>
</div>
    </Div>
  )
}

const Div=styled.div`
  /* border: 1px solid red; */
  background-color: #171819;
  height: 100vh;
  
  h1{
    background-color:white;
    color: #171819;
    font-weight: 600;
    padding: none;
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
display: flex;
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
