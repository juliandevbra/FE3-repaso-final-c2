import { toast } from "react-toastify";
import Card from "../components/Card";
import { useBeerContext } from "../Context/Context";

const Home = () => {
  const { state, dispatch } = useBeerContext();

  const addCart = (beer) => {
    dispatch({ type: "ADD_CART", payload: beer });
    // toast("✅ Se ha agregado al carrito", {
    //   position: "bottom-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "dark",
    // });
    toast.success("Se agregó al carrito", {});
  };

  return (
    <div className="grid">
      {state.beers.map((beer) => (
        <Card data={beer} key={beer.id}>
          <button onClick={() => addCart(beer)}>🛒</button>
        </Card>
      ))}
    </div>
  );
};

export default Home;
