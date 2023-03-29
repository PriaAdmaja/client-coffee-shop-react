import Logo from "./LogoCS";
import twitter from "../assets/twitter.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

const Footer = (props) => {
    return (
        <section className="font-rubik bg-[#f8f8f8]">
            {props.banner}
            <section className='flex pt-14 px-[30px] md:px-14 xl:px-[150px] pb-[10px] md:pb-10 xl:pb-[90px] 2xl:w-[1440px] 2xl:ml=auto 2xl:mr-auto text-sm md:text-base flex-col-reverse sm:flex-row gap-8'>
                <div className="flex flex-col gap-[10px] sm:gap-4 md:gap-5 w-full sm:w-[340px] mr-auto">
                    <Logo />
                    <p className="leading-[30px] text-txtPrimary">Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality
                        beans</p>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center justify-center bg-secondary w-8 h-8 rounded-full cursor-pointer">
                            <img className="w-[33px] h-[33px]" src={fb} alt="facebook" />
                        </div>
                        <div className="flex items-center justify-center bg-secondary w-8 h-8 rounded-full cursor-pointer">
                            <img className="w-[33px] h-[33px]" src={ig} alt="instagram" />
                        </div>
                        <div className="flex items-center justify-center bg-secondary w-8 h-8 rounded-full cursor-pointer">
                            <img className="w-[33px] h-[33px]" src={twitter} alt="twitter" />
                        </div>
                    </div>
                    <p className="leading-[30px] text-[#AFB5C0]">&copy;2020CoffeeStore</p>
                </div>
                <div className="flex gap-[25%] justify-start sm:gap-[60px] md:gap-32">
                    <div className="">
                        <h5 className="text-base md:text-lg font-medium pb-5 text-txtSecondary" >Product</h5>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Download</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Pricing</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Location</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Countries</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Blog</p>
                    </div>
                    <div className="">
                        <h5 className="text-base md:text-lg font-medium pb-5 text-txtSecondary" >Engage</h5>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Coffee Shop</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">FAQ</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">About Us</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Privacy Policy</p>
                        <p className="text-sm md:text-base font-normal pb-[10px] text-txtPrimary hover:text-secondary cursor-pointer">Term of Service</p>
                    </div>

                </div>
            </section>
        </section>
    )
}


export default Footer