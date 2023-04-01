import React, { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { cartAction } from "../redux/slices/cart"

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.pathname.split('/').reverse()[0]
    const [productData, setProductData] = useState([])
    const [size, setSize] = useState('');
    const [delivery, setDelivery] = useState('');
    // const [notes, setNotes] = useState('');
    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartList);

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKENDAPI}/products/${id}`;
        axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(result => setProductData(result.data)).catch((err) => console.log(err));

    }, [id])
    const addQty = () => {
        setQuantity(prev => prev + 1)
    }

    const subQty = () => {
        if (quantity === 1) {
            return
        }
        setQuantity(prev => prev - 1)
    }

    const addCart = () => {
        const cart = {
            productId: id,
            size,
            quantity,
            // notes,
            delivery
        }
        dispatch(cartAction.submitCart(cart))
    }

    return (
        <React.Fragment>
            <Header />
            {productData.data?.map((data, i) => {
                
                return (
                    <main className="p-[5%] font-rubik text-txtPrimary bg-[#efeeee]" key={i}>
                        <p>Favorite & Promo <b className="font-extrabold">{">"} {data.name}</b></p>
                        <section className="flex flex-col  items-center justify-center gap-7 ">
                            <div className="w-full flex items-center justify-center pt-7 flex-col lg:flex-row">
                                <div className="w-full text-center p-[10px]">
                                    <div className="w-72 h-72 rounded-full overflow-hidden relative mx-auto"><img className="w-[550px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict_url} alt="product pict" /></div>
                                    <p className="pt-5 lg:pt-10 text-4xl font-poppins font-[900] text-black">{data.name}</p>
                                    <p className="font-poppins font-medium text-3xl text-black">IDR {data.price}</p>
                                </div>
                                <div className="w-full py-[3%] px-[5%] bg-white rounded-[10px]">
                                    <p className="text-base md:text-xl xl:text-2xl text-justify pb-5 md:pb-11 text-secondary font-poppins font-normal">Delivery only on <b>Monday to friday</b> at <b>1 - 7 pm</b></p>
                                    <p className="text-base md:text-xl xl:text-2xl text-justify pb-5 md:pb-11 text-secondary font-poppins font-normal">{data.description}</p>
                                    <div >
                                        <p className="text-xl md:text-2xl pb-1 md:pb-6 font-poppins font-bold text-center text-black ">Choose a size</p>
                                        <div className="flex items-center justify-center gap-14 ">
                                            <label >
                                                <input className="opacity-0 peer" type="radio" name="size" value="R" checked onChange={(e) => setSize(e.target.value)} />
                                                <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white">R</p>
                                            </label>
                                            <label>
                                                <input className="opacity-0 peer" type="radio" name="size" value="L" onChange={(e) => setSize(e.target.value)} />
                                                <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white">L</p>
                                            </label>
                                            <label >
                                                <input className="opacity-0 peer" type="radio" name="size" value="XL" onChange={(e) => setSize(e.target.value)} />
                                                <p className="w-12 md:w-[70px] h-12 md:h-[70px] text-2xl md:text-4xl rounded-full bg-primary text-secondary font-poppins font-bold flex items-center justify-center select-none peer-checked:bg-secondary peer-checked:text-white ">XL</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex gap-5 justify-around flex-col-reverse lg:flex-row items-center">
                                <div className="w-full flex flex-col justify-center items-center gap-6">
                                    <button className="w-4/5 lg:w-[388px] h-[70px] lg:h-[85px] text-xl flex items-center justify-center rounded-[20px] font-bold font-poppins border-none text-white bg-secondary" onClick={addCart}>Add to Cart</button>
                                    <button className="w-4/5 lg:w-[388px] h-[70px] lg:h-[85px] text-xl flex items-center justify-center rounded-[20px] font-bold font-poppins border-none text-secondary bg-primary">Ask to Staff</button>
                                </div>
                                <div className="gap-5 w-full flex flex-col justify-center items-center">
                                    <p className="text-center font-poppins font-bold text-xl md:text-2xl text-black">Choose Delivery Methods</p>
                                    <div className="w-full sm:w-[408px] justify-around sm:justify-between flex items-center gap-5">
                                        <label >
                                            <input className="opacity-0 peer" type="radio" name="delivery" value="Dine in" onChange={(e) => setDelivery(e.target.value)} />
                                            <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Dine in</p>
                                        </label>
                                        <label >
                                            <input className="opacity-0 peer" type="radio" name="delivery" value="Door delivery" onChange={(e) => setDelivery(e.target.value)} />
                                            <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Door Delivery</p>
                                        </label>
                                        <label >
                                            <input className="opacity-0 peer" type="radio" name="delivery" value="Pick up" onChange={(e) => setDelivery(e.target.value)} />
                                            <p className="py-3 px-4 text-sm sm:text-base font-normal sm:font-bold bg-[#f4f4f8] text-[#bababa] border-[1px] border-solid border-[#bababa] rounded-[10px] peer-checked:bg-secondary peer-checked:text-white">Pick Up</p>
                                        </label>
                                    </div>
                                    {/* <div className="flex items-center justify-center gap-7">
                                        <p className="font-poppins font-normal text-lg">Set time :</p>
                                        <input className="w-auto sm:w-[290px] font-poppins text-sm text-black border-[1px] border-solid border-b-[#9f9f9f] outline-none bg-[#efeeee] py-[5px] px-0" type="text" placeholder="Enter the time you’ll arrived" onChange={(e) => setNotes(e.target.value)}/>
                                    </div> */}
                                    <div className=" flex items-center justify-center gap-7 md:flex-1">
                                        <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]" onClick={subQty}>-</button>
                                        <p className="font-poppins font-extrabold text-2xl text-black">{quantity}</p>
                                        <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]" onClick={addQty}>+</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="relative top-0 sm:top-12 mt-10 sm:mt-0 flex-col lg:flex-row w-full lg:w-4/5 flex items-center gap-5 justify-between  mx-auto ">
                            <div className="flex-col sm:flex-row h-auto sm:h-[168px] py-[5%] px-[3%] w-full lg:w-[calc(100%_-_298px)] bg-white rounded-[20px] flex items-center justify-center sm:justify-between gap-11 md:flex-[2]">
                                <div className="w-4/5 gap-5 justify-between sm:justify-center flex items-center">
                                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden relative">
                                        <img className="w-[150px] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict_url} alt="menu" />
                                    </div>
                                    <div >
                                        <p className="text-xl font-poppins font-extrabold text-black">{data.name}</p>
                                        {cart.filter((data) => data.productId === id).map((data, i) => {
                                            return (
                                                <p className="text-base font-poppins font-normal text-black" key={i}>{data.quantity}x {data.size === 'R'?  'Regular' : (data.size === 'L' ? 'Large' : 'Extra large')}</p>

                                            )
                                        })}

                                    </div>
                                </div>
                                {/* <div className="sm:ml-auto flex items-center justify-center gap-7 md:flex-1">
                                    <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]" onClick={subQty}>-</button>
                                    <p className="font-poppins font-extrabold text-2xl text-black">{quantity}</p>
                                    <button className="w-10 h-10 rounded-full bg-[#e7aa3685] border-none font-extrabold text-4xl text-[#6A4029]" onClick={addQty}>+</button>
                                </div> */}
                            </div>
                            <button className="w-4/5 lg:w-[230px] xl:w-[253px] h-[70px] sm:h-[168px] flex items-center justify-center bg-primary border-none rounded-[20px] text-black font-poppins font-bold text-2xl " onClick={() => navigate("/transaction")}>Checkout</button>
                        </section>
                    </main>
                )
            })}
            <Footer />
        </React.Fragment>
    )
}

export default ProductDetail