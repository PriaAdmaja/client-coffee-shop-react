import { Component } from "react";
import chatIcon from "../assets/chat.png"
import searchIcon from "../assets/search.png"
import profilePict from "../assets/user picture.png"

class LoggedNav extends Component {
    render() {
        return (
            <div class="hidden md:flex items-center justify-center gap-[26px]">
                <div className="cursor-pointer">
                    <img className="w-[30px] h-auto" src={searchIcon} alt="search"  />
                </div>
                <div className="cursor-pointer">
                    <img className="w-[30px] h-auto" src={chatIcon} alt="chat" />
                </div>
                <div class="cursor-pointer w-8 h-8 rounded-full overflow-hidden">
                    <img className="w-[33px] h-auto" src={profilePict} alt="user" />
                </div>
            </div>
        );
    }
}

export default LoggedNav