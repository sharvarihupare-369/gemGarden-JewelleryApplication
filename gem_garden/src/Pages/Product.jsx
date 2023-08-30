import React from "react";
import { getProducts } from "../Redux/Products/action";

import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "redux";
import { Card } from "./PRODUCTS/Card";
// import { Sidebarprod } from './PRODUCTS/Sidebarprod'
import styled from "@emotion/styled";

import { useSearchParams } from "react-router-dom";
import { Sidebarfilter } from "./PRODUCTS/Sidebarprod";
import { Button } from "@chakra-ui/react";

export const Product = () => {
  const arrivalData = useSelector((store) => store.productReducer.products);
  const DataPages = useSelector((store) => store.productReducer.totalpages);
  // console.log(DataPages)
  const page = new Array(Math.ceil(DataPages / 10)).fill(0);
  // console.log(page);
  const [pages, setPages] = React.useState(1);

  const [searchParams] = useSearchParams();
  let obj = {
    params: {
      material: searchParams.getAll("material"),
      // type: searchParams.getAll("type"),
      _sort: "currentprice",
      _order: searchParams.get("order"),
    },
  };
  const dispatch = useDispatch();
  // function handlePage(page:number){
  //   // dispatch(getProducts(obj,page))
  //   setPages(page)
  // }
  React.useEffect(() => {
    // dispatch(getProducts())
    dispatch(getProducts(obj, pages));
  }, [searchParams, pages]);
  return (
    <DIV className="body">
      {/* <Sidebarprod/> */}
      <Sidebarfilter />
      <div className="mainBody">
        <div className="productcards">
          {arrivalData.map((ele, ind) => (
            <Card key={ind} {...ele} />
          ))}
        </div>
        <div className="pagination">
          {page.map((ele, ind) => (
            <Button
              disabled={pages === ind + 1}
              backgroundColor={pages === ind + 1 ? "black" : "teal"}
              color="white"
              onClick={() => setPages(ind + 1)}
              key={ind}
            >
              {ind + 1}
            </Button>
          ))}
        </div>
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .pagination {
    padding: 10px 20px;
  }
  .pagination Button {
    margin: 0px 12px;
  }
  display: flex;
  .filter_section {
    width: 20%;
    /* border-right: 1px solid black; */
    padding: 20px;
    /* background-color: #262626; */
    /* color: white; */
  }
  .mainBody {
    width: 80%;
  }
  .productcards {
    /* background-color: #3e3b3b; */
    /* color: white; */
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    padding: 12px;
    margin: auto;
  }
  .card {
    /* border: 1px solid #e0e0e0; */
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .card img {
    width: 100%;
  }
  .card .name {
    width: 100%;
    height: 20px;
  }
  .card .price {
    width: 100%;
    padding: 12px;
  }
  .card button {
    width: 100%;
    padding: 12px;
  }

  @media only screen and (max-width: 880px) {
    .productcards {
      grid-template-columns: repeat(2, 1fr);
    }
    display: block;
    .mainBody {
      width: 100%;
    }
    .filter_section {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 880px) and (max-width: 1200px) {
    .productcards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

// import { getData } from "../Redux/RecipeReducer/action";
// import { RecipeCard } from "./RecipeCard";
// import styled from "styled-components";

// export const RecipeList = () => {

//   return (
//     <div>
//       <DIV data-testid="recipe-list">
//         {/* Map through the recipe using the recipe card here */}
//         {recipe.map((ele) => (
//           <RecipeCard key={ele.id} ele={ele} />
//         ))}
//       </DIV>
//     </div>
//   );
// };

// const DIV = styled.div`
//   display: grid;
//   grid-template-columns: auto auto auto;
//   padding: 12px;
//   grid-gap: 12px;
// `;
