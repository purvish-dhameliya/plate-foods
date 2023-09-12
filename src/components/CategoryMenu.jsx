import { useEffect, useState } from "react";
import FoodData from "../FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/features/categorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find Food for your mood</h3>

      <div className="flex my-5 gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold  rounded-lg hover:bg-green-500 ${selectedCategory === "All" && "bg-green-500 text-white" }`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <>
              <button
                onClick={() => dispatch(setCategory(category))}
                key={index}
                className={`px-3 py-2 bg-gray-200 font-bold  rounded-lg hover:bg-green-500`}
              >
                {category}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
