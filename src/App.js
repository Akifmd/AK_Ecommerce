import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header, Footer} from"./components";
import { Cart } from "./pages/cart/Cart";
import {Home, Contact} from"./pages";
import SingleProductPage from "./components/product/singleProductPage";
import  Checkout  from "./pages/checkout/Checkout";
import Payment from "./pages/checkout/payment";
import Order from "./pages/checkout/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleProductView/:id" element={<SingleProductPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderplaced" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
