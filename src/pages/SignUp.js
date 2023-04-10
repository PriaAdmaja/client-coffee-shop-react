import { Component, React } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Footer from "../components/Footer"
import AuthNav from "../components/AuthNav";
import Alert from "../components/Alert";
import MemberBanner from "../components/MemberBanner";
import { register } from "../utils/apiconnection/auth"

import iconGoogle from "../assets/google.png";
import background from "../assets/images/foot-on-table.webp"


class SignUp extends Component {

    constructor(props) {
        super();
        this.state = {
            formRegister: {
                email: '',
                password: '',
                phoneNumber: ''
            },
            msg: '',
        };
        this.controller = new AbortController();
    }

    handleFormRegister = (event) => {
        let newFormRegister = { ...this.state.formRegister };
        newFormRegister[event.target.name] = event.target.value;
        this.setState({
            formRegister: newFormRegister
        })
    }

    registerNewUser = async () => {
        try {
            if (this.state.formRegister === null) return;
            const { email, password, phoneNumber } = this.state.formRegister
            const result = await register(email, password, phoneNumber, this.controller)
            this.setState.msg = result.data.msg;
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        let token = this.props.userData.token;
        return (
            <section className="font-rubik">
                 {token && (<Navigate to="/" replace={true}/>)}
                <main className="flex justify-center w-full">
                    <section className="text-center flex-1 hidden md:block">
                        <img className="w-full h-auto" src={background} alt="background" />
                    </section>
                    <section className="flex-1 bg-bgAuth md:bg-none bg-center bg-cover bg-fixed" >
                        <AuthNav route="Login" />
                        <Alert />
                        <section className="p-[5%] pb-20 md:p-0">
                            <section className="bg-white p-[10%] md:pb-3 md:pt-0 md:px-8 lg:px-14 rounded-[20px]">
                                <p className="text-2xl xl:text-4xl font-bold text-secondary pb-5 md:pb-5 lg:pb-7 text-center">Sign Up</p>
                                <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8">
                                    <div className="text-left ">
                                        <p className="text-sm lg:text-base xl:text-xl font-bold pb-1 md:pb-2 lg:pb3 text-txtSecondary">Email Address :</p>
                                        <input className="w-full h-auto border-solid border-[1px] border-txtPrimary rounded-[20px] py-3 lg:py-5 xl:py-6 px-5 lg:px-6 xl:px-[30px] text-sm lg:text-xl " onChange={this.handleFormRegister} type="text" name="email" placeholder="Enter your email address" />
                                    </div>
                                    <div className="text-left ">
                                        <p className="text-sm lg:text-base xl:text-xl font-bold pb-1 md:pb-2 lg:pb3 text-txtSecondary">Password :</p>
                                        <input className="w-full h-auto border-solid border-[1px] border-txtPrimary rounded-[20px] py-3 lg:py-5 xl:py-6 px-5 lg:px-6 xl:px-[30px] text-sm lg:text-xl " onChange={this.handleFormRegister} type="password" name="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="text-left ">
                                        <p className="text-sm lg:text-base xl:text-xl font-bold pb-1 md:pb-2 lg:pb3 text-txtSecondary">Phone Number :</p>
                                        <input className="w-full h-auto border-solid border-[1px] border-txtPrimary rounded-[20px] py-3 lg:py-5 xl:py-6 px-5 lg:px-6 xl:px-[30px] text-sm lg:text-xl " onChange={this.handleFormRegister} type="number" name="phoneNumber" placeholder="Enter your password" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 lg:gap-[26px] mt-3 lg:mt-11">
                                    <button onClick={this.registerNewUser} className="w-full h-11 lg:h-14 xl:h-[75px] border-none rounded-[20px] flex justify-center items-center gap-[14px] bg-primary text-secondary text-sm lg:text-xl font-bold" >Sign Up</button>
                                    <button className="w-full h-11 lg:h-14 xl:h-[75px] border-none rounded-[20px] flex justify-center items-center gap-[14px] bg-white text-black text-sm md:text-base lg:text-xl font-bold font-poppins shadow-xl" >
                                        <img className="w-7 h-auto" src={iconGoogle} alt="google" />
                                        <p>Sign Up with Google</p>
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

const mapStateToProps = (state) => {
    return {
        userData: state.userInfo
    }
}

export default connect(mapStateToProps)(SignUp)