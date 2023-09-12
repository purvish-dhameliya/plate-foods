import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

import PropTypes from "prop-types";

const FoodCard = ({ id, img, name, price, rating, desc,handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex  justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm  font-normal">{desc?.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
          onClick={() =>{
            dispatch(addToCart({ id, name,price, rating,  img, qty: 1 }))
            handleToast(name);  
        }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  id: PropTypes.number.isRequired, // Example: id should be a number and is required.
  img: PropTypes.string.isRequired, // Example: img should be a string and is required.
  name: PropTypes.string.isRequired, // Example: name should be a string and is required.
  price: PropTypes.number.isRequired, // Example: price should be a number and is required.
  rating: PropTypes.number.isRequired, // Example: rating should be a number and is required.
  desc: PropTypes.string, // Example: desc is optional but should be a string if provided.
  handleToast: PropTypes,
};

export default FoodCard;
