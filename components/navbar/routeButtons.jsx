import { useSelector } from "react-redux";
import NavButton from "./navButton";

export default function RouteButtons() {
    const { auth } = useSelector(state => state);

    return (
        <div className='flex items-center justify-between m-2'>
            <NavButton text='Interviews' route='/testRoute' />
            <NavButton text='Post Interview' route='testRoute' />
            {auth.isLoggedIn ? <NavButton text='Log Out' route='/testRoute' /> : <NavButton text='Login' route='/login' />}
        </div>
    );
}