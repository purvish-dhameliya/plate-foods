import FoodCard from "./FoodCard";
import FoodData from "../FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => toast.success(`Added ${name}`);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center my-10 md:justify-start mx-6">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return  category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map((food, index) => (
          <FoodCard
            key={index}
            id={food.id}
            name={food.name}
            img={food.img}
            price={food.price}
            rating={food.rating}
            desc={food.desc}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
