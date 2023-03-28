import { useEffect, useState } from "react";
import Logo from "./Logo"
import burger from "../assets/burger.png"
import UnloggedNav from "./UnloggedNav";
import LoggedNav from "./LoggedNav"
import { Link } from "react-router-dom";
import logoSearch from "../assets/search.png";
import chatIcon from "../assets/chat.png";
import defaultAvatar from "../assets/default-avatar.jpg"

import { logout } from "../utils/apiconnection/auth";

const Header = () => {
    const [mNavDisplay, setMNavDisplay] = useState('hidden');
    const [avatar, setAvatar] = useState(defaultAvatar);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("cs-token");
        const pict = localStorage.getItem("profpict");
        token && setLogin(true)
        pict && setAvatar(pict)
    },[])

    const NavControl = () => {
        return login === false ? <UnloggedNav /> : <LoggedNav />
    }

    function MobileNav() {
        if (!avatar) {
            return (
                <ul className="flex flex-col gap-8 list-none">
                    <li><Link to={'/login'}>Login</Link></li>
                    <li className="bg-primary rounded-[20px] flex items-center justify-center py-3 px-[10px]"><Link to={'/signup'}>Sign Up</Link></li>
                </ul>
            );
        }
        return (
            <div>
                <div className="border border-solid border-gray-300 flex justify-end items-center gap-1 py-1 px-2 rounded-xl">
                    <input className="w-full h-9" type="search" />
                    <img className="w-5 h-auto" src={logoSearch} alt="logo"/>
                </div>
                <div className="flex items-center justify-end gap-10 pt-5">
                    <div className="cursor-pointer">
                        <img className="w-9 h-auto" src={chatIcon} alt="chat" />
                    </div>
                    <div className="cursor-pointer w-10 h-10 rounded-full overflow-hidden relative">
                        <Link to="/profile"><img className="w-auto h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={avatar} alt="user" /></Link>
                    </div>
                </div>

            </div>
        );
    }

    const checkHandler = () => {
        mNavDisplay === "hidden" ? setMNavDisplay("flex") : setMNavDisplay("hidden")
    }

    return (
        <section className="m-0 p-[5%] xl:py-12 xl:px-[10%]">
            <nav className="flex items-center justify-between text-center select-none ">
                <Logo />
                <div className="relative inline md:hidden select-none">
                    <img className="-scale-x-[1]" src={burger} alt="menu" />
                    <input className="absolute left-1/4 top-1/4 scale-[2] opacity-0 cursor-pointer" type="checkbox" onChange={checkHandler} />
                </div>
                <ul className="hidden md:flex items-center justify-around list-none p-0 w-[400px] ">
                    <li className="w-1/4 "><Link to={'/'}>Home</Link></li>
                    <li className="w-1/4 "><Link to={'/products'}>Product</Link></li>
                    <li className="w-1/4 ">Your Cart</li>
                    <li className="w-1/4 "></li>
                </ul>
                <NavControl />
            </nav>
            <section className={`${mNavDisplay} absolute right-0 -bottom-1 w-4/5 h-[80vh] bg-[#ffffff] rounded-bl-2xl px-[10%] pt-[30px] pb-10 text-right text-base font-semibold flex-col justify-between gap-14 z-10 shadow-2xl md:hidden`} >
                <MobileNav />
                <ul className="flex flex-col gap-7 list-none text-xl">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/products'}>Product</Link></li>
                    <li>Your Cart</li>
                    <li>History</li>
                </ul>
                <button className="flex items-center justify-center w-full h-11 rounded-full bg-primary " type="button" onClick={() => logout}>Logout</button>
            </section>
        </section>
    );
}


export default Header