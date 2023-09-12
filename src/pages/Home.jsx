import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Header from "../layouts/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </div>
  );
};

export default Home;
