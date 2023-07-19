import React, { useState } from "react";
import NavBars from '../components/NavBars';



export function AboutUs() {
    const [feedbacks, setfeedbacks] = useState([]);
    const [newfeedback, setNewfeedback] = useState("");

    const handleInputChange = (event) => {
        setNewfeedback(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newfeedback.trim()) {
            setfeedbacks([...feedbacks, newfeedback]);
            setNewfeedback("");
        }
    };

    const handlefeedbackDelete = (index) => {
        const newfeedbacks = [...feedbacks];
        newfeedbacks.splice(index, 1);
        setfeedbacks(newfeedbacks);
    };

    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>
            <NavBars></NavBars>
        <div className="container">
            <div className="row my-5 align-items-center">
                <div className="col-lg-6">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="usimg d-block w-100"
                                    src="home2.jpeg"
                                    alt="First slide"
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="usimg d-block w-100"
                                    src="home4.jpeg"
                                    alt="Second slide"
                                />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="scrollable my-4">
                        <h2>SaraSalloum</h2>
                        <p style={{ fontSize: "1.4rem" }}>
                            Sara Salloum is a talented engineer and in her spare time she draws outstanding paintings.She loves drawing and art.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row my-5 align-items-center">
                <div className="col-lg-6">
                    <div className="m-5">
                        <h2>Contact Us</h2>
                        <a
                            title="call us"
                            href="tel:+201113852878"
                            style={{
                                textDecoration: "none ",
                                color: "black",
                                fontSize: "1.4rem",
                                display: "block",
                                marginBottom: "1rem"
                            }}
                        >
                            <i className="bi bi-telephone-outbound-fill mx-2"></i> Call Us : +201113852878
                        </a>
                        <a
                            title="send mail"
                            style={{
                                textDecoration: "none ",
                                color: "black",
                                fontSize: "1.4rem",
                                display: "block",
                                marginBottom: "1rem"
                            }}
                            href=" mailto:maryam.moh198@gmail.com?subject=hi&body=maryam mohamed"
                        >
                            <i className="bi bi-envelope-open-fill text-danger mx-2"></i> Contact us by email
                        </a>
                        <a
                            title="whatsup"
                            style={{
                                textDecoration: "none ",
                                color: "black",
                                fontSize: "1.4rem",
                                display: "block"
                            }}
                            href="https://wa.me/+201113852878?text=hii need help ..."
                        >
                            <i className="bi bi-whatsapp text-success mx-2"></i>Send what's app message
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img
                        className="my-4 w-100"
                        src="home5.jpeg"
                        alt=""
                    />
                </div>
            </div>
            <div className="row my-5 align-items-center">
                <div className="col-lg-6">
                    <div className="m-5">
                        <h2>Feedback</h2>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                className="form-control mb-2"
                                placeholder="Enter your feedback here"
                                value={newfeedback}
                                onChange={handleInputChange}
                            />
                            <button className="btn btn-primary mb-2" type="submit">
                                Add Feedback
                            </button>
                        </form>
                        <ul className="list-group">
                            {feedbacks.map((feedback, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                    {feedback}
                                    <button className="btn-close" onClick={() => handlefeedbackDelete(index)}></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img
                        className="my-4 w-100"
                        src="home6.jpeg"
                        alt=""
                    />
                </div>
            </div>
            <div className="text-center">
                <button className="btn btn-primary mb-2" onClick={smoothScrollToTop}>
                    Back to Top
                </button>
            </div>
            </div>
            </div>
    );
}
export default AboutUs;