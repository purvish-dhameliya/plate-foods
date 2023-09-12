import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <div className="text-3xl flex items-center justify-center mt-72">
        {loading ? <PuffLoader color="#36d7b7" /> : <div>Order Successfully purchased</div>}
      </div>
    </>
  );
};

export default Success;
