export const GetProducts = (products) => {
  return {
    type: "GetProducts",
    payload: products,
  };
};
export const SingleProduct = (product) => {
  return {
    type: "SingleProduct",
    payload: product,
  };
};

export const ADD = (item) => {
  return {
      type: "ADD_CART",
      payload: item
  }
}

// remove iteams
export const DELETE = () => {
  return {
      type: "DEL_CART",
      
  }
}

export const DLT=(element)=>{
  return{
    type:"RMV_CART",
    payload:element
  }
}

// remove individual iteam

export const REMOVE = (iteam) => {
  return {
      type: "RMV_ONE",
      payload: iteam
  }
}