import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  useEditable,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsCheckLg} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


export const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

   const { isOpen, onOpen, onClose } = useDisclosure()
   const navigate = useNavigate()

  const cartData = JSON.parse(localStorage.getItem("gem_garden_cart")) || []
  // console.log(cartData)
  const toast = useToast()
  const [totalAmount,setTotalAmount] = useState(0)
 
  const [isCVVValid, setIsCVVValid] = useState(false);
  const [disablebtn,setDisablebtn] = useState(true)
  const [success,setSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv){
      return toast({
        title: "All fields are required!",
        // description: "Enter correct cvv",
        status: "warning",
        position: "top",
        duration: 4000,
        isClosable: true,
      })
    }


    if(formData.cardNumber.length < 16){
      return toast({
        title: "Failed",
        description: "Card Number should be of minimum of 16 characters",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      })
    }

   
    if(formData.cvv.length != 3 ){
       toast({
        title: "Failed",
        description: "Enter correct cvv",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      })
    }else{
       setSuccess(true)
    }
  
  };

  useEffect(()=>{
    const totalPrice = cartData.reduce((total, item) => {
      return total + item.currentprice;
    }, 0);
    // console.log(totalPrice)
    setTotalAmount(totalPrice)
  },[])

  useEffect(()=>{
   if(success){
    setTimeout(()=>{
      navigate("/")
    },4000)
   }
  },[success])

  
    // console.log(totalAmount)
  return (
    <Box
    
      style={{display:"flex",justifyContent:"space-between"}}
    >
    <Box w="30%">
      <Image src="https://www.sundrenchd.com/cdn/shop/files/6B400614-B101-4890-A60C-2F4ADB2EF088.jpg?v=1669686695&width=1500" />
    </Box>
      <Center w="50%"  >
        <Box p={12} px={20} boxShadow="lg" rounded="md" bg="white">

          <Heading mb={4}>Payment Details</Heading>
          <Heading as={"h4"} size={"md"} mb={4}>Total Amount:-{totalAmount}</Heading>
          
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  outline="none"
             
                  // onBlur={handleCardNumberBlur}
                  // isInvalid={!isCardValid}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Cardholder Name</FormLabel>
                <Input
                  type="text"
                  name="cardName"
                  placeholder="John Doe"
                  value={formData.cardName}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Expiry Date</FormLabel>
                <Input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input
                  type="password"
                  name="cvv"
                  placeholder="XXX"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  // onBlur={handleCVVBlur}
                  // isInvalid={!isCardValid}
                />
              </FormControl>
            </Stack>
           {
            success ? <>
             <Button
            onClick={onOpen}
              type="submit"
              mt={6}
              colorScheme="teal"
             w="100%"
            >
              Pay Now
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
         
          <ModalCloseButton />
          <ModalBody style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          
            <BsCheckLg style={{fontSize:"100px",color:"green"}}/>
       
          </ModalBody>
          <Text textAlign={"center"} fontSize={"30px"}>Payment Succesfull!</Text>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
      </> : <Button
           
              type="submit"
              mt={6}
              colorScheme="teal"
             w="100%"
            >
              Pay Now
            </Button>
           }

          </form>
        
        </Box>
      </Center>
    </Box>
  );
}

// export default Payment;
