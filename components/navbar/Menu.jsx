import MenuSVG from "./MenuSVG";

export default function Menu() {
    return (
        <button className='flex items-center justify-center w-16 hover:border-2 hover:border-gray-500 rounded-3xl h-2/3'>
            <MenuSVG />
        </button>
    );
}