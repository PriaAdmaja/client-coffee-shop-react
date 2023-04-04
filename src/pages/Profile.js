import React, { useEffect, useState } from "react"

import Footer from "../components/Footer"
import Header from "../components/Header"
import pen from "../assets/images/pen.png"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { userInfoAction } from "../redux/slices/userInfo"
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [contacsInput, setContacsInput] = useState(true)
    const [detailsInput, setDetailsInput] = useState(true)
    const dispatch = useDispatch();
    const {userId, token} = useSelector((state) => state.userInfo);
    const navigate = useNavigate();

    useEffect(() => {
        const url = `${process.env.REACT_APP_BACKENDAPI}/users/${Number(userId)}`
        axios.get(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res => res.data.data.forEach(d => {
            const biodata = {
                email: d.email,
                displayName: d.display_name,
                firstName: d.first_name,
                lastName: d.last_name,
                address: d.address,
                phoneNumber: d.phone_number,
                birthdate: d.birthdate,
                gender: d.gender,
                avatar: d.pict_url
            }
            setProfile(biodata)
    }))
            .catch(err => console.log(err))
    }, [userId])



    const changeValue = (event) => {
        const { name, value } = event.target
        setProfile(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const editBiodata = async () => {
        try {
            const url = `${process.env.REACT_APP_BACKENDAPI}/users`;
            const result = await axios.patch(url, profile, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                }
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        try {
            const url = `${process.env.REACT_APP_BACKENDAPI}/auth/logout`;
            await axios.post(url, {userId}, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                }
            });
            
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(userInfoAction.clearData());
            navigate("/login")
        }
    }

    return (
        <React.Fragment>
            <Header />
            <main className="py-[5%] px-[5%] xl:py-14 bg-bgProfile bg-center bg-cover bg-fixed font-rubik text-txtPrimary">
                <h1 className="py-0 px-[5%] xl:px-[10%] text-white text-3xl font-extrabold pb-5">User Profile</h1>
                <section className="gap-5 xl:gap-[70px] items-stretch text-left flex flex-col justify-between xl:items-center m-5%">
                    <section className="justify-center xl:justify-between flex flex-wrap gap-5 items-center">
                        <div className="w-full xl:w-[310px] text-center h-[358px] bg-white flex flex-col justify-between py-12 px-3 rounded-[10px] relative overflow-hidden">
                            <div>
                                <div className="relative w-fit mx-auto">
                                    <div className="w-[110px] h-[110px] rounded-full overflow-hidden relative mx-auto">
                                        <img className="" src={profile.avatar} alt="avatar" />
                                    </div>
                                    <div className="right-[0px] bottom-[0px] w-8 h-8 rounded-full bg-secondary flex justify-center items-center absolute cursor-pointer" >
                                        <img src={pen} alt="pen" className="w-3 h-auto" />
                                    </div>
                                </div>
                                <h3 className="pt-8 pb-3 text-black text-2xl font-bold">{profile.displayName}</h3>
                                <p className="text-txtPrimary text-sm font-normal ">{profile.email}</p>
                            </div>
                            <p className="text-sm font-normal" >Has been ordered 15 products</p>
                            <div className="w-full left-0 h-3 bg-secondaryabsolute bottom-0"></div>
                        </div>
                        <div className="text-left w-full xl:w-[802px] p-[10%] xl:pt-4 xl:px-8 xl:pb-10 h-auto xl:h-[358px] flex justify-center flex-col bg-white rounded-[10px] relative overflow-hidden">
                            <h3 className="text-xl md:text-2xl font-poppins pb-5 font-bold">Contacts</h3>
                            <div className="right-[10px] top-[10px] w-12 h-12 rounded-full bg-secondary flex justify-center items-center absolute cursor-pointer" onClick={() => contacsInput === true? setContacsInput(false) : setContacsInput(true)} >
                                <img className="w-[18px] h-auto" src={pen} alt="pen" />
                            </div>
                            <div className="w-full left-0 h-3 bg-secondary absolute bottom-0"></div>
                            <section className="flex-wrap flex gap-5 justify-between" >
                                <div className="w-full md:w-[90%] xl:w-[340px] flex flex-col justify-start gap-5">
                                    <div>
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">Email address :</p>
                                        <input className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-none" type="text" placeholder="Input your email" name="email" value={!profile.email ? '' : profile.email} onChange={(e) => changeValue(e)} disabled={contacsInput}/>
                                    </div>
                                    <div>
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">Delivery address :</p>
                                        <textarea className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-none" cols="30" rows="2" name="address" placeholder="Input your address" value={!profile.address ? '' : profile.address} onChange={(e) => changeValue(e)} disabled={contacsInput}></textarea>

                                    </div>
                                </div>
                                <div className="w-full md:w-[90%] xl:w-[340px] flex flex-col justify-start gap-12">
                                    <div>
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">Mobile number :</p>
                                        <input className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-none" type="text" placeholder="Input your phone number" name="phoneNumber" value={!profile.phoneNumber ? '' : profile.phoneNumber} onChange={(e) => changeValue(e)} disabled={contacsInput}/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="justify-center flex-col xl:flex-row flex gap-5 xl:justify-between items-center">
                        <div className="w-full h-auto flex justify-center flex-col bg-white rounded-[10px] relative overflow-hidden p-[10%]">
                            <h3 className="text-xl md:text-2xl font-poppins pb-5 font-bold">Details</h3>
                            <div className="w-full left-0 h-3 bg-secondary absolute bottom-0"></div>
                            <div className="right-[10px] top-[10px] w-12 h-12 rounded-full bg-secondary flex justify-center items-center absolute" onClick={() => detailsInput === true? setDetailsInput(false) : setDetailsInput(true)} >
                                <img className="w-[18px] h-auto " src={pen} alt="pen" />
                            </div>
                            <section className="flex-wrap flex gap-5 justify-between">
                                <div className="w-full md:w-[90%] xl:w-[396px] flex flex-col xl:flex-row flex-wrap justify-start gap-5">
                                    <div >
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">Display name :</p>
                                        <input className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-none" type="text" placeholder="Input your display name" name="displayName" value={!profile.displayName ? '' : profile.displayName} onChange={(e) => changeValue(e)} disabled={detailsInput}/>
                                    </div>
                                    <div >
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">First name :</p>
                                        <input className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-none" type="text" placeholder="Input your first name" name="firstName" value={!profile.firstName ? '' : profile.firstName} onChange={(e) => changeValue(e)} disabled={detailsInput}/>
                                    </div>
                                    <div>
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">Last name :</p>
                                        <input className="border-b-[1px] border-solid border-b-black w-full text-xl font-normal text-black p-[10px] outline-0" type="text" placeholder="Input your display name" name="lastName" value={!profile.lastName ? '' : profile.lastName} onChange={(e) => changeValue(e)} disabled={detailsInput}/>
                                    </div>
                                </div>
                                <div className="w-full xl:w-[217px] flex flex-col justify-start md:w-[90%] gap-6 xl:gap-5 ">
                                    <div>
                                        <p className="text-base md:text-xl font-poppins font-medium text-[#9f9f9f]">DD/MM/YYYY :</p>
                                        <input className="border-solid border-b-[1px] border-b-black w-full text-xl font-normal text-black p-[10px] outline-0" type="date" name="birthdate" defaultValue={!profile.birthdate ? undefined : profile.birthdate} onChange={(e) =>  changeValue(e)} disabled={detailsInput}/>
                                    </div>
                                    <label className=" h-8 text-base md:text-xl text-[#9f9f9f] cursor-pointer relative pl-12 font-poppins font-semibold">
                                        <div className="absolute left-0 flex items-center justify-center gap-5">
                                            <input className="peer absolute cursor-pointer opacity-0 " type="radio" name="gender" value="male" onChange={(e) => changeValue(e)} disabled={detailsInput}/>
                                            <div className="peer-checked:bg-primary peer-checked:border-4 peer-checked:border-solid peer-checked:border-secondary h-[30px] w-[30px] bg-white border-solid border-4 border-[#9f9f9f] rounded-full"></div>
                                            <p className=" peer-checked:text-secondary text-base font-poppins font-bold text-[#9f9f9f]">Male</p>
                                        </div>
                                    </label>
                                    <label className=" h-8 text-base md:text-xl text-[#9f9f9f] cursor-pointer relative pl-12 font-poppins font-semibold">
                                        <div className="absolute left-0 flex items-center justify-center gap-5">
                                            <input className="peer absolute cursor-pointer opacity-0 " type="radio" name="gender" value="female" onChange={(e) => changeValue(e)} disabled={detailsInput}/>
                                            <div className="peer-checked:bg-primary peer-checked:border-4 peer-checked:border-solid peer-checked:border-secondary h-[30px] w-[30px] bg-white border-solid border-4 border-[#9f9f9f] rounded-full"></div>
                                            <p className="peer-checked:text-secondary text-base font-poppins font-bold text-[#9f9f9f]">Female</p>
                                        </div>
                                    </label>


                                </div>
                            </section>
                        </div>
                        <div className="w-full sm:w-[330px] gap-5 sm:gap-9 text-center flex flex-col">
                            <p className="font-poppins text-xl font-bold text-white">Do you want to save the change?</p>
                            <div className="items-center flex flex-col gap-[22px]">
                                <button className="w-[90%] md:w-full h-[60px] rounded-[20px] font-poppins text-base font-bold border-none text-white bg-secondary" onClick={editBiodata}>Save Change</button>
                                <button className="w-[90%] md:w-full h-[60px] rounded-[20px] font-poppins text-base font-bold border-none text-secondary bg-primary" >Cancel</button>
                            </div>
                            <div className="items-center flex flex-col gap-[22px]">
                                <button className="w-[90%] md:w-full py-4 pr-9 pl-6 flex justify-between text-secondary bg-white h-[60px] rounded-[20px] font-poppins text-base font-bold border-none" id="edit-password">
                                    <p>Edit password</p>
                                    <p>&gt;</p>
                                </button>
                                <button className="w-[90%] md:w-full py-4 pr-9 pl-6 flex justify-between text-secondary bg-white h-[60px] rounded-[20px] font-poppins text-base font-bold border-none" onClick={logout}>
                                    <p>Log out</p>
                                    <p>&gt;</p>
                                </button>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Profile