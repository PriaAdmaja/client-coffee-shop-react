import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/coffee icon.png"

class LogoCS extends Component {
    render() {
        return (
            <Link className="flex items-center gap-4" to="/">
                <img className="w-[30px] h-auto" src={logo} alt="icon"/>
                <p className="text-base lg:text-lg xl:text-xl font-bold text-txtSecondary">Coffee Shop</p>
            </Link>
        );
    }
}

export default LogoCS