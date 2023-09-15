import {
  Alert,
  AlertDescription,
  // AlertDialog,
  // AlertDialogBody,
  // AlertDialogContent,
  // AlertDialogFooter,
  // AlertDialogHeader,
  // AlertDialogOverlay,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  // Wrap,
  // WrapItem,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCartProduct } from "../../Redux/Cart/action";
// import { addToCartProduct } from "../../Redux/Products/action";

export function CompExample() {
  const dispatch = useDispatch()
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });
  
  const handleClick = () => {
     dispatch(addToCartProduct())
  }


  return isVisible ? (
    <Alert status="success">
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received. We will review your application
          and respond within the next 48 hours.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  ) : (
    //   <Button onClick={onOpen}>Show Alert</Button>
    <Button
      className="btn"
      onClick={handleClick}
      backgroundColor="#C7A550"
      margin="0px 12px"
    >
      ADD TO CART
    </Button>
  );
}

export function ToastStatusExample() {
  const [status, setStatus] = React.useState("success");
  const toast = useToast();
  // const statuses:any = ['success', 'error', 'warning', 'info']
  function handleClick() {
    if (status === "success") {
      setStatus("error");
    } else {
      setStatus("success");
    }
    toast({
      title:
        status === "success"
          ? "Products added to cart"
          : "Product is already added to cart",
      status: status,
      isClosable: true,
      position: "top",
    });
  }
  return (
    <Button className="btn" backgroundColor="#C7A550" onClick={handleClick}>
      ADD TO CART
    </Button>
  );
}
