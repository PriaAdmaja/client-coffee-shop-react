import Logo from "./Logo"

const AuthNav = (props) => {
    return (
        <nav className="flex items-center text select-none px-[5%] sm:px=[30px] xl:px-14 py-3 sm:py-4 md:py-5 lg:py-7 xl:py-14 justify-between bg-white sm:bg-none font-rubik ">
            <Logo />
            <button className="flex items-center justify-center px-3 py-1 w-[100px] lg:w-[150px] h-9 lg:h-11 bg-primary rounded-[50px] border-none text-sm md:text-base font-normal md:font-medium cursor-pointer select-none" id="sign-up-btn" >{props.route}</button>
        </nav>
    )
}

export default AuthNav