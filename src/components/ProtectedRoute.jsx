/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const cardItems = useSelector((state) => state.cart.cart);
  return cardItems.length > 0 ? element : <Navigate to="/" />;
};

ProtectedRoute.prototype ={

}
export default ProtectedRoute;
