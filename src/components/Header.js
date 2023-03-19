import { Component } from "react"
import Logo from "./Logo"
import burger from "../assets/burger.png"
import UnloggedNav from "./UnloggedNav";




class Header extends Component {
    constructor() {
        super()
        this.state = {
            mobileNavDisplay: "hidden"
        }
    }

    checkHandler = () => {
        return this.state.mobileNavDisplay === "hidden" ? this.setState({ mobileNavDisplay: "flex" }) : this.setState({ mobileNavDisplay: "hidden" })
    }

    render() {
        return (
            <section className="m-0 xl:my-0 xl:mx-[150px] p-[5%] xl:py-12 xl:px-[10%] 2xl:w-[1440px] 2xl:mx-0 border-[0.5px] border-solid border-b-[#9F9F9F]">
                <nav className="flex items-center justify-between text-center select-none ">
                    <Logo />
                    <div className="relative inline lg:hidden select-none">
                        <img src={burger} alt="menu" />
                        <input className="absolute left-1/4 top-1/4 scale-[2] opacity-0 cursor-pointer" type="checkbox" onChange={this.checkHandler} />
                    </div>
                    <ul className="hidden lg:flex items-center justify-around list-none p-0 w-[400px] ">
                        <li className="w-1/4">Home</li>
                        <li className="w-1/4">Product</li>
                        <li className="w-1/4">Your Cart</li>
                        <li className="w-1/4">History</li>
                    </ul>
                    <UnloggedNav />
                </nav>
                <section className={`${this.state.mobileNavDisplay} absolute right-0 -bottom-[1px] w-4/5 h-[80vh] bg-[#ffffff] rounded-bl-2xl px-[10%] pt-[30px] pb-10 text-right text-base font-semibold flex-col justify-between z-10 shadow-2xl md:hidden`} >
                    <ul className="flex flex-col gap-6">
                        <li>Home</li>
                        <li>Product</li>
                        <li>Your Cart</li>
                        <li>History</li>
                    </ul>
                    <ul className="flex flex-col gap-8 ">
                        <li><a href="/login/index.html">Login</a></li>
                        <li className="bg-primary rounded-[20px] flex items-center justify-center py-3 px-[10px]"><a href="/sign-up/index.html">Sign Up</a></li>
                    </ul>
                </section>
            </section>
        );
    }
}

export default Header