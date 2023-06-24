import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loader from "../components/Loader"
import { activePromoAction } from "../redux/slices/activePromo"

const Products = () => {
    const [data, setData] = useState({});
    const [promos, setPromos] = useState([])
    const [showSort, setShowSort] = useState(false)
    const [category, setCategory] = useState('');
    const [showPromo, setShowPromo] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        let getData = true;
        if (getData) {
            setIsLoading(true)
            const urlProducts = `${process.env.REACT_APP_BACKENDAPI}/products${location.search}`;
            const urlPromos = `${process.env.REACT_APP_BACKENDAPI}/promos`;
            axios.get(urlProducts, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then((result) => setData(result.data)).catch((err) => console.log(err))

            axios.get(urlPromos, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then((result) => setPromos(result.data)).catch((err) => console.log(err)).finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [location])

    console.log(location.search);
    const viewProduct = (id) => {
        navigate(`/product/${id}`)
    }

    const showFilter = () => {
        showSort === false ? setShowSort(true) : setShowSort(false)
    }

    const categoryController = (data) => {
        if (data === '') {
            setCategory('');
            navigate('')
            return;
        }
        setCategory(`?category=${data}`);
        navigate(`?category=${data}`);
    }

    const sortController = (sort) => {
        if (sort === '') {
            navigate(`${category}`)
            setShowSort(false)
            return;
        }
        if (category === '') {
            navigate(`?sortBy=${sort}`)
            setShowSort(false)
            return;
        }
        navigate(`${category}&sortBy=${sort}`)
        setShowSort(false)
    }

    const insertPromo = () => {
        dispatch(activePromoAction.submitPromo(promos.data[showPromo]))
    }

    if (isLoading) return (<Loader />)

    return (
        <React.Fragment>
            <Header />
            <main className="flex flex-col lg:flex-row font-rubik font-extrabold text-txtPrimary">
                <section className="w-full md:w-[400px] xl:w-[440px] flex items-center lg:items-start justify-center text-center py-7 px-5 border-[0.5px] border-solid border-b-[#797171]">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="pb-6 text-2xl text-secondary">Promo for you</h2>
                        <p className="pb-6 text-xs font-normal text-black">Coupons will be updated every weeks. Check them out!</p>

                        {promos.data?.filter((d, i, arr) => arr[i] === arr[showPromo]).map((data, i) => {
                            return (
                                <div className={`mb-7 text-black w-[284px] h-[472px] rounded-[20px] text-center relative ${showPromo % 2 === 0 ? 'bg-primary' : 'bg-secondary text-white'
                                    }`} key={i}>
                                    <div className="flex flex-col justify-around h-2/3 p-[10%]">
                                        <div className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto relative">
                                            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict_url} alt="menu" />
                                        </div>
                                        <h3 className="font-extrabold text-xl ">{data.name}<br />{Math.floor(data.discount * 100)}% OFF</h3>
                                        <p className="font-normal text-sm" >{data.description}</p>
                                    </div>
                                    <div className="border-dashed border-t-[1px] border-black h-1/3 flex flex-col justify-around">
                                        <p className="text-base font-normal">COUPON CODE</p>
                                        <p className="font-bold text-4xl">{data.coupon_code}</p>
                                        <p className="font-normal text-sm">Valid until October 10th 2020</p>
                                    </div>
                                    <div className="absolute flex justify-between w-full top-1/2 bottom-1/2">
                                        <button type="button" className={`w-10 h-10 bg-gray-600/70 rounded-md text-xl opacity-20 hover:opacity-100 ${showPromo === 0 ? 'invisible' : 'visible'}`} onClick={() => setShowPromo((prev) => prev - 1)}>&#60;</button>
                                        <button type="button" className={`w-10 h-10 bg-gray-600/70 rounded-md text-xl opacity-20 hover:opacity-100 ${showPromo === promos.data?.length - 1 ? 'invisible' : 'visible'}`} onClick={() => setShowPromo((prev) => prev + 1)}>&#62;</button>
                                    </div>
                                </div>
                            )
                        })}

                        <button className="bg-secondary text-white py-5 px-20 border-none rounded-[20px] font-bold text-base" onClick={insertPromo}>Apply Coupon</button>
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
                <section className="w-full md:w-[calc(100%_-_400px)] xl:w-[calc(100%_-_440px)] relative">
                    <nav className="overflow-scroll lg:overflow-auto px-[5%] py-[3%]">
                        <ul className="w-[450px] sm:w-full list-none flex items-center justify-center p-0 font-normal">
                            <li className={`${location.search === '' && 'font-semibold text-secondary'} w-1/5 text-sm h-9 text-center cursor-pointer`} onClick={() => categoryController('')}>Favorite Product</li>
                            <li className={`${location.search === '?category=coffee' && 'font-semibold text-secondary'} w-1/5 text-sm h-9 text-center cursor-pointer`} onClick={() => categoryController('coffee')}>Coffee</li>
                            <li className={`${location.search === '?category=non_coffee' && 'font-semibold text-secondary'} w-1/5 text-sm h-9 text-center cursor-pointer`} onClick={() => categoryController('non_coffee')}>Non Coffee</li>
                            <li className={`${location.search === '?category=foods' && 'font-semibold text-secondary'} w-1/5 text-sm h-9 text-center cursor-pointer`} onClick={() => categoryController('foods')}>Foods</li>
                            <li className={`${location.search === '?category=add-on' && 'font-semibold text-secondary'} w-1/5 text-sm h-9 text-center cursor-pointer`} onClick={() => navigate("?category=add-on")}>Add-on</li>
                        </ul>
                    </nav>
                    <div className="flex justify-end px-[5%]">
                        <div className="w-24 relative">
                            <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-normal text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={showFilter}>
                                Sort
                                <svg className={`${showSort === true && 'rotate-180'} -mr-1 h-5 w-5 text-gray-400`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <div className={`${showSort === true ? 'block' : 'hidden'} absolute right-0 z-10 mt-1 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" >
                                    <button className="text-gray-700 block px-4 py-2 text-sm font-medium hover:bg-slate-100 w-full text-left" type="button" onClick={() => sortController('')}>A-Z</button>
                                    <button className="text-gray-700 block px-4 py-2 text-sm font-medium hover:bg-slate-100 w-full text-left" type="button" onClick={() => sortController('nameDesc')}>Z-A</button>
                                    <button className="text-gray-700 block px-4 py-2 text-sm font-medium hover:bg-slate-100 w-full text-left" type="button" onClick={() => sortController('cheapest')}>Cheapest</button>
                                    <button className="text-gray-700 block px-4 py-2 text-sm font-medium hover:bg-slate-100 w-full text-left" type="button" onClick={() => sortController('priciest')}>Priciest</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 py-[5%] px-[5%] grid ">
                        {data.data?.map((data) => {
                            return (
                                <div className="mx-auto cursor-pointer my-10 w-40 h-[212px] rounded-[30px] bg-white text-center shadow-2xl" key={data.id} onClick={() => viewProduct(data.id)}>
                                    <div className="relative -top-10 shadow-xl w-[120px] h-[120px] rounded-full overflow-hidden mx-auto ">
                                        <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={data.pict_url} alt="menu" />
                                    </div>
                                    <div className="h-[45%] relative -top-8 flex flex-col justify-between p-1">
                                        <h2 className="text-2xl font-semibold">{data.name}</h2>
                                        <p className="text-secondary font-bold">IDR {Number(data.price).toLocaleString()}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center items-center gap-3 absolute bottom-3 left-1/2 -translate-x-1/2">
                        <button type="button" className={`${data.meta?.prev === null ? 'invisible' : 'visible'} w-10 h-10 flex justify-center items-center text-secondary bg-primary font-semibold rounded-[10px] text-xl`} onClick={() => data.meta.prev && navigate(data.meta?.prev)}>&#60;</button>
                        <button className={`${data.meta?.next === null ? 'invisible' : 'visible'} w-10 h-10 flex justify-center items-center text-secondary bg-primary font-semibold rounded-[10px] text-xl`} type="button" onClick={() => data.meta.next && navigate(data.meta?.next)}>&#62;</button>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Products