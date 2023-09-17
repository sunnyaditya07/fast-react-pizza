import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
// import { useSelector } from "react-redux";

function Header() {
  return (
    <header
      className="flex items-center justify-between border-b  border-stone-400
       bg-yellow-400 px-4 py-3 
     uppercase sm:px-6"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizz Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
