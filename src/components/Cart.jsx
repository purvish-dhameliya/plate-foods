import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cardItems = useSelector((state) => state.cart.cart);
  const totalQty = cardItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cardItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[20vw] p-5 bg-white h-full mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-700">My Orders</span>

          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
            size={24}
          />
        </div>
        {cardItems.length > 0 ? (
          cardItems.map((item) => {
            return (
              <>
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  qty={item.qty}
                />
              </>
            );
          })
        ) : (
          <>
            <h5 className="flex items-center justify-center mt-20">
              No Items Found
            </h5>
          </>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty} </h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] md:w-[18vw] my-2" />
          <button
            onClick={()=> navigate("/success")}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white p-3 shadow-md text-5xl fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
