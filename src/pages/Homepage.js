import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

import people from "../assets/images/people.png"
import location from "../assets/images/location.png"
import heart from "../assets/images/heart.png"
import teamWork from "../assets/images/team-work.webp"
import hazelnutLatte from "../assets/images/hazelnut latte.png"
import pinkyPromise from "../assets/images/pinky promise.png"
import chickenWings from "../assets/images/chicken wings.png"
import map from "../assets/images/map.png"
import netflix from "../assets/images/netflix.png"
import reddit from "../assets/images/reddit.png"
import amazon from "../assets/images/amazon.png"
import spotify from "../assets/images/spotify.png"
import discord from "../assets/images/discord.png"
import robert from "../assets/images/viezh robert.png"
import star from "../assets/images/star.png"
import kim from "../assets/images/kim young jou.png"
import yessica from "../assets/images/yessica christy.png"

// import "../styles/homepage.modul.css"

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="font-rubik">
                <section className="bg-bgHero bg-cover bg-center bg-fixed text-white p-[5%]">
                    <section className="md:py-10 lg:w-3/5 xl:w-1/2 lg:pb-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-5">Start Your Day with Coffee and Good Meals</h1>
                        <p className="text-base md:text-xl mb-5 lg:mb-8">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                            day with us for a bigger smile!</p>
                        <button className="bg-primary text-secondary w-1/2 md:w-2/6 lg:w-1/2 xl:w-2/5 h-[60px] border-none rounded-[10px] text-base font-bold ">Get Started</button>
                    </section>
                    <section className="flex flex-col md:flex-row justify-around items-center relative h-[400px] md:h-[200px] -bottom-[70px] lg:-bottom-36 p-9 shadow-2xl bg-white rounded-[10px] w-full ">
                        <section className="flex items-center justify-center gap-9">
                            <section className="w-14 h-14 rounded-full bg-primary flex justify-center items-center">
                                <img className="w-4 h-auto" src={people} alt="people" />
                            </section>
                            <section >
                                <h4 className="text-txtSecondary text-xl lg:text-2xl font-extrabold">90+</h4>
                                <p className="text-txtPrimary text-base lg:text-xl">Staff</p>
                            </section>
                        </section>
                        <div className="w-full md:w-[2px] h-[2px] md:h-full bg-[#EEEFF2]"></div>
                        <section className="flex items-center justify-center gap-9">
                            <section className="w-14 h-14 rounded-full bg-primary flex justify-center items-center">
                                <img className="w-4 h-auto" src={location} alt="people" />
                            </section>
                            <section >
                                <h4 className="text-txtSecondary text-xl lg:text-2xl font-extrabold">30+</h4>
                                <p className="text-txtPrimary text-base lg:text-xl">Stores</p>
                            </section>
                        </section>
                        <div className="w-full md:w-[2px] h-[2px] md:h-full bg-[#EEEFF2]"></div>
                        <section className="flex items-center justify-center gap-9">
                            <section className="w-14 h-14 rounded-full bg-primary flex justify-center items-center">
                                <img className="w-7 h-auto" src={heart} alt="people" />
                            </section>
                            <section >
                                <h4 className="text-txtSecondary text-xl lg:text-2xl font-extrabold">800+</h4>
                                <p className="text-txtPrimary text-base lg:text-xl">Customers</p>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="pt-20 lg:pt-40 pb-[5%] lg:flex lg:justify-center lg:items-center lg:gap-5 xl:gap-14 lg:px-[5%]">
                    <img className="w-full lg:w-1/2" src={teamWork} alt="team work" />
                    <section className="px-[5%] lg:px-0 font-rubik flex gap-5 flex-col ">
                        <h3 className="text-3xl md:text-4xl text-txtSecondary font-medium">We Provide Good Coffee and Healthy Meals</h3>
                        <p className="text-txtPrimary ">You can explore the menu that we provide with fun and have their own taste and make
                            your day better.
                        </p>
                        <section>
                            <section className="flex gap-2 items-start justify-start pb-2">
                                <p className="w-5 h-5 bg-[#2FAB73] rounded-full text-xs text-white font-bold flex justify-center items-center">&#10003;</p>
                                <p className="text-txtPrimary text-sm md:text-base">High Quality Beans</p>
                            </section>
                            <section className="flex gap-2 items-start pb-2">
                                <p className="w-5 h-5 bg-[#2FAB73] rounded-full text-xs text-white font-bold flex justify-center items-center">&#10003;</p>
                                <p className="text-txtPrimary text-sm md:text-base">Healthy meals, you can request the ingredients</p>
                            </section>
                            <section className="flex gap-2 items-start pb-2">
                                <p className="w-5 h-5 bg-[#2FAB73] rounded-full text-xs text-white font-bold flex justify-center items-center">&#10003;</p>
                                <p className="text-txtPrimary text-sm md:text-base">Chat with our staff to get better experience for ordering</p>
                            </section>
                            <section className="flex gap-2 items-start pb-2">
                                <p className="w-5 h-5 bg-[#2FAB73] rounded-full text-xs text-white font-bold flex justify-center items-center">&#10003;</p>
                                <p className="text-txtPrimary text-sm md:text-base">Free member card with a minimum purchase of IDR 200.000</p>
                            </section>
                        </section>
                    </section>
                </section>
                <section className="p-[5%] bg-[#f0f0f0]">
                    <h2 className="text-3xl md:text-4xl text-txtSecondary font-medium text-center pb-4">Here is People's Favorite</h2>
                    <p className="text-txtPrimary text-center pb-4">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
                    <section className="overflow-scroll lg:flex justify-center items-center">
                        <section className="pt-20 inline-flex gap-4 lg:gap-20">
                            <section className="w-[280px] h-fit relative bg-white border-2 border-solid border-[#DDDDDD] rounded-[10px] mx-auto pt-[90px] px-[5%] pb-12">
                                <section className="w-36 h-36 rounded-full overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                                    <img src={pinkyPromise} alt="menu" className=" " />
                                </section>
                                <section className="flex flex-col justify-between items-center gap-10">
                                    <div className="">
                                        <h2 className="text-2xl font-medium text-txtSecondary pb-7">Pinky Promise</h2>
                                        <div className="text-sm h-44 overflow-scroll">
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>1 shot of coffee</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Vanilla whipped cream</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Chocolate biscuit</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Strawberry syrup</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>SLiced strawberry on top</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="text-3xl font-medium text-txtSecondary pb-4">IDR 30.000</p>
                                        <button type="button" className="text-center text-secondary border-2 border-solid border-primary rounded-3xl w-full py-2 hover:bg-primary ">Order Now</button>
                                    </div>
                                </section>
                            </section>
                            <section className="w-[280px] h-fit relative bg-white border-2 border-solid border-[#DDDDDD] rounded-[10px] mx-auto pt-[90px] px-[5%] pb-12">
                                <section className="w-36 h-36 rounded-full overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                                    <img src={chickenWings} alt="hazelnut latte" className=" " />
                                </section>
                                <section className="flex flex-col justify-between items-center gap-10">
                                    <div className="">
                                        <h2 className="text-2xl font-medium text-txtSecondary pb-7">Chicken Wings</h2>
                                        <div className="text-sm h-44 overflow-scroll">
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Wings</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Drum sticks</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Mayonaise and lemon</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Hot fried</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Secret recipe</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Buy 1 get 1 only for dine in</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="text-3xl font-medium text-txtSecondary pb-4">IDR 25.000</p>
                                        <button type="button" className="text-center text-secondary border-2 border-solid border-primary rounded-3xl w-full py-2 hover:bg-primary ">Order Now</button>
                                    </div>
                                </section>
                            </section>
                            <section className="w-[280px] h-fit relative bg-white border-2 border-solid border-[#DDDDDD] rounded-[10px] mx-auto pt-[90px] px-[5%] pb-12">
                                <section className="w-36 h-36 rounded-full overflow-hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl">
                                    <img src={hazelnutLatte} alt="menu" className=" " />
                                </section>
                                <section className="flex flex-col justify-between items-center gap-10">
                                    <div className="">
                                        <h2 className="text-2xl font-medium text-txtSecondary pb-7">Hazelnut Latte</h2>
                                        <div className="text-sm h-44 overflow-scroll">
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Hazelnut syrup</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Vanilla whipped cream</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Ice / hot</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Hot fried</p>
                                            </div>
                                            <div className="flex items-start justify-start gap-3 pb-2">
                                                <p className="text-[#2FAB73] font-extrabold">&#10003;</p>
                                                <p>Sliced banana on top</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="text-3xl font-medium text-txtSecondary pb-4">IDR 25.000</p>
                                        <button type="button" className="text-center text-secondary border-2 border-solid border-primary rounded-3xl w-full py-2 hover:bg-primary ">Order Now</button>
                                    </div>
                                </section>
                            </section>

                        </section>
                    </section>
                </section>
                <section className="p-[5%] bg-[#f3f3f3]">
                    <h2 className="text-3xl text-txtSecondary font-medium text-center pb-4">Visit Our Store in the Spot on the Map Below</h2>
                    <p className="text-txtPrimary text-center pb-4">See our store in every city on the spot and spen your good day there. See you soon!</p>
                    <img className="w-full" src={map} alt="map" />
                </section>
                <section className="p-[5%] bg-[#f7f7f7]">
                    <h2 className="text-3xl text-txtSecondary font-medium text-center pb-4">Our Partner</h2>
                    <div className="grayscale opacity-40 flex flex-wrap justify-center gap-3 items-center">
                        <img className="w-44 h-auto" src={netflix} alt="netflix" />
                        <img className="w-44 h-auto" src={reddit} alt="reddit" />
                        <img className="w-44 h-auto" src={amazon} alt="amazon" />
                        <img className="w-44 h-auto" src={discord} alt="discord" />
                        <img className="w-44 h-auto" src={spotify} alt="spotify" />
                    </div>
                </section>
                <section className="p-[5%] bg-[#fcfcfc]">
                    <h2 className="text-3xl text-txtSecondary font-medium text-center pb-4">Loved by Thousands of Happy Customer</h2>
                    <p className="text-txtPrimary text-center pb-4">These are the stories of our customers who have visited us with great pleasure.</p>
                    <div className=" overflow-x-scroll">
                        <div className="inline-flex gap-12 ">
                            <div className="w-[370px] h-56 border-2 border-solid border-[#DDDDDD] rounded-[10px] p-7 bg-white">
                                <div className="flex items-center justify-between pb-5">
                                    <div className="flex items-center justify-between gap-5">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <img className="w-full h-full" src={robert} alt="user-pict" />
                                        </div>
                                        <div className="">
                                            <p className="font-medium text-lg text-txtSecondary">Viezh Robert</p>
                                            <p className="text-[#4F5665] text-sm">Warsaw, Poland</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <p>4.5</p>
                                        <img className="w-3 h-auto" src={star} alt="star" />
                                    </div>
                                </div>
                                <p className="text-base font-medium text-txtPrimary">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the
                                    coffee and meals tho. I like it here!! Very recommended!</p>
                            </div>
                            <div className="w-[370px] h-56 border-2 border-solid border-[#DDDDDD] rounded-[10px] p-7 bg-white">
                                <div className="flex items-center justify-between pb-5">
                                    <div className="flex items-center justify-between gap-5">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <img className="w-full h-full" src={yessica} alt="user-pict" />
                                        </div>
                                        <div className="">
                                            <p className="font-medium text-lg text-txtSecondary">Yessica Christy</p>
                                            <p className="text-[#4F5665] text-sm">Shanxi, China</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <p>4.5</p>
                                        <img className="w-3 h-auto" src={star} alt="star" />
                                    </div>
                                </div>
                                <p className="text-base font-medium text-txtPrimary">"I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte"</p>
                            </div>
                            <div className="w-[370px] h-56 border-2 border-solid border-[#DDDDDD] rounded-[10px] p-7 bg-white">
                                <div className="flex items-center justify-between pb-5">
                                    <div className="flex items-center justify-between gap-5">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <img className="w-full h-full" src={kim} alt="user-pict" />
                                        </div>
                                        <div className="">
                                            <p className="font-medium text-lg text-txtSecondary">Kim Young Jou</p>
                                            <p className="text-[#4F5665] text-sm">Seoul, South Korea</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-3">
                                        <p>4.5</p>
                                        <img className="w-3 h-auto" src={star} alt="star" />
                                    </div>
                                </div>
                                <p className="text-base font-medium text-txtPrimary">"This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!"</p>
                            </div>

                        </div>
                    </div>
                    <div className="pt-8 relative">
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-4 h-4 bg-[#DDE0E4] rounded-full"></div>
                            <div className="w-4 h-4 bg-[#DDE0E4] rounded-full"></div>
                            <div className="w-4 h-4 bg-[#DDE0E4] rounded-full"></div>
                            <div className="w-4 h-4 bg-[#DDE0E4] rounded-full"></div>
                        </div>
                        <div className="absolute w-full top-5">
                            <p className="absolute left-0 w-10 h-10 rounded-full border-2 border-solid border-secondary bg-white flex justify-center items-center text-3xl text-secondary hover:text-white hover:bg-secondary">&#60;</p>
                            <p className="absolute right-0 w-10 h-10 rounded-full border-2 border-solid border-secondary bg-white flex justify-center items-center text-3xl text-secondary hover:text-white hover:bg-secondary">&#62;</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

        </React.Fragment>
    )
}

export default Homepage