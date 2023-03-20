import axios from "axios"
import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKENDAPI}/products`;
        axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then((result) => setProducts(result.data)).catch((err) => console.log(err))
    }, [])

    return (
        <React.Fragment>
            <Header />
            <main className="flex flex-col lg:flex-row font-poppins font-extrabold text-txtPrimary">
                <section className="w-full md:w-[400px] xl:w-[440px] flex items-center lg:items-start justify-center text-center py-7 px-5 border-[0.5px] border-solid border-b-[#797171]">
                    <div>
                        <h2 className="pb-6 text-2xl text-secondary">Promo for you</h2>
                        <p className="pb-6 text-xs font-normal text-black">Coupons will be updated every weeks. Check them out!</p>
                        <div className="mb-7 bg-primary text-black w-[284px] h-[472px] rounded-[20px] text-center relative">
                            <div className="flex flex-col justify-around h-2/3 p-[10%]">
                                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
                                    <img className="" src='' alt="beef spaghetti" />
                                </div>
                                <h3 className="font-extrabold text-xl ">Beef Spaghetti<br />20% OFF</h3>
                                <p className="font-normal text-sm" >Buy 1 Choco Oreo and get 20% off for Beef Spaghetti</p>
                            </div>
                            <div className="border-dashed border-t-[1px] border-black h-1/3 flex flex-col justify-around">
                                <p className="text-base font-normal">COUPON CODE</p>
                                <p className="font-bold text-4xl">FNPR15RG</p>
                                <p className="font-normal text-sm">Valid untill October 10th 2020</p>
                            </div>
                        </div>
                        <button className="bg-secondary text-white py-5 px-20 border-none rounded-[20px] font-bold text-base">Apply Coupon</button>
                        <div className="font-rubik text-sm font-normal text-left pt-28">
                            <p className="font-bold text-sm pb-1">Terms and Condition</p>
                            <ol className="p-0 ">
                                <li>You can only apply 1 coupon per day</li>
                                <li>It only for dine in</li>
                                <li>Buy 1 get 1 only for new user</li>
                                <li>Should make member card to apply coupon</li>
                            </ol>
                        </div>
                    </div>
                </section>
                <section className="w-full md:w-[calc(100%_-_400px)] xl:w-[calc(100%_-_440px)]">
                    <nav className="overflow-scroll p-[5%]">
                        <ul className="w-[450px] sm:w-full list-none flex items-center justify-center p-0">
                            <li className="w-1/5 text-sm h-9 text-center">Favorite Product</li>
                            <li className="w-1/5 text-sm h-9 text-center">Coffee</li>
                            <li className="w-1/5 text-sm h-9 text-center">Non Coffee</li>
                            <li className="w-1/5 text-sm h-9 text-center">Foods</li>
                            <li className="w-1/5 text-sm h-9 text-center">Add-on</li>
                        </ul>
                    </nav>
                    <div className="grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 py-[5%] px-[5%] grid ">
                        {products.data?.map((data, i) => {
                            return (
                                <div className="mx-auto my-10 w-40 h-[212px] rounded-[30px] bg-white text-center shadow-2xl" key={i}>
                                    <div className="relative -top-10 shadow-xl w-[120px] h-[120px] rounded-full overflow-hidden mx-auto ">
                                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict_url} alt="menu" />
                                    </div>
                                    <div className="h-[45%] relative -top-8 flex flex-col justify-between">
                                        <h2>{data.name}</h2>
                                        <p className="text-secondary font-bold">IDR {data.price}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Products