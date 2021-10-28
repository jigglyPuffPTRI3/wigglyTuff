import SearchBar from "./SearchBar";
import Menu from './Menu';

export default function Navbar() {
  return (
    <div className="flex items-center justify-center h-20 text-black bg-gray-400">
      <SearchBar />
      <Menu />
    </div>
  );
}
