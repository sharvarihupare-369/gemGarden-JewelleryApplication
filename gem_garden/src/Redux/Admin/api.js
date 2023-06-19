import axios from 'axios';
// import { NewDataType } from '../../Pages/Admin';
const baseUrl="https://gem-garden-backenddata.onrender.com/arrival"



 //const baseUrl="http://localhost:8080/arrival"

export const getProducts = async (data) => {
  const response = await axios
    .get(`${baseUrl}`, data)
    .then((res) =>
    res.data)
    .catch((err) => {
      console.log(err);
      return null;
    });

  return response;
};




export const addProduct = (newData) => {
console.log("adding called")
  console.log(newData,"heres the data")
   axios.post(`${baseUrl}`,newData).then((res)=>{
// console.log(res.data,"after adding")
return(res.data)
   }).catch((err)=>{
    console.log(err)
   })
};



//2

export const updateProducts = (newData,id) => {

console.log("editing called",newData)
   const response = axios.patch(`${baseUrl}/${id}`,newData).then((res)=>{console.log(res.data)})
   return response
};


// export const updateProducts = async(newData: NewDataType, id?: number) => {
//   console.log("it is the data we got", newData);
  // return axios
  //   .patch(`${baseUrl}/${id}`, newData)
  //   .then((res) => {
  //     console.log(res.data,"after error");
  //     return res.data;
  //   })
  //   .catch((error) => {
  //     console.error("Error updating products:", error);
  //     throw error;
  //   });
// console.log(id,newData)
// let res=await axios.patch(`${baseUrl}/${id}`,newData)
// console.log("patched")



// };




// export const updateProducts = (newData: NewDataType, id?: number) => {
//   console.log("it is the data we got", newData);
//   axios.patch(`${baseUrl}/${id}`, newData)
//     .then((res) => console.log(res.data))
//     .catch((error) => {
//       console.error("An error occurred:", error);
//     });
// };

// export const updateDisLike = (postdata:PostDataType,id?:number) => {
//     const response = axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,postdata).then((res)=>console.log(res.data))
//     return response
// };
export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to delete product: ${error}`);
  }
};