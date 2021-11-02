import Link from 'next/link';

export default function NavButton({ text, route }) {
    return (
        <Link href={route} passHref>
            <button className='w-24 p-1 m-2 text-center text-white bg-gray-600 rounded-lg h-14 hover:bg-gray-300 hover:text-gray-600'>
                {text}
            </button>
        </Link>
    )
}