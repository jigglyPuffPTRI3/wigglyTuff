import Logo from './logo';
import SearchBar from "./searchBar";
import RouteButtons from './routeButtons';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 text-black bg-gray-400">
      <Logo />
      <SearchBar />
      <RouteButtons />
    </div>
  );
}
