import React from "react";
import "../CSS/contactus.css";
import NavBars from "../components/NavBars";

export default function ContactUs() {
    return (
        <div>
            <NavBars></NavBars>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 my-5">
                        <h2>Contact Us</h2>
                        <hr className="w-75"></hr>
                        <div className="d-flex justify-content-start mb-4">
                            <a
                                className="no-decoration"
                                title="call us"
                                href="tel:+201113852878"
                                target="_blank"
                            >
                                <div className="icon_div">
                                    <i className="bi bi-telephone-outbound-fill i_icon"></i>
                                </div>
                                <span className="icon-para">Call Us: +201113852878</span>
                            </a>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                            <a
                                className="no-decoration"
                                title="send mail"
                                href="mailto:smssalloum@gmail.com?subject=I need help !&body=can you help me !"
                                target="_blank"
                            >
                                <div className="icon_div">
                                    <i className="bi bi-envelope-open-fill i_icon"></i>
                                </div>
                                <span className="icon-para">Contact us by mail</span>
                            </a>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                            <a
                                className="no-decoration"
                                href="https://www.facebook.com/smsaloum?mibextid=LQQJ4d"
                                target="_blank"
                            >
                                <div className="icon_div">
                                    <i className="bi bi-facebook i_icon"></i>
                                </div>
                                <span className="icon-para">Follow us on Facebook</span>
                            </a>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                            <a
                                className="no-decoration"
                                href="https://instagram.com/smsalloum?igshid=MzRlODBiNWFlZA=="
                                target="_blank"
                            >
                                <div className="icon_div">
                                    <i className="bi bi-instagram i_icon"></i>
                                </div>
                                <span className="icon-para">Follow us on Instagram</span>
                            </a>
                        </div>

                        <div className="d-flex justify-content-start mb-4">
                            <a
                                className="no-decoration"
                                title="whatsup"
                                href="https://wa.me/+201113852878?text=hi i need help ..."
                                target="_blank"
                            >
                                <div className="icon_div">
                                    <i className="bi bi-whatsapp i_icon"></i>
                                </div>
                                <span className="icon-para">Send WhatsApp message</span>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 ">
                        <img
                            className="d-block w-100"
                            src="https://i.pinimg.com/564x/29/72/ee/2972eeeb50c7bc2fdb4a320894d561ae.jpg"
                            alt="contact"
                            style={{ maxHeight: "600px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}