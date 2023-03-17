import React from "react"

import Footer from "../components/Footer";

const ForgotPassword = () => {
    return (
        <React.Fragment>
            <main className="font-poppins bg-bgForgot bg-center bg-cover flex flex-col justify-center lg:justify-around gap-20  text-center font-bold text-white text-xl lg:text-2xl h-screen select-none">
                <p className="first-line:text-3xl md:first-line:text-4xl lg:first-line:text-5xl">Forgot your password? <br/> Don’t worry, we got your back!</p>
                <section className="flex justify-center items-center flex-col md:flex-row gap-3 md:gap-9">
                    <input className="w-full md:w-1/2 py-4 lg:py-5 xl:py-8 px-5 lg:px-8 xl:px-9 text-xl lg:text-2xl border-none rounded-[20px] text-black focus:outline-none" type="text" placeholder="Enter your email address to get link" id="input-email" />
                        <button className="w-full md:w-fit py-4 lg:py-5 xl:py-8 px-10 lg:px-12 xl:px-20 text-xl lg:text-2xl bg-primary text-secondary flex items-center justify-center border-none rounded-[20px] font-bold " id="send-email" >Send</button>
                </section>
                <section className="gap-3 flex flex-col justify-center items-center">
                    <p>Click here if you didn’t receive any link in 2 minutes</p>
                    <button className="w-full md:w-1/3 py-4 xl:py-8 px-5 text-xl lg:text-2xl bg-secondary border-none rounded-[20px] font-bold text-center" id="resend-link" >Resend Link</button>
                    <p>01:54</p>
                </section>
            </main>
           <Footer />
        </React.Fragment>
    )
}

export default ForgotPassword