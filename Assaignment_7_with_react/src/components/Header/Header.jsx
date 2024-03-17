import { CiSearch, CiUser } from "react-icons/ci";
const Header = () => {
  return (
      <nav className="flex justify-between items-center container mx-auto px-2">
        <h1 className="text-[#150B2B] text-[32px] font-bold">Recipe Calories</h1>
        <div>
          <ul className="flex gap-5">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-[#05010c0f] p-2 rounded-3xl">
        <CiSearch className="mr-2 w-6 text-2xl" />
        <input className="" type="text" placeholder="Search" />
          </div>
          <CiUser className="bg-[#1ef6b9fa] p-2 rounded-full m-4 text-4xl" />
        </div>
      </nav>   
  );
};

export default Header;