import MenuSVG from "./menuSVG";

export default function Menu() {
    return (
        <button className='flex items-center justify-center w-16 rounded-lg hover:bg-gray-500 h-2/3'>
            <MenuSVG />
        </button>
    );
}