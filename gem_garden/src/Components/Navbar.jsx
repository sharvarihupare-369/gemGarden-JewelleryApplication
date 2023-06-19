import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Input
  } from '@chakra-ui/react';
  // import './Navbar.module.css'
  import {useState} from 'react';
import logo from '../Assets/GemGardenLogo2.png'
import logo1 from '../Assets/GemGardenLogo3.png'
import { FaSearch } from 'react-icons/fa';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate()

    const [show,setShow] = useState(false)

    return (
      <Box position={"sticky"} top="0" zIndex={"overlay"} >
        <Flex
        cursor={"pointer"}
        backgroundColor={"#262425"}
        //   bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'80px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          // borderStyle={'solid'}
          bgGradient='linear(to-l, #222220, #2A2829 , #25231F)'
          // borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
         
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon bg={"white"} w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex alignItems={"center"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image
            onClick={()=>navigate("/")}
            src={logo1}
            w="70px"
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
            //   color={useColorModeValue('gray.800', 'white')}
            color={"#FFFFFF"}
              />
              {/* Logo
            </Text> */}
            {/* <Flex >
            <Box>
            <Image src={logo} w="100%" />
            </Box>
          </Flex>
             */}
          
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          
          <Flex   w="25%" alignItems={"center"} mr="30px">
            {
              show ?  <Input   borderRight={"none"}
              borderTop={"none"}
               
              focusBorderColor='none'
              placeholder={'Search Something here...'}
              // bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
              _placeholder={{ opacity: 1, color: 'white' }}
              _focus={{
                bg: 'white',
                borderColor:"#FFB300"
              }}  type="text" mr="20px" /> :  <FaSearch  style={{color:"white",marginLeft:"90%" }} onClick={() : void => setShow(true)} />
            }
           {
            show ?   <CloseIcon style={{color:"white"}}  onClick={():void => setShow(false)} /> : '' 
           }
          
             
          </Flex>

  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={8}>

            

                <Button
                textDecoration={"none"}
              color={"#FFFFFF"}
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              _hover={{
                color:"rgb(255,189,89)"
              }}
              href={'#'}>

              Contact Us
            </Button>
            <Text
            onClick={()=>navigate("/signup")}
            _hover={{
              color:"rgb(255,189,89)"
            }}
             textDecoration={"none"}
             color={"#FFFFFF"}
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              href={'#'}>
              Account
            </Text>

            <Button
            _hover={{
              color:"rgb(255,189,89)"
            }}
             textDecoration={"none"}
            color={"#FFFFFF"}
              as={'a'}
              fontSize={'sm'}
              fontWeight={500}
              variant={'link'}
              href={'/cart'}>
              Bag
            </Button>
            
            
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  // color={linkColor}
                  color={"#FFFFFF"}
                  _hover={{
                    textDecoration: 'none',
                    // color: linkHoverColor,
                    color:"rgb(255,189,89)"
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        borderRadius={"0px"}
        // rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box borderRadius={"0px"}>
            <Text
              fontSize={"md"}
              textAlign={"left"}
              transition={'all .3s ease'}
              _groupHover={{ color: 'rgb(255,189,89)' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
          
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'rgb(255,189,89)'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Jewelery',
      href : "/product", 
      children: [
        {
          label: 'Rings',
          // subLabel: 'Trending Design to inspire you',
          // href: '#',
        },
        {
          label: 'Bracelets',
          // subLabel: 'Up-and-coming Designers',
          // href: '#',
        },
        {
         label:"Earrings",
        },
        {
          label : "Necklaces & Pendants"
        },
        {
          label : "Accessories"
        },
        // {
        //   label : "Men's Jewelry"
        // }
      ],
    },
    {
      label: 'Watches',
      // children: [
      //   {
      //     label: 'Job Board',
      //     subLabel: 'Find your dream design job',
      //     href: '#',
      //   },
      //   {
      //     label: 'Freelance Projects',
      //     subLabel: 'An exclusive list for contract work',
      //     href: '#',
      //   },
      // ],
    },
    {
      label: 'Gifts',
      href: '/product',
    }
    
  ];