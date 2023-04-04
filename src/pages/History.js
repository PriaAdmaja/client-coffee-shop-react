import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import axios from "axios"
import { useSelector } from "react-redux"

const History = () => {
    const [data, setData] = useState([]);
    const { userId } = useSelector(state => state.userInfo)

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKENDAPI}/history/${userId}`;
        axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res => setData(res.data.data))
            .catch(err => console.log(err))
    }, [userId]);

    return (
        <React.Fragment>
            <Header />
            <main className="bg-center bg-bgHistory bg-cover bg-fixed min-h-screen p-[5%] font-rubik md:py-[10%] md:px-[5%]">
                <h1 className="text-center pb-3 text-bgPrimary text-3xl md:text-5xl font-bold">Let’s see what you have bought!</h1>
                <p className="text-center pb-4 text-bgPrimary">Select item to delete</p>
                <div className="text-right flex justify-end items-center gap-3">
                    <button className="bg-none border-none cursor-pointer font-medium md:font-bold underline font-poppins text-bgPrimary" type="button" >Select All</button>
                    <button className="bg-none border-none cursor-pointer font-medium md:font-bold underline font-poppins text-bgPrimary" type="button" >Delete</button>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-3 md:gap-5 pt-4">
                    {data?.map((data, i) => {
                        console.log(data);
                        return (
                            <section key={i}>
                                <div className="bg-bgPrimary rounded-[20px] flex align-middle justify-center gap-4 py-4 px-7 relative w-[394px] ">
                                    <div className="w-[75px] h-[75px] rounded-full overflow-hidden">
                                        <img src="" alt="menu" />
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-black  text-lg md:text-2xl font-bold font-poppins">Veggie tomato mix</h2>
                                        <p className="font-normal text-xl font-poppins text-[#895537]">IDR {data.grand_total}</p>
                                        <p className="font-normal text-xl font-poppins text-[#895537]">{data.status}</p>
                                    </div>
                                    <div className="absolute right-7 bottom-6">
                                        <input className="cursor-pointer absolute left-1/4 top-1/4 opacity-0 scale-[190%]" type="checkbox" />
                                        <div className="cursor-pointer bg-[#F5F5F8] border-solid border-2 border-secondary w-6 h-6 rounded "></div>
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </div>


            </main>
            <Footer />
        </React.Fragment>
    )
}

export default History