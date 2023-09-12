import { useDispatch } from "react-redux";
import { setSearch } from "../redux/features/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <div className="flex flex-col lg:flex-row items-center justify-between mx-6 py-3 mb-5">
          <div>
            <h4 className="text-xl font-bold text-gray-600">
              {new Date().toUTCString().slice(0, 16)}
            </h4>
            <h1 className="text-2xl font-bold text-gray-600">Plate Foods</h1>
          </div>
          <div>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Enter your Plate"
              className="p-3 border boder-gray-400 text-sm rounded-lg outline-none w-full lg:w-[20vw]"
              autoComplete="off"
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
