import SearchSVG from "./searchSVG";

export default function SearchBar() {
    return (
        <div className='flex items-center justify-center border-2 border-gray-600 rounded-lg'>
            <input
                className='h-12 px-5 text-lg rounded-l-lg outline-none w-96'
                placeholder='Search Companies'
            />
            <button className='flex items-center justify-center w-16 h-12 bg-white rounded-r-lg'>
                <SearchSVG />
            </button>
        </div>
    );
}