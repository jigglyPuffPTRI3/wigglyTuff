import { useSelector } from "react-redux";
import NavButton from "./navButton";

export default function RouteButtons() {
    const { auth } = useSelector(state => state);

    return (
        <div className='flex items-center justify-between m-2'>
            <NavButton text='Reviews' route='/reviewsList' />
            <NavButton text='Create Review' route='/postInterview' />
            {auth.isLoggedIn ? <NavButton text='Log Out' route='/testRoute' /> : <NavButton text='Login' route='/login' />}
        </div>
    );
}