import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contacto from "./Pages/Contacto";
import Beer from "./Pages/Beer";
import Layout from "./Layout/Layout";
import Cart from "./Pages/Cart";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/beer/:id"
            element={
              <ErrorBoundary>
                <Beer />
              </ErrorBoundary>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
