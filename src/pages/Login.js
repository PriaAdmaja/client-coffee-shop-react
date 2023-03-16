import { Component } from "react";

class Login extends Component {
    render() {
        return (
            <main>
                <section class="background">
                    <img src="../images/food on table.webp" alt="background">
                </section>
                <section >
                    <nav>
                        <div class="logo">
                            <img src="../images/coffee icon.png" alt="icon" width="30px" height="auto" />
                            <p>Coffee Shop</p>
                        </div>
                        <button id="sign-up-btn" >Sign Up</button>
                    </nav>
                    <section id="modal">
                        <div id="modal-mark">
                            <p id="mark-symbol"></p>
                        </div>
                        <p id="modal-message"></p>
                    </section>
                    <section class="login" >
                        <section>
                            <p class="title">Login</p>
                            <div class="input">
                                <div class="input-field">
                                    <p>Email Address :</p>
                                    <input type="text" placeholder="Enter your email address" id="input-email">
                                </div>
                                <div class="input-field">
                                    <p>Password :</p>
                                    <input type="password" placeholder="Enter your password" id="input-password">
                                </div>
                                <p class="forgot" id="forgot">Forgot Password?</p>
                            </div>
                            <div class="btn-group">
                                <button class="login-btn" id="login-btn">Login</button>
                                <button class="google-btn" id="google-btn">
                                    <img src="../images/google.png" alt="google" width="27px" height="auto">
                                        <p>Login with Google</p>
                                </button>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        );
    }
}