import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import coldBrew from "../assets/images/cold brew.png"

const ProductDetail = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="p-[5%] font-rubik text-txtPrimary bg-[#efeeee]">
                <p>Favorite & Promo <b className="font-extrabold"> Cold Brew</b></p>
                <section className="flex flex-col  items-center justify-center gap-7 ">
                    <div className="w-full flex items-center justify-center pt-7 flex-col lg:flex-row">
                        <div className="w-full text-center p-[10px]">
                            <div className="w-72 h-72 rounded-full overflow-hidden relative mx-auto"><img className="w-[550px] h-auto" src={coldBrew} alt="product pict"  /></div>
                            <p className="pt-5 lg:pt-10 text-4xl font-poppins font-[900] text-black">COLD BREW</p>
                            <p className="font-poppins font-medium text-3xl text-black">IDR 30.000</p>
                        </div>
                        <div className="w-full py-[3%] px-[5%] bg-white rounded-[10px]">
                            <p className="text-base md:text-xl xl:text-2xl text-justify pb-5 md:pb-11 text-secondary font-poppins font-normal">Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b></p>
                            <p className="text-base md:text-xl xl:text-2xl text-justify pb-5 md:pb-11 text-secondary font-poppins font-normal">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time
                                instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as
                                48 hours.</p>
                            <div >
                                <p className="text-xl md:text-2xl pb-1 md:pb-6 font-poppins font-bold text-center text-black ">Choose a size</p>
                                <div className="flex items-center justify-center gap-14 ">
                                    <label >
                                        <input className="opacity-0 peer" type="radio" name="size" />
                                        <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white">R</p>
                                    </label>

                                    <label>
                                        <input className="opacity-0 peer" type="radio" name="size" />
                                        <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white">L</p>
                                    </label>
                                    <label >
                                        <input className="opacity-0 peer" type="radio" name="size" />
                                        <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white ">XL</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex gap-5 justify-around flex-col-reverse lg:flex-row items-center">
                        <div className="w-full flex flex-col justify-center items-center gap-6">
                            <button className="w-4/5 lg:w-[388px] h-[70px] lg:h-[85px] text-xl flex items-center justify-center rounded-[20px] font-bold font-poppins border-none text-white bg-secondary">Add to Cart</button>
                            <button className="w-4/5 lg:w-[388px] h-[70px] lg:h-[85px] text-xl flex items-center justify-center rounded-[20px] font-bold font-poppins border-none text-secondary bg-primary">Ask to Staff</button>
                        </div>
                        <div className="gap-5 w-full flex flex-col justify-center items-center">
                            <p className="text-center font-poppins font-bold text-xl md:text-2xl text-black">Choose Delivery Methods</p>
                            <div className="w-full sm:w-[408px] justify-around sm:justify-between flex items-center gap-5">
                                <label >
                                    <input className="opacity-0 peer" type="radio" name="delivery" />
                                    <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Dine in</p>
                                </label>
                                <label >
                                    <input className="opacity-0 peer" type="radio" name="delivery" id="deliv-2" />
                                    <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Door Delivery</p>
                                </label>
                                <label >
                                    <input className="opacity-0 peer" type="radio" name="delivery" id="deliv-3" />
                                    <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Pick Up</p>
                                </label>
                            </div>
                            <div className="flex items-center justify-center gap-7">
                                <p className="font-poppins font-normal text-lg">Set time :</p>
                                <input className="w-auto sm:w-[290px] font-poppins text-sm text-black border-[1px] border-solid border-b-[#9f9f9f] outline-none bg-[#efeeee] py-[5px] px-0" type="text" placeholder="Enter the time you’ll arrived" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative top-0 sm:top-12 mt-10 sm:mt-0 flex-col lg:flex-row w-full lg:w-4/5 flex items-center gap-5 justify-between  mx-auto ">
                    <div className="flex-col sm:flex-row h-auto sm:h-[168px] py-[5%] px-[3%] w-full lg:w-[calc(100%_-_298px)] bg-white rounded-[20px] flex items-center justify-center sm:justify-between gap-11 md:flex-[2]">
                        <div className="w-4/5 gap-5 justify-between sm:justify-center flex items-center">
                            <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
                                <img className="w-[150px]" src={coldBrew} alt="menu"  />
                            </div>
                            <div >
                                <p className="text-xl font-poppins font-extrabold text-black">Cold Brew</p>
                                <p className="text-base font-poppins font-normal text-black">x1 (large)</p>
                               
                            </div>
                        </div>
                        <div className="sm:ml-auto flex items-center justify-center gap-7 md:flex-1">
                            <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]">-</button>
                            <p className="font-poppins font-extrabold text-2xl text-black">2</p>
                            <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]">+</button>
                        </div>
                    </div>
                    <button className="w-4/5 lg:w-[230px] xl:w-[253px] h-[70px] sm:h-[168px] flex items-center justify-center bg-primary border-none rounded-[20px] text-black font-poppins font-bold text-2xl ">CHECKOUT</button>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default ProductDetail