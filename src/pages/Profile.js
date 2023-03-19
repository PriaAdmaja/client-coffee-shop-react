import React from "react"
import Footer from "../components/Footer"

const Profile = () => {
    return (
        <React.Fragment>
            <Headers />
            <main>
                <h1>User Profile</h1>
                <section class="cover-profile">
                    <section class="first">
                        <div class="profile">
                            <div>
                                <div class="prof-pict-cover">
                                    <div class="profile-img">
                                        <img src="../images/user picture.png" alt="user picture" width="118px" height="auto"
                                            style="position:relative;top: -10px;"/>
                                    </div>
                                    <div class="edit" style="right: 5px;bottom: 5px;">
                                        <img src="../images/pen.png" alt="pen" width="12px" height="auto"/>
                                    </div>
                                </div>
                                <h3>Zulaikha</h3>
                                <p>zulaikha17@gmail.com</p>
                            </div>
                            <p>Has been ordered 15 products</p>
                            <div class="ambience"></div>
                        </div>
                        <div class="card">
                            <h3>Contacts</h3>
                            <div class="edit" id="edit-contacts" style="right: 10px;top: 10px;width: 47px;height: 47px;">
                                <img src="../images/pen.png" alt="pen" width="18px" height="auto"/>
                            </div>
                            <div class="ambience"></div>
                            <section>
                                <div class="form-area">
                                    <div>
                                        <p>Email address :</p>
                                        <input type="text" placeholder="" id="email"/>
                                    </div>
                                    <div>
                                        <p>Delivery address :</p>
                                        <textarea name="" id="address" cols="30" rows="2"></textarea>
                                       
                                    </div>
                                </div>
                                <div class="form-area">
                                    <div>
                                        <p>Mobile number :</p>
                                        <input type="text" placeholder="" id="phone-numb"/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section class="second">
                        <div class="card ">
                            <h3>Details</h3>
                            <div class="ambience"></div>
                            <div class="edit" id="edit-details" style="right: 10px;top: 10px;width: 47px;height: 47px;">
                                <img src="../images/pen.png" alt="pen" width="18px" height="auto"/>
                            </div>
                            <section>
                                <div class="form-area long">
                                    <div>
                                        <p>Display name :</p>
                                        <input type="text" placeholder="" id="display-name"/>
                                    </div>
                                    <div>
                                        <p>First name :</p>
                                        <input type="text" placeholder="" id="first-name"/>
                                    </div>
                                    <div>
                                        <p>Last name :</p>
                                        <input type="text" placeholder="" id="last-name"/>
                                    </div>
                                </div>
                                <div class="form-area short">
                                    <div>
                                        <p>DD/MM/YYYY :</p>
                                        <input type="date" placeholder="" id="birthday"/>
                                    </div>
                                    <label class="radio-cont">
                                        <input type="radio" name="gender" value="male"/>
                                            <div class="checkmark">
                                                <div></div>
                                                <p>Male</p>
                                            </div>
                                    </label>
                                    <label class="radio-cont">
                                        <input type="radio" name="gender" value="female"/>
                                            <div class="checkmark">
                                                <div></div>
                                                <p>Female</p>
                                            </div>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="button-group">
                            <p>Do you want to save the change?</p>
                            <div>
                                <button class="save-btn" id="save-btn">Save Change</button>
                                <button class="cancel-btn" id="cancel-btn">Cancel</button>
                            </div>
                            <div class="btn-bottom">
                                <button id="edit-password">
                                    <p>Edit password</p>
                                    <p>&gt;</p>
                                </button>
                                <button id="logout">
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