import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";


import Footer from "../components/Footer";
import Header from "../components/Header";

import cCard from "../assets/card.png"
import deliv from "../assets/deliv.png"
import bank from "../assets/bank.png"
import { cartAction } from "../redux/slices/cart";

const Checkout = () => {
    const cart = useSelector((state) => state.cart.cartList);
    const dispatch = useDispatch();
    const [modalKey, setModalKey] = useState(null)

    let subTotal = cart.map(data => Math.floor(data.price * data.quantity)).reduce((a, b) => (a + b), 0);
    let tax = Math.floor(10 / 100 * subTotal);
    let shipping = cart.includes(data => data.delivery === 'Door delivery') ? 10000 : 0;
    let total = Math.floor(subTotal + tax + shipping)

    const deleteCart = (idx) => {
        dispatch(cartAction.deleteCart(idx));
        setModalKey(null)
    }

    return (
        <Fragment>
            <Header />
            <main className="bg-bgCheckout bg-center bg-cover bg-fixed font-rubik flex flex-col justify-center items-center py-[5%] lg:text-xl">
                <p className="text-white text-2xl lg:text-4xl xl:text-5xl px-[5%] pb-[5%] font-bold sm:w-4/5 w-full md:px-0 text-left">Checkout your item now!</p>
                <section className="flex flex-col lg:flex-row gap-7 sm:w-4/5 lg:w-full lg:px-[10%] lg:justify-between items-center">
                    <section className="bg-white rounded-[20px] px-[5%] py-[10%] md:py-[5%] w-full">
                        <p className="text-[#362115] font-poppins text-center text-2xl xl:text-4xl font-bold pb-5 xl:pb-10">Order Summary</p>
                        <div className="border-b-gray-400 border-solid border-b mb-4 h-[270px] overflow-scroll">
                            {cart.map((data, i) => {
                                return (
                                    <div className=" pb-4 relative" key={i} >
                                        <div onClick={() => setModalKey(i)} className='flex justify-between items-center'>
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="w-20 h-[90px] overflow-hidden relative rounded-[20px]">
                                                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict} alt="menu" />
                                                </div>
                                                <div>
                                                    <p className="font-poppins text-lg">{data.name}</p>
                                                    <p className="font-poppins text-lg">x {data.quantity}</p>
                                                    <p className="font-poppins text-lg">{data.size === 1 ? 'Regular' : (data.size === 2 ? 'Large' : 'Extra large')}</p>
                                                </div>
                                            </div>
                                            <p className="font-poppins text-lg">IDR {Math.floor(data.price * data.quantity)}</p>
                                        </div>
                                        <div className={`absolute top-0 bg-slate-700/70 w-full h-full justify-center items-center gap-4 flex ${modalKey === i? 'block' : 'hidden'}`}>
                                            <button type="button" className="px-2 py-1 bg-rose-600 rounded-md text-white font-medium cursor-pointer" onClick={() => deleteCart(i)}>Delete</button>
                                            <button type="button" className="px-2 py-1 bg-emerald-600 rounded-md text-white font-medium cursor-pointer" onClick={() => setModalKey(null)}>Cancel</button>
                                        </div>

                                    </div>
                                )
                            })}


                        </div>
                        <div>
                            <div className="flex justify-between items-center pb-1">
                                <p className="font-poppins ">SUB TOTAL</p>
                                <p className="font-poppins ">IDR {subTotal}</p>
                            </div>
                            <div className="flex justify-between items-center pb-1">
                                <p className="font-poppins ">TAX & FEES</p>
                                <p className="font-poppins ">IDR {tax}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="font-poppins ">SHIPPING</p>
                                <p className="font-poppins ">IDR {shipping}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center pt-6">
                            <p className="font-poppins font-bold text-xl">TOTAL</p>
                            <p className="font-poppins font-bold text-xl">IDR {total}</p>
                        </div>
                    </section>
                    <section className="flex justify-center items-center flex-col gap-7 w-full">
                        <div className="font-poppins w-full">
                            <div className="flex items-center justify-between px-[5%] xl:pb-3">
                                <p className="font-poppins font-bold text-white text-lg xl:text-2xl ">Address details</p>
                                <p className="font-poppins font-bold text-white text-sm xl:text-lg cursor-pointer">edit</p>
                            </div>
                            <div className="bg-white rounded-[20px] px-[5%] py-[5%]">
                                <p className="py-2"><b>Delivery</b> to Iskandar Street</p>
                                <hr />
                                <p className="py-2">Km 5 refinery road oppsite re public road, effurun, Jakarta</p>
                                <hr />
                                <p className="py-2">+62 81348287878</p>
                            </div>
                        </div>
                        <div className="w-full font-poppins">
                            <p className="font-poppins font-bold text-white text-lg xl:text-2xl xl:pb-3 px-[5%]">Payment Method</p>
                            <div className="bg-white rounded-[20px] px-[5%] py-[5%]">
                                <label className="flex justify-start items-center gap-3 py-3">
                                    <div className="relative">
                                        <input className="absolute scale-150 top-1 left-1 opacity-0 peer" type={"radio"} name="payment" />
                                        <div className="rounded-full w-5 h-5 border border-[#9f9f9f] peer-checked:border-secondary "></div>
                                        <div className="top-[20%] left-[20%] hidden peer-checked:block w-3 h-3 bg-secondary absolute rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded-[10px] bg-[#F47B0A] flex justify-center items-center">
                                        <img className="w-4 h-3" src={cCard} alt="icon" />
                                    </div>
                                    <p>Card</p>
                                </label>
                                <hr />
                                <label className="flex justify-start items-center gap-3 py-3">
                                    <div className="relative">
                                        <input className="absolute scale-150 top-1 left-1 opacity-0 peer" type={"radio"} name="payment" />
                                        <div className="rounded-full w-5 h-5 border border-[#9f9f9f] peer-checked:border-secondary "></div>
                                        <div className="top-[20%] left-[20%] hidden peer-checked:block w-3 h-3 bg-secondary absolute rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded-[10px] bg-secondary flex justify-center items-center">
                                        <img className="w-auto h-4" src={bank} alt="icon" />
                                    </div>
                                    <p>Bank Account</p>
                                </label>
                                <hr />
                                <label className="flex justify-start items-center gap-3 py-3">
                                    <div className="relative">
                                        <input className="absolute scale-150 top-1 left-1 opacity-0 peer" type={"radio"} name="payment" />
                                        <div className="rounded-full w-5 h-5 border border-[#9f9f9f] peer-checked:border-secondary "></div>
                                        <div className="top-[20%] left-[20%] hidden peer-checked:block w-3 h-3 bg-secondary absolute rounded-full"></div>
                                    </div>
                                    <div className="w-10 h-10 rounded-[10px] bg-[#FFBA33] flex justify-center items-center">
                                        <img className="w-6 h-auto" src={deliv} alt="icon" />
                                    </div>
                                    <p>Cash on Delivery</p>
                                </label>
                            </div>
                        </div>
                        <button className="font-bold text-white bg-secondary rounded-[20px] w-full py-4 hover:bg-white hover:text-secondary" type="button">Confirm and Pay</button>
                    </section>
                </section>
            </main>
            <Footer />
        </Fragment>
    );
}

export default Checkout