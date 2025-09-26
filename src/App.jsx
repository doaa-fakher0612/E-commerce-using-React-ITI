import { BrowserRouter, Route, Routes,Navigate  } from "react-router";
import ProductList from "./Pages/ProductList";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <div  className="container my-5">
        <Routes>
         <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />    
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
