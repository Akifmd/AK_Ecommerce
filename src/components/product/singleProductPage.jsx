import { useDispatch, useSelector } from "react-redux";
import "./singleproducts.css";
import { ADD } from "../../redux/action";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SingleProductPage = () => {
  const product = useSelector((state) => state.getSingleProductReducer.product);
  console.log(product);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  // console.log(price);

  const getdata = useSelector((state) => state.cartreducer.carts);
  
  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  const cart=useSelector((state)=>state.cartreducer)
  console.log(cart)
  
  
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(ADD(product));
    toast.success("Product added to cart successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "dark",
    });
  }  
   
 

  return (
   
    <div className="Main-container">
      <div className="single-container">
       
        <div className="description">
          <h2>Overview of the product</h2>
          <hr className="line" />
          <img className="product-image" src={product.linkImg} />
          <p>{product.description}</p>
        </div>

        <div className="details">
          <h1 className="product-title">{product.title}</h1>
          <h2 >{product.category}</h2>
          <h4>₹{product.price}</h4>
          <form onSubmit={handleSubmit}>
          <button className="button" type="submit" > Add to cart </button>
          </form>
        <ToastContainer />
        </div>
      </div>
    </div>
  );
};
export default SingleProductPage;
