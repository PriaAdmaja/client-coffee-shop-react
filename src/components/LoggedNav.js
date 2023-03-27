import { Component } from "react";
import { Link } from "react-router-dom";
import chatIcon from "../assets/chat.png"
import searchIcon from "../assets/search.png"

class LoggedNav extends Component {
   

    render() {
        return (
            <div className="hidden md:flex items-center justify-center gap-[26px]">
                <div className="cursor-pointer">
                    <img className="w-[30px] h-auto" src={searchIcon} alt="search"  />
                </div>
                <div className="cursor-pointer">
                    <img className="w-[30px] h-auto" src={chatIcon} alt="chat" />
                </div>
                <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden relative">
                    <Link to="/profile"><img className="w-10 h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={this.props.profilePict} alt="user" /></Link>
                </div>
            </div>
        );
    }
}

export default LoggedNav