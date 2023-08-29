import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getSingleProducts } from "./PRODUCTS/action";
import { getSingleProducts } from "../Redux/Products/action";
import { Dispatch } from "redux";
import styled from "@emotion/styled";
import { Button, Input, Select } from "@chakra-ui/react";
import { GiCardExchange } from "react-icons/gi";
import { SiMaterialdesign } from "react-icons/si";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { RiExchangeCnyFill } from "react-icons/ri";
import { BiArchiveOut } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { ToastStatusExample } from "./PRODUCTS/alert";



export const SingleProductPage = () => {
  const arrivalData = useSelector(
    (store) => store.productReducer.singlePageData
  );
  const [imageData, setImage] = React.useState(arrivalData.src1);
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getSingleProducts(id));
  }, []);
  return (
    <DIV>
      <div>
        <div className="topsectionImage">
          <div className="imageDetail">
            <div className="ImageContainer">
              <img
                className="mainImage"
                src={imageData !== undefined ? imageData : arrivalData.src1}
                alt="img"
              />
            </div>
            <div className="imageSideShow">
              <img
                onClick={() => setImage(`${arrivalData.src1}`)}
                src={arrivalData.src1}
                alt="img"
              />
              <img
                onClick={() => setImage(`${arrivalData.src2}`)}
                src={arrivalData.src2}
                alt="img"
              />
              <img
                onClick={() => setImage(`${arrivalData.src3}`)}
                src={arrivalData.src3}
                alt="img"
              />
              {/* <img  src={arrivalData.video} alt="img" /> */}
            </div>
            <div className="certified">
              <div>
                <SiMaterialdesign />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Best Designs
                </p>
              </div>
              <div>
                <AiFillSafetyCertificate />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Certified Diamonds
                </p>
              </div>
              <div>
                <BiArchiveOut />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Bis Hallmark
                </p>
              </div>
              <div>
                <FaShippingFast />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Insured Shipping
                </p>
              </div>
              <div>
                <RiExchangeCnyFill />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Lifetime Exchange
                </p>
              </div>
              <div>
                <GiCardExchange />
                <p style={{ fontSize: "0.8rem", color: "grey" }}>
                  Easy Exchange
                </p>
              </div>
            </div>
          </div>
          <div className="productsDetail">
            <h1>{arrivalData.name}</h1>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>
              By PC Jeweller | Product Code: OOOLR00055DD-FSY4F12
            </p>
            <p style={{ fontSize: "0.8rem", color: "grey" }}> (1 Reviews)</p>
            <p style={{ fontSize: "1rem", color: "grey" }}>
              Category : {arrivalData.material}
            </p>
            <h1>
              M.R.P : ₹ {arrivalData.currentprice}.00{" "}
              <span
                style={{
                  color: "red",
                  verticalAlign: "middle",
                  textDecoration: "line-through",
                }}
              >
                (M.R.P : ₹ {arrivalData.orignalprice}.00)
              </span>
            </h1>
            <p style={{ fontSize: "0.8rem", color: "grey" }}>
              (Inclusive of all taxes)
            </p>
            <div className="size">
              {" "}
              <span>Size:</span>
              <Select w="20%">
                <option value="">Select Size</option>
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
              </Select>
            </div>

            {/* <Button className='btn' onClick={handleAlert} backgroundColor="#C7A550" color="white" margin="0px 12px">ADD TO CART</Button> */}
            <ToastStatusExample />
            <Button
              className="btn"
              backgroundColor="#C7A550"
              color="white"
              margin="0px 12px"
            >
              BUY NOW
            </Button>

            <div className="delivery">
              <div>
                <p style={{ fontSize: "1.3rem", color: "#3D3D3B" }}>
                  Expected Shipping Date
                </p>
                <p style={{ fontSize: "1rem", color: "grey" }}>15/05/2023</p>
              </div>
              <div>
                <p>Delivery Option</p>
                <div className="pincode">
                  <Input type="text" placeholder="Enter pincode" />
                  <Button backgroundColor="#50C7C7">Check</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div> */}
      </div>
      {/* <div></div>
      <div></div> */}
    </DIV>
  );
};

const DIV = styled.div`
  .topsectionImage {
    display: flex;
    justify-content: space-between;
  }
  .ImageContainer {
    display: flex;
    justify-content: center;
    padding: 20px;
    align-items: center;
  }
  .topsectionImage .imageDetail .mainImage {
    width: 90%;
  }
  .btn:hover {
    background-color: #50a7c7;
  }
  .topsectionImage .imageDetail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 45%;
    padding: 12px;
  }
  .topsectionImage .productsDetail {
    width: 50%;
    padding: 12px;
    text-align: left;
  }
  .topsectionImage .productsDetail p {
    margin: 12px 0px;
  }
  .imageSideShow {
    border: 1px solid;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    align-items: center;
  }
  .imageSideShow img {
    width: 10%;
  }
  /* .delivery{
    align-items: center;
    padding: 12px 0px;
    display: flex;
    justify-content: space-between;
  } */
  .size {
    /* width: 20%; */
    margin: 22px 0px;
    display: flex;
    gap: 20px;
  }
  .certified {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 20px;
  }
  .certified div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #c7a108;
  }
  .pincode {
    display: flex;
    gap: 20px;
  }
`;
