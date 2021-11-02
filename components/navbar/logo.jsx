import NavButton from "./navButton";
import Link from 'next/link';

export default function Logo() {
    return (
        <div className='m-2'>
          {/* <NavButton text='IP' route='/' /> */}
          <Link href='/'><img className='w-12 cursor-pointer ml-7' src='/Wigglytuff.png'/></Link>
        </div>
    );
}