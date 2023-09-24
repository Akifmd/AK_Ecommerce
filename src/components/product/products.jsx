import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts, SingleProduct } from "../../redux/action";
import { Link } from "react-router-dom";
import "./products.css";
import data from "../../data";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const ProductsDisplay = () => {
  const products = useSelector((state) => state.getProductReducer.products);

  const dispatch = useDispatch();

  const fetchingData = async () => {
    dispatch(GetProducts(data));
  };

  useEffect(() => {
    fetchingData();
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="container-products ">
      <h2> Products</h2>
      <hr className="line" />
      <div className="card-container">
        {records.map((element) => {
          return (
            <div className="card">
              <Link to={`/singleProductView/${element.title}`}>
                <img
                  src={element.linkImg}
                  className="img-tag"
                  onClick={() => {
                    dispatch(SingleProduct(element));
                  }}
                />
              </Link>
              <h2 className="title-tag">{element.title}</h2>
              <h3 className="price-tag">₹{element.price}</h3>
            </div>
          );
        })}
      </div>
      <nav className="navigations">
        <ul className="navs-list">
          <li className="navs-item">
            <a href="#" onClick={prePage}>
            <AiFillCaretLeft/>Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`navs-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-item" onClick={() => changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="navs-item">
            <a href="#" onClick={nextPage}>
              Next <AiFillCaretRight/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProductsDisplay;
