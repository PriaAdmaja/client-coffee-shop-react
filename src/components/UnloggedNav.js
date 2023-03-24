import { Link } from "react-router-dom";

const UnloggedNav = () => {
    return (
        <ul class="hidden lg:flex items-center justify-center font-medium list-none gap-10 px-1">
            <li><Link to={'/login'}>Login</Link></li>
            <li class="flex items-center justify-center w-[150px] h-11 rounded-full bg-primary"><Link to={'/signup'}>Sign Up</Link></li>
        </ul>
    );
}


export default UnloggedNav