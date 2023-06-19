import React, { useEffect, useState } from "react";
import styles from "./Admin.module.css";
import { addProduct, deleteProduct, getProducts, updateProducts } from "../Redux/Admin/api";
//import AdminProductCards from "../Components/AdminProductCards";
import { useSearchParams } from "react-router-dom";


const initialState = {
  src1: "",
  src2:"",
  currentprice: 0,
  orignalprice: 0,
  video: "",
  name: "",
  image: "",
  rating: 0,
  material: "",
};

export const Admin = () => {
  // const dispatch=useDispatch()
  // const Products:IAdmin_Product[]=useSelector((store:Admin_Products_State)=>store.Admin_Products)
  // console.log(Products,"products")
  const [allProducts, setAllProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();


  const initialMaterial = searchParams.getAll("material");
  const initialId = searchParams.get("id");
  const initialType = searchParams.getAll("type");
  const initialOrder = searchParams.getAll("order");
  const [order, setOrder] = useState(initialOrder || undefined);
  const [material, setMaterial] = useState(initialMaterial || []);
  const [type, setType] = useState(initialType || []);
  const [id, setId] = useState(initialId || null);


const[editId,setEditId]=useState(null)
const [deleteId,setDeleteId]=useState(null)








  const [editProduct, setEditProduct] = useState(initialState);
  const [newData, setNewData] = useState(initialState);




  

  

  const obj = {
    params: {
      id: searchParams.get("id"),
      material: searchParams.getAll("material"),
      type: searchParams.getAll("type"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
    },
  };
;
  useEffect(() => {
    getProducts(obj).then((res) => {
      console.log(res);
      setAllProducts([...res]);
    });
  }, [searchParams]);



  useEffect(() => {
    let params = {
      material: material,
      type: type,
      order: order,
    };
    if (id !== null) {
      params.id = id; // Assign the value of "id" if it is not null
    }
    setSearchParams(params);
  }, [id, material, order, type]);




  ///Filtering part//////////////////////
  const handelMaterial = (e) => {
    const { value } = e.target;
    let newMaterial = [...material];
    if (newMaterial.includes(value)) {
      newMaterial = newMaterial.filter((el) => el !== value);
    } else {
      newMaterial.push(value);
    }
    setMaterial(newMaterial);
  //  console.log(material);
  };

  const handelId = (e) => {
    const { value } = e.target;
    setId(value);
  };
















  const handleChange = (e) => {
    const { value, name } = e.target;
  
    // Create a new object with updated values for both newData and editProduct
    const updatedData = { ...newData, [name]: value };


    
  
    // Update both newData and editProduct with the updated object
    setNewData(updatedData);
    setEditProduct(updatedData);
  
   // console.log(updatedData);
  };

  //console.log(editProduct,"editable") 
  //console.log(newData,"newData")


//ADD
  // const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   addProduct(newData);
  //   setAllProducts((pre) => [...pre, newData]);


  // };


  const handleSubmitPost = (e) => {
    e.preventDefault();
  
    if (editId) {
      // If editId exists, it means we are updating an existing product
      updateProducts(newData, editId).then(()=>{
        getProducts(obj).then((res) => {
                 console.log(res);
                 setAllProducts([...res]);
              });
      });
    } else {
      // If editId is null, it means we are adding a new product
      addProduct(newData);
      setAllProducts((pre) => [...pre, newData]);
    }
  };
  




//edit product data settings
  const handleEdit = (productId) => {
   // console.log(productId,"editing id")
    const selectedProduct = allProducts.find((product) => product.id === productId);
    if (selectedProduct) {
      const { id, ...filteredProduct } = selectedProduct;
      setEditId(productId)
    
    //for editing the product only
     // setEditProduct(filteredProduct);

      setNewData(filteredProduct);
    }
  };




  
  



const HandelProductChange = () => {
  console.log("changinggggggggggggggggg");

  updateProducts(editProduct, editId)

  
    // .then((res) => {
    //   return getProducts(obj);
    // })
    // .then((res) => {
    //   console.log(res);
    //   setAllProducts([...res]);
    // })
    // .catch((error) => {
    //   console.error("Error updating products:", error);
    // });
  }

//deletFetching
// const HandelProductChange=()=>{
//   console.log("changinggggggggggggggggg")


//   updateProducts(editProduct,editId).then((res)=>{
//     getProducts(obj).then((res) => {
//       console.log(res);
//       setAllProducts([...res]);
//     });
//   })
//   updateProducts(newData,editId)


// }







// const HandelProductChange = () => {
//   console.log("changinggggggggggggggggg");

//   updateProducts(newData, editId)
 
//       setAllProducts(prevProducts => {
//         // Remove the old product with the matching editId
//         const updatedProducts = prevProducts.filter(product => product.id !== editId);
//         // Add the new data (newData) to the updated products array
//         updatedProducts.push(newData);
//         return updatedProducts;
//       });

// };



//deletefetching
const handelDelete = (id) => {
  deleteProduct(id)
    .then(() => {
      getProducts(obj).then((res) => {
       // console.log(res);
        setAllProducts([...res]);
      });
      const newAllProducts = allProducts.filter((product) => product.id !== id);
      setAllProducts(newAllProducts);
    })
    .catch((error) => {
      console.error("Failed to delete product:", error);
    });
};




















  //console.log(allProducts)
  return (
    <div className={`${styles.admin}`}>
<div className={`${styles.navbarAdmin}`}>
<h1>Welcome to Admin Portal</h1>
</div>

      <div className={`${styles.AdminPageContainer}`}>
        <div className={`${styles.Sortbar}`}>
          <form action="">
            <p> Search products</p>
            <input
              type="text"
              placeholder="Search by id"
              name="id"
              onChange={handelId}
            />

            <p> Sort By Material</p>

            {/* <select name=" material" id=""  onChange={handelMaterial} >
              <option value="">Material</option>
              <option value="Diamond">Diamond</option>
              <option value="Solitaire">Solitaire"</option>
              <option value="Gold">Gold</option>
              <option value="Silver">Silver</option>
            </select>
            <p>  Sort By Price</p>
            <select name=" material" id=""   >
              <option value="">Price</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select> */}

            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Diamond"
                onChange={handelMaterial}
              />
              <label htmlFor="">Diamond</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Solitaire"
                onChange={handelMaterial}
              />
              <label htmlFor="">Solitaire</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Silver" onChange={handelMaterial} />
              <label htmlFor="">Silver</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Gold" onChange={handelMaterial} />
              <label htmlFor="">Gold</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="Pearls" onChange={handelMaterial} />
              <label htmlFor="">Pearls</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input
                type="checkbox"
                value="Gemstone"
                onChange={handelMaterial}
              />
              <label htmlFor="">GemStone</label>
            </div>
            <p>Filter By Price</p>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Above 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">15000 - 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 25000</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="25000" />
              <label htmlFor="">Under 1000</label>
            </div>
            <p>Filter by Rating</p>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">4⭐ & above</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">3⭐</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">2⭐</label>
            </div>
            <div className={`${styles.Checkbox}`}>
              <input type="checkbox" value="4" />
              <label htmlFor="">1⭐</label>
            </div>
          </form>
        </div>




        <div className={`${styles.AdminProductsList}`}>
          {allProducts.map((el) => (
            <div key={el.id} className={`${styles.AdminProductCards}`}>
              <img src={el.src1} alt="" />
              <p>{el.name}</p>
              <p>{el.material}</p>
              <h2>{el.currentprice} Rs</h2>
              <div className={`${styles.Edit_deletebutton}`}>
                <button className={`${styles.editbtn}`}   onClick={() =>handleEdit(el.id)}  >Edit</button>
                <button className={`${styles.deletebtn}`} onClick={()=>handelDelete(el.id)}   >Delete</button>
              </div>
            </div>
          ))}
        </div>




        <div className={`${styles.AddingSection}`}>
          <div className={`${styles.ProductAddingForm}`}>
            <p>Add new product</p>
     
            <form action="" onSubmit={handleSubmitPost}>

              <input
                type="text"
                placeholder="Product Name"
                name="name"
                defaultValue={newData.name}
                onChange={handleChange}
              />
              <select name="material" id="" defaultValue={newData.material}
             onChange={handleChange}>
                <option value="">Category</option>
                <option value="Diamond">Diamond</option>
                <option value="Solitaire">Solitaire</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
              </select>
              <div className={`${styles.pricetodiscount}`}>
                <input
                  type="text"
                  placeholder="Price"
                  name="orignalprice"
                  defaultValue={newData.orignalprice}
                  onChange={handleChange}
                />
                <p>To</p>
                <input
                  type="text"
                  placeholder="Discount"
                  name="currentprice"
                  defaultValue={newData.currentprice}
                  onChange={handleChange}
                />
              </div>
              <input
                type="text"
                placeholder="Upload Image link"
                name="src1"
                onChange={handleChange}
                defaultValue={newData.src1}
              />

              <div className={`${styles.SlidingComponent}`}>
                <p>Rating</p>
                <div className={`${styles.slider}`}>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    id="slider"
                    name="rating"
                    onChange={handleChange}
                  />

                  <div className={`${styles.slidingnumber}`}>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.tagBestSeller}`}>
                <label htmlFor="">Best-Seller</label>
                <input
                  type="checkbox"
                  name="BestSeller"
                  onChange={handleChange}
                  defaultValue="BestSeller"
                  checked
                />
              </div>
              <input
                type="text"
                placeholder="Video about product"
                name="src2"
                defaultValue={newData.video}
                onChange={handleChange}
              />
              <input type="text" placeholder="Alternate Image" defaultValue={newData.src2} />
         <div className={`${styles.FormButtonDiv}`}>
         <button type="submit" >Add</button>
              <button onClick={HandelProductChange}>Edit </button>
         </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
