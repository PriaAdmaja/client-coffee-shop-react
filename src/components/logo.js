import { Component } from "react";
import logo from "../assets/coffee icon.png"

class Logo extends Component {
    render() {
        return (
            <div className="flex items-center mr-auto gap-4">
                <img className="w-[30px] h-auto" src={logo} alt="icon"/>
                <p className="text-base md:text-xl font-bold">Coffee Shop</p>
            </div>
        );
    }
}

export default Logo