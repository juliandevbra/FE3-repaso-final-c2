import Card from "../components/Card";
import { useBeerContext } from "../Context/Context";

const Home = () => {
  const { state, dispatch } = useBeerContext();

  return (
    <div className="grid">
      {state.beers.length &&
        state.beers.map((beer) => (
          <Card data={beer} key={beer.id}>
            <button
              onClick={() => dispatch({ type: "ADD_CART", payload: beer })}
            >
              🛒
            </button>
          </Card>
        ))}
    </div>
  );
};

export default Home;
