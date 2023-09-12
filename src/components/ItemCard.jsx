import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeFromCart,
} from "../redux/features/cartSlice";
import { toast } from "react-hot-toast";
const ItemCard = ({ id, price, img, name, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        className="absolute right-7 text-grey-800 cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast.error(`Removed ${name} item!`);
        }}
      />
      <img src={img} alt="" className="w-[50px] h-[50px] " />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between ">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center absolute gap-2 right-7">
            <AiOutlineMinus
              className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer "
              onClick={() =>
                qty > 1 ? dispatch(decrementItem({ id })) : (qty = 0)
              }
            />
            <span>{qty}</span>
            <AiOutlinePlus
              className="border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer "
              onClick={() =>
                qty >= 1 ? dispatch(incrementItem({ id })) : (qty = 0)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired, // Example: id should be a number and is required.
  img: PropTypes.string.isRequired, // Example: img should be a string and is required.
  name: PropTypes.string.isRequired, // Example: name should be a string and is required.
  price: PropTypes.number.isRequired, // Example: price should be a number and is required.
  qty: PropTypes.number.isRequired,
};
export default ItemCard;
