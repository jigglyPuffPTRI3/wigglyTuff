import { useSelector } from "react-redux";
import NavButton from "./navButton";

export default function RouteButtons() {
    const { auth } = useSelector(state => state);

    return (
        <div className='flex items-center justify-between m-2'>
            <NavButton text='Reviews' route='/reviewsList' />
<<<<<<< HEAD
            <NavButton text='Create Review' route='postInterview' />
=======
            <NavButton text='Create Review' route='/postInterview' />
>>>>>>> 5bc7922830661f9540dd0c7a5eab85ef8a205071
            {auth.isLoggedIn ? <NavButton text='Log Out' route='/testRoute' /> : <NavButton text='Login' route='/login' />}
        </div>
    );
}