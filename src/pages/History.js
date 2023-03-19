import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const History = () => {
    return (
        <React.Fragment>
            <Header />
            <main class="bg-center bg-bgHistory bg-cover min-h-screen py-28 px-[5%]">
                <h1 class="text-center pb-6 text-bgPrimary text-5xl font-bold">Let’s see what you have bought!</h1>
                <p class="text-center pb-4 text-bgPrimary">Select item to delete</p>
                <div class="text-right delete-btn">
                    <button class="bg-none border-none cursor-pointer font-bold underline font-poppins text-bgPrimary" type="button" id="select">Select All</button>
                    <button class="bg-none border-none cursor-pointer font-bold underline font-poppins text-bgPrimary" type="button" id="delete">Delete</button>
                </div>
                <section class="grid grid-cols-3">
                    <div class="bg-bgPrimary rounded-[20px] flex align-middle justify-center gap-4 py-4 px-7 relative w-[394px] my-5 mx-auto">
                        <div class="w-[75px] h-[75px] rounded-full overflow-hidden">
                            <img src="../images/veggie tomato.webp" alt="menu" width="126px" height="auto" style="position: relative; bottom: 50px; right: 20px;" />
                        </div>
                        <div class="text-center">
                            <h2 class="text-black text-2xl font-bold font-poppins">Veggie tomato mix</h2>
                            <p class="font-normal text-xl font-poppins text-[#895537]">IDR 34.000</p>
                            <p class="font-normal text-xl font-poppins text-[#895537]">Delivered 1</p>
                        </div>
                        <div class="absolute right-7 bottom-6">
                            <input class="cursor-pointer absolute left-1/4 top-1/4 opacity-0 scale-[190%]" type="checkbox" />
                            <div class="cursor-pointer bg-[#F5F5F8] border-solid border-2 border-secondary w-6 h-6 rounded "></div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default History