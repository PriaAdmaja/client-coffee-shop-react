import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"

import people from "../assets/images/people.png"
import location from "../assets/images/location.png"
import heart from "../assets/images/heart.png"
import teamWork from "../assets/images/team-work.webp"
import hazelnutLatte from "../assets/images/hazelnut latte.png"
import pinkyPromise from "../assets/images/pinky promise.png"
import chickenWings from "../assets/images/chicken wings.png"
import map from "../assets/images/map.png"
import netflix from "../assets/images/netflix.png"
import reddit from "../assets/images/reddit.png"
import amazon from "../assets/images/amazon.png"
import spotify from "../assets/images/spotify.png"
import discord from "../assets/images/discord.png"
import robert from "../assets/images/viezh robert.png"
import star from "../assets/images/star.png"
import kim from "../assets/images/kim young jou.png"
import yessica from "../assets/images/yessica christy.png"

// import "../styles/homepage.modul.css"

const Homepage = () => {
    return (
        <React.Fragment>
            <Header />
            <main>
        <section className="opening bg-bgHero">
            <section className="start">
                <h2 className="start-title">Start Your Day with Coffee and Good Meals</h2>
                <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your
                    day with us for a bigger smile!</p>
                <button className="main-btn">Get Started</button>
            </section>
            <section className="statistic">
                <section className="stat">
                    <section className="icon-stat">
                        <img className="w-4 h-auto" src={people} alt="people" />
                    </section>
                    <section className="icon-desc">
                        <h4>90+</h4>
                        <p>Staff</p>
                    </section>
                </section>
                <span className="v1"></span>
                <section className="stat">
                    <section className="icon-stat">
                        <img className="w-[14px] h-auto" src={location} alt="location"/>
                    </section>
                    <section className="icon-desc">
                        <h4>30+</h4>
                        <p>Stores</p>
                    </section>
                </section>
                <span className="v1"></span>
                <section className="stat">
                    <section className="icon-stat">
                        <img className="w-7 h-auto" src={heart} alt="heart" />
                    </section>
                    <section className="icon-desc">
                        <h4>800+</h4>
                        <p>Customers</p>
                    </section>
                </section>
            </section>
        </section>
        <section className="value">
            <img className="w-[573px]" src={teamWork} alt="team work"/>
            <section>
                <h3 className="main-title">We Provide Good Coffee and Healthy Meals</h3>
                <p className="main-desc">You can explore the menu that we provide with fun and have their own taste and make
                    your day better.
                </p>
                <section>
                    <section className="value-point">
                        <p className="check">&#10003;</p>
                        <p>High Quality Beans</p>
                    </section>
                    <section className="value-point">
                        <span className="check">&#10003;</span>
                        <p>Healthy meals, you can request the ingredients</p>
                    </section>
                    <section className="value-point">
                        <span className="check">&#10003;</span>
                        <p>Chat with our staff to get better experience for ordering</p>
                    </section>
                    <section className="value-point">
                        <span className="check">&#10003;</span>
                        <p>Free member card with a minimum purchase of IDR 200.000</p>
                    </section>
                </section>
            </section>
        </section>
        <section className="menu-favorite">
            <h2 className="main-title">Here is People's Favorite</h2>
            <p className="main-desc">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
            <section>
                <section className="menu-card">
                    <section className="images-cover">
                        <img src={hazelnutLatte} alt="hazelnut latte" className="images-menu w-[250px] h-auto " />
                    </section>
                    <section className="card-desc">
                        <div className="card-detail">
                            <h2>Hazelnut Latte</h2>
                            <div className="menu-desc">
                                <div>
                                    <span>&#10003;</span>
                                    <p>Hazelnut Syrup</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Vanilla Whipped Cream</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Ice / Hot</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Sliced Banana on Top</p>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <p>IDR 25.000</p>
                            <button>Order Now</button>
                        </div>
                    </section>

                </section>
                <section className="menu-card">
                    <section className="images-cover">
                        <img src={pinkyPromise} alt="menu" className="images-menu w-[217px] h-auto" />
                    </section>
                    <section className="card-desc">
                        <div className="card-detail">
                            <h2>Pinky Promise</h2>
                            <div className="menu-desc">
                                <div>
                                    <span>&#10003;</span>
                                    <p>1 Shot of coffee</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Vanilla Whipped Cream</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Chocolate Biscuits</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Strawberry Syrup</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Sliced strawberry on Top</p>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <p>IDR 30.000</p>
                            <button>Order Now</button>
                        </div>
                    </section>

                </section>
                <section className="menu-card">
                    <section className="images-cover">
                        <img src={chickenWings} alt="menu" className="images-menu w-[150px] h-auto" />
                    </section>
                    <section className="card-desc">
                        <div className="card-detail">
                            <h2>Chicken Wings</h2>
                            <div className="menu-desc">
                                <div>
                                    <span>&#10003;</span>
                                    <p>Wings</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Drum Sticks</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Mayonaise and Lemon</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Hot Fried</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Secret Recipe</p>
                                </div>
                                <div>
                                    <span>&#10003;</span>
                                    <p>Buy 1 Get 1 only for Dine in</p>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <p>IDR 40.000</p>
                            <button>Order Now</button>
                        </div>
                    </section>

                </section>
            </section>
        </section>
        <section className="map">
            <h2 className="main-title">Visit Our Store in the Spot on the Map Below</h2>
            <p className="main-desc">See our store in every city on the spot and spen your good day there. See you soon!</p>
            <img src={map} alt="map"/>
        </section>
        <section className="partner">
            <h2 className="main-title">Our Partner</h2>
            <div>
                <img src={netflix} alt="netflix"/>
                <img src={reddit} alt="reddit"/>
                <img src={amazon} alt="amazon"/>
                <img src={discord} alt="discord"/>
                <img src={spotify} alt="spotify"/>
            </div>
        </section>
        <section className="review">
            <h2 className="main-title">Loved by Thousands of Happy Customer</h2>
            <p className="main-desc">These are the stories of our customers who have visited us with great pleasure.</p>
            <div className="review-content">


                <div className="card-container">
                    <div className="review-card">
                        <div className="user">
                            <div className="user-detail">
                                <div className="user-pict">
                                    <img className="w-full h-full" src={robert} alt="user-pict" width="100%" height="100%"/>
                                </div>
                                <div className="user-data">
                                    <p className="user-name">Viezh Robert</p>
                                    <p className="user-address">Warsaw, Poland</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>4.5</p>
                                <img className="w-3 h-auto" src={star} alt="star" />
                            </div>
                        </div>
                        <p className="testi">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the
                            coffee and meals tho. I like it here!! Very recommended!</p>
                    </div>
                    <div className="review-card">
                        <div className="user">
                            <div className="user-detail">
                                <div className="user-pict">
                                    <img src={yessica} alt="user-pict" width="100%" height="100%"/>
                                </div>
                                <div className="user-data">
                                    <p className="user-name">Yessica Christy</p>
                                    <p className="user-address">Shanxi, China</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>4.5</p>
                                <img className="w-3 h-auto" src={star} alt="star" />
                            </div>
                        </div>
                        <p className="testi">“I like it because I like to travel far and still can make my day better just
                            by
                            drinking their Hazelnut Latte</p>
                    </div>
                    <div className="review-card">
                        <div className="user">
                            <div className="user-detail">
                                <div className="user-pict">
                                    <img src={kim} alt="user-pict" width="100%" height="100%"/>
                                </div>
                                <div className="user-data">
                                    <p className="user-name">Kim Young Jou</p>
                                    <p className="user-address">Seoul, South Korea</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>4.5</p>
                                <img className="w-3 h-auto" src={star} alt="star" />
                            </div>
                        </div>
                        <p className="testi">“This is very unusual for my taste, I haven’t liked coffee before but their
                            coffee
                            is the best! and yup, you have to order the chicken wings, the best in town!</p>
                    </div>
                    <div className="review-card">
                        <div className="user">
                            <div className="user-detail">
                                <div className="user-pict">
                                    <img src={robert} alt="user-pict" width="100%" height="100%"/>
                                </div>
                                <div className="user-data">
                                    <p className="user-name">Viezh Robert</p>
                                    <p className="user-address">Warsaw, Poland</p>
                                </div>
                            </div>
                            <div className="rate">
                                <p>4.5</p>
                                <img className="w-3 h-auto" src={star} alt="star" />
                            </div>
                        </div>
                        <p className="testi">“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the
                            coffee and meals tho. I like it here!! Very recommended!</p>
                    </div>
                </div>
            </div>
            <div className="card-nav">
                <div className="dot">
                    <div className="dot-base dot-active"></div>
                    <div className="dot-base"></div>
                    <div className="dot-base"></div>
                    <div className="dot-base"></div>
                </div>
                <div className="arrow">
                    <p>&#60;</p>
                    <p>&#62;</p>
                </div>
            </div>
        </section>
    </main>
            <Footer />

        </React.Fragment>
    )
}

export default Homepage