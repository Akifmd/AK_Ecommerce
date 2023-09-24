import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE, DELETE,DLT} from "../../redux/action";
import "./cart.css";
import image from "../../assets/img.jpg";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


export const Cart = () => {
  const carts = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);

  const totalPrice = () => {
    let price = 0;
    carts.map((element) => {
      price = element.price * element.qnty + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  const Final = () => {
    if (carts.length >= 1) {
      return (
        <div className="carts">
          <h2>Products In Cart</h2>

          <div>
            {carts.map((element) => {
              return (
                <div>
                  <img className="product-img" src={element.linkImg} />
                  <h2 className="productcost">{element.title}</h2>
                  <h3 className="productcost">₹{element.price}</h3>
                  <h4>Quantity:</h4>

                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(REMOVE(element));
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <a> {element.qnty}</a>
                  <button
                    className="btn"
                    onClick={() => {
                      dispatch(ADD(element));
                    }}
                  >
                    +{" "}
                  </button>
                  <button
                onClick={() => {
                  dispatch(DLT(element));
                }}
              >
                
                <RiDeleteBin2Line />
                Delete
              </button>
                </div>
              );
            })}
          </div>

          <div>
            <h2>
              {" "}
              Total price:
              {price} <br />
              <a
                onClick={() => {
                  dispatch(DELETE());
                }}
              >
                {" "}
                <RiDeleteBin2Line />
                Delete all{" "}
              </a>{" "}
              <hr/>
              <a href="/checkout"> Checkout <BsFillArrowRightCircleFill/> </a>
            </h2>
          </div>
         
        </div>
      );
    } else {
      return (
        <div>
          <p className="empty">Your cart is empty</p>
          <img src={image} alt="empty cart picture" className="image-empty" />
        </div>
      );
    }
  };

  return (
    <>
      <Final />
    </>
  );
};
