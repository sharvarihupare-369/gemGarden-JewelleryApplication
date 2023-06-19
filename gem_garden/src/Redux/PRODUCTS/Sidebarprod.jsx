import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import styled from "styled-components";

export const Sidebarfilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const insitialCategory = searchParams.getAll("category");
  // const insitialType = searchParams.getAll("type");
  const insitialOrder = searchParams.getAll("order");
  const [material, setCategory] = useState(insitialCategory || []);
  // const [type, setType] = useState(insitialType || []);
  const [order, setOrder] = useState(insitialOrder || "");

  function handleCategory(e) {
    const { value } = e.target;
    let newCategory = [...material];
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((ele) => ele !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
  }
  function handleOrder(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    let params = {
      material,
      // type,
      order,
    };
    order && (params.order = order);
    setSearchParams(params);
  }, [material, order]);
  return (
    <DIV className="filter_section">
      <div>
        <Text fontSize={"1.5rem"} color={"#886305"}>
          Filter by Category
        </Text>
        <div>
          <input
            onChange={handleCategory}
            data-testid="recipe-indian"
            type="checkbox"
            value="Diamond"
            checked={material.includes("Diamond")}
          />
          <label>Diamond</label>
          <br />
          <input
            onChange={handleCategory}
            data-testid="recipe-italian"
            type="checkbox"
            value="Pearl"
            checked={material.includes("Pearl")}
          />
          <label>Pearl</label>
          <br />
          {/* <br /> */}
          <input
            onChange={handleCategory}
            data-testid="recipe-chinese"
            type="checkbox"
            value="Gold"
            checked={material.includes("Gold")}
          />
          <label>Gold</label>
          <br />
          {/* <br /> */}
          <input
            onChange={handleCategory}
            data-testid="recipe-thai"
            type="checkbox"
            value="Gemstone"
            checked={material.includes("Gemstone")}
          />
          <label>Gemstone</label>
          <br />
          {/* <br /> */}
          <input
            onChange={handleCategory}
            data-testid="recipe-thai"
            type="checkbox"
            value="Solitaire"
            checked={material.includes("Solitaire")}
          />
          <label>Solitaire</label>
          <br />
        </div>
      </div>
      <br />
      {/* <br /> */}
      {/* <h3>Veg / Non-Veg</h3>
      <div>
        <input
          onChange={handleType}
          value={"veg"}
          data-testid="recipe-veg"
          type="checkbox"
          checked={type.includes("veg")}
        />
        <label>Veg</label>
        <br />
        <br />
        <input
          onChange={handleType}
          value={"non-veg"}
          data-testid="recipe-non-veg"
          type="checkbox"
          checked={type.includes("non-veg")}
        />
        <label>Non Veg</label>
      </div> */}
      {/* <br /> */}
      {/* <br /> */}
      <br />
      <div>
        <Text fontSize={"1.5rem"} color={"#886305"}>
          Sort By Price
        </Text>
        <div onChange={handleOrder}>
          <input
            defaultChecked={order === "asc"}
            value={"asc"}
            data-testid="recipe-sort-asc"
            type="radio"
            name="sort"
          />
          <label>Ascending</label>
          {/* <br /> */}
          <br />
          <input
            defaultChecked={order === "desc"}
            value={"desc"}
            data-testid="recipe-sort-desc"
            type="radio"
            name="sort"
          />
          <label>Descending</label>
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* border-right: 1px solid gray; */
  text-align: left;
  /* margin-left: 20px; */
  /* box-shadow: 2px 2px 2px gray; */

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: 1rem;
  }
`;
