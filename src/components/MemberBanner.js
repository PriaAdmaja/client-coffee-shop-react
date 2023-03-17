import { Component } from "react";

class MemberBanner extends Component {
    render() {
        return (
            <div className="flex flex-col sm:flex-row justify-center md:justify-between text-center w-[90%] md:w-4/5 2xl:w-[1120px] gap-7 items-center  ml-auto mr-auto rounded-xl relative -top-12 md:-top-[70px] xl:-top-24 bg-white py-6 md:py-10 xl:py-14 px-10 md:px-[60px] xl:px-[71px] shadow-xl">
                <div className="w-full md:w-1/2 xl:w-[372px]">
                    <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal pb-[10px] xl:pb-5 ">Get your member card now!</p>
                    <p className="text-sm">Let's join with our member and enjoy the deals.</p>
                </div>
                <button className="bg-primary text-secondary w-44 md:w-[200px] xl:w-[250px] h-10 md:h-[50px] xl:h-[60px] font-bold  text-sm md:text-base flex items-center justify-center border-none rounded-[10px]" id="create-member" >Create Now</button>
            </div>
        );
    }
}

export default MemberBanner