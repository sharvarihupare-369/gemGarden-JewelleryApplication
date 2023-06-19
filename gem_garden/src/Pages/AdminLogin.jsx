import { Box, Container,Button, Flex,Stack, useColorModeValue, Heading,FormControl,InputGroup,InputRightElement,Text,Link, FormLabel, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import {useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { getAdminlogin } from '../Redux/Admin/action'
import { ArrowForwardIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import blackbgEar from '../Assets/black.jpg'
import 'animate.css';
import { useNavigate } from 'react-router-dom'





export const AdminLogin = () => {
  const toast = useToast()
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [adminlogin,setAdminLogin] = useState({
    email : "",
    password : ""
  })


  const dispatch = useDispatch()
  const {admindata}  = useSelector((store)=>store.adminReducer)
  // console.log(admindata)
  
  useEffect(() => {
   dispatch(getAdminlogin())
  }, [])

  const handleSubmit = (e) => {
       e.preventDefault()

      if(!adminlogin.email || !adminlogin.password){
        return  toast({
          title: 'Login Failed!',
          description: "Please fill all the inputs",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top"
        })
       
      }

       admindata.find((el)=>{
        if(el.email == adminlogin.email){
              if(el.password == adminlogin.password){
                  
                 toast({
                  title: 'Success',
                  description: 'Admin LoggedIn Successful',
                  status: 'success',
                  position: 'top',
                  duration: 4000,
                  isClosable: true,
                })
               return setTimeout(()=>{
                navigate("/admin")
               },4000)
              
               
              }else{  
                return  toast({
                  title: 'Wrong Password!',
                  description: 'Please enter correct password',
                  status: 'error',
                  position: 'top',
                  duration: 4000,
                  isClosable: true,
                })
              }  
        }
        // else{   
        //   return  toast({
        //     title: 'Wrong Email!',
        //     description: 'Please enter correct credentials',
        //     status: 'error',
        //     position: 'top',
        //     duration: 4000,
        //     isClosable: true,
        //   })
        // }
       })
  }

 
  return (
  
  <>
  <Box  borderRadius={"0px"} position={"relative"}  style={{backgroundImage:`url(${blackbgEar})`, 
 //  backgroundRepeat:"no-repeat",
    backgroundSize:"cover",}}>
 
  
    <form onSubmit={handleSubmit}  style={{ 
     // position:"absolute",
   //  top:"0",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    minHeight:'100vh'
    
   
    }} 
    >
 
  
   <Flex
   
   style={{backgroundImage:`url(${blackbgEar})`, 
   //  backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
     
     }}
   
     
     align={'center'}
     justify={'center'}
     bg={useColorModeValue('gray.50', 'gray.800')}>
     <Stack  borderRadius={"none"}  className="animate__animated animate__pulse" w={{base:"90%",sm:"90%",md:"80%",lg:"50%",xl:"40%","2xl":"40%"}} >
       <Stack  align={'center'}>
         <Heading color={"white"} fontSize={'4xl'} textAlign={'center'}>
          Admin Login
         </Heading>
         
       </Stack>
       <Box
      
       
         rounded={'lg'}
         bg={useColorModeValue('white', 'gray.700')}
         boxShadow={'lg'}
         p={8}>
         <Stack spacing={4}>
          
            
               
           
           <FormControl id="email" >
             <FormLabel>Email address</FormLabel>
             <Input 
             
                 borderRight={"none"}
                 borderTop={"none"}
                 focusBorderColor='none'
                 placeholder={'Enter email address'}
                 // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                 _placeholder={{ opacity: 1, color: '#a0a0a0' }}
                 _focus={{
                   bg: 'whiteAlpha.300',
                   borderColor:"#FFB300"
                 }} type="email" value={adminlogin.email} onChange={(e)=>setAdminLogin((prev) => ({...prev,email:e.target.value}))} />
           </FormControl>
           <FormControl id="password" >
             <FormLabel>Password</FormLabel>
             <InputGroup>
               <Input  borderRight={"none"}
                 borderTop={"none"}
                 focusBorderColor='none'
                 placeholder={'Enter password'}
                 // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                 _placeholder={{ opacity: 1, color: '#a0a0a0' }}
                 _focus={{
                   bg: 'whiteAlpha.300',
                   borderColor:"#FFB300"
                 }}   value={adminlogin.password} onChange={(e)=>setAdminLogin((prev) => ({...prev,password:e.target.value}))} type={showPassword ? 'text' : 'password'} />
               <InputRightElement h={'full'}>
                 <Button
                   variant={'ghost'}
                   onClick={() =>
                     setShowPassword((showPassword) => !showPassword)
                   }>
                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                 </Button>
               </InputRightElement>
             </InputGroup>
           </FormControl>
           <Stack spacing={10} pt={2}>
             <Button
             type="submit"
            
             style={{  background:"linear-gradient(to top left, #171616 100%, #363431 51%)"}}
             // bgGradient='linear(to-r, #171616, #363431)'
             loadingText="Submitting"
             size="lg"
             bg={'blue.400'}
               color={'white'}
               _hover={{
                 // bg: 'blue.500',
                 bgGradient:'linear(to-r,  #363431,#171616)',
                 border :"1px solid #FFB300 ",
                 color:"#FFB300"
               }}>
               Admin Login
             </Button>
           </Stack>
           <Stack pt={6}>
             {/* <Text align={'center'}>
               Not registered? <Link href="/signup" color={'rgb(255,189,89)'} fontWeight={"600"} >Signup</Link>
             </Text> */}
             <Text align={'center'}>
              <Link href="/login" color={'rgb(255,189,89)'} fontWeight={"600"} > Login <ArrowForwardIcon  /> </Link>
             </Text>
           </Stack>
         </Stack>
       </Box>
     </Stack>
   </Flex>
       </form>
       
       </Box>
       </>
  )
}
  
































