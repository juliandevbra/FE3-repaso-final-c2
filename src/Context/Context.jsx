import { createContext, useContext, useEffect, useReducer } from "react";
import Swal from "sweetalert2";

const BeerContext = createContext();

const lsCart = JSON.parse(localStorage.getItem("cart")) || [];

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BEERS":
      return { ...state, beers: action.payload };
    case "GET_BEER": //Esto es extra
      return { ...state, beer: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART": //Esto es extra
      const filterCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, cart: filterCart };
    case "TOGGLE_THEME": //Esto lo resuelven ustedes
      return {};
    default:
      throw new Error("Error al modificar el estado");
  }
};

const initialState = {
  beers: [],
  cart: lsCart,
  beer: {}, // Esto es extra
  theme: "", // Puede ser un string o un booleano | Acá lo resuelven ustedes
};

const Context = ({ children }) => {
  // const [cart, setCart] = useState(lsCart);
  // const [beers, setBeers] = useState([]);
  const url = "https://api.sampleapis.com/beers/ale";
  // const url = "https://api.punkapi.com/v2/beers";
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const getBeers = async () => {
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.json();
      dispatch({ type: "GET_BEERS", payload: data });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al traer la lista de cervezas!",
        footer: err,
      });
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <BeerContext.Provider value={{ state, dispatch }}>
      {children}
    </BeerContext.Provider>
  );
};

export default Context;

export const useBeerContext = () => useContext(BeerContext);
