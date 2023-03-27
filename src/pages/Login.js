import { Component, React } from "react";
import Footer from "../components/Footer"
import AuthNav from "../components/AuthNav";
import Alert from "../components/Alert";
import MemberBanner from "../components/MemberBanner";
import axios from "axios";

import iconGoogle from "../assets/google.png";
import background from "../assets/images/foot-on-table.webp"
import { Navigate } from "react-router-dom";


class Login extends Component {
    state = {
        formLogin: {
            email: '',
            password: ''
        },
        login : false
    }

    handleFormLogin = (event) => {
        let newFormLogin = { ...this.state.formLogin };
        newFormLogin[event.target.name] = event.target.value;
        this.setState({
            formLogin: newFormLogin
        })
    }

    login = async () => {
        try {
            const body = this.state.formLogin;
            const controller = new AbortController();
            const url = `${process.env.REACT_APP_BACKENDAPI}/auth/login`;
            const result = await axios.post(url, body, {
                signal: controller.signal
            });
            const { token, profilePict } = result.data;
            localStorage.setItem("cs-token", token);
            localStorage.setItem("profpict", profilePict);
            this.setState({
                login: true
            })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let token = localStorage.getItem("cs-token")
        return (
            <section className="font-rubik">
                {token && (<Navigate to="/" replace={true}/>)}
                <main className="flex justify-center w-full">
                    <section className="text-center flex-1 hidden md:block">
                        <img className="w-full h-auto" src={background} alt="background" />
                    </section>
                    <section className="flex-1 bg-bgAuth md:bg-none bg-center bg-cover bg-fixed" >
                        <AuthNav route="Sign Up" />
                        <Alert />
                        <section className="p-[5%] pb-20 md:p-0">
                            <section className="bg-white p-[10%] md:py-3 md:px-8 rounded-[20px]">
                                <p className="text-2xl xl:text-4xl font-bold text-secondary pb-5 md:pb-5 lg:pb-7 text-center">Login</p>
                                <div className="flex flex-col gap-4 lg:gap-8">
                                    <div className="text-left ">
                                        <p className="text-sm md:text-base lg:text-xl font-bold pb-1 sm:pb-3 text-txtSecondary">Email Address :</p>
                                        <input className="w-full h-auto border-solid border-[1px] border-txtPrimary rounded-[20px] py-3 lg:py-5 xl:py-6 px-5 lg:px-6 xl:px-[30px] text-sm lg:text-xl " onChange={this.handleFormLogin} name="email" type="text" placeholder="Enter your email address" id="input-email" />
                                    </div>
                                    <div className="text-left ">
                                        <p className="text-sm md:text-base lg:text-xl font-bold pb-1 sm:pb-3 text-txtSecondary">Password :</p>
                                        <input className="w-full h-auto border-solid border-[1px] border-txtPrimary rounded-[20px] py-3 lg:py-5 xl:py-6 px-5 lg:px-6 xl:px-[30px] text-sm lg:text-xl " onChange={this.handleFormLogin} type="password" name="password" placeholder="Enter your password" id="input-password" />
                                    </div>
                                    <p className="text-left text-secondary text-sm md:text-base lg:text-xl font-bold cursor-pointer" id="forgot">Forgot Password?</p>
                                </div>
                                <div className="flex flex-col gap-4 md:gap-[26px] mt-3 lg:mt-11">
                                    <button className="w-full h-11 lg:h-14 xl:h-[75px] border-none rounded-[20px] flex justify-center items-center gap-[14px] bg-primary text-secondary text-sm lg:text-xl font-bold" onClick={this.login} >Login</button>
                                    <button className="w-full h-11 lg:h-14 xl:h-[75px] border-none rounded-[20px] flex justify-center items-center gap-[14px] bg-white text-black text-sm md:text-base lg:text-xl font-bold font-poppins shadow-xl" >
                                        <img className="w-7 h-auto" src={iconGoogle} alt="google" />
                                        <p>Login with Google</p>
                                    </button>
                                </div>
                            </section>
                        </section>

                    </section>
                </main>
                <Footer banner={<MemberBanner />} />
            </section>
        );
    }
}

export default Login