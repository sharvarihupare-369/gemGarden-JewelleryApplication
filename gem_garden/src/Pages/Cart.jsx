import { useToast } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import dummyimage from "../Assets/necklace.jpg"
import { Link, useNavigate } from 'react-router-dom'
export const Cart = () => {
  const [cart, setCart] = useState([])
  const [totalprice,setTotalprice]=useState(0)
  const[checkoutText,setCheckoutText]=useState(false)
const navigate=useNavigate()
  const toast = useToast()
  useEffect(() => {
    let cartdata = JSON.parse(localStorage.getItem("gem_garden_cart")) || []
    cartdata.map((el)=>{
      
    })
    setCart([...cartdata])
  }, [])

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.currentprice;
    });
    setTotalprice(totalPrice);
  }, [cart]);




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

const handelCheckout=()=>{
  setTimeout(()=>{
  setCheckoutText(true)
  },1000)

setTimeout(()=>{
navigate("/payment")
},4000)
}

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
  <h2 id='price'>Rs.{el.currentprice*el.quantity}</h2>
</div>
<div>
  <button id='remove' onClick={()=>handelRemove(el)}>
    Remove
  </button>

</div>
  </div>


    )
  })}
<div style={{marginTop:"20px"}}>
<div className='totalcalculation'>
    <h1 id='totalh1'>Total</h1>
<div className='calculation'>
<div className='calculationitem'>
<h2 >Price {`(${cart.length})`}</h2>
<h2>
  daw
</h2>

</div>
<div className='calculationitem'>
<h2 >Discount</h2>


</div>
<div className='calculationitem'>
<h2 >Delivery charges </h2>
<h2>
  Rs.89
</h2>

</div>
<div className='calculationitem'>
<h2 className="totalprice" >Total Price </h2>
<h2>
{totalprice}
</h2>

</div>
<button id='checkout' onClick={handelCheckout}>
{checkoutText?"Moving to payment...":"Move to checkout"}
</button>
</div>

  </div>
</div>




</div>
</div>
    </Div>
  )
}

const Div=styled.div`
  /* border: 1px solid red; */

  @media (max-width: 600px) {
.dummyimagediv{
  display: none;
}
.cartpage{
  border: 5px solid orange;
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
