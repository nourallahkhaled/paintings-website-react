import React from 'react';
export function Footer() {
    return (
        <footer style={{
            height: "200px", position: "relative",
            marginTop:"30px",
            bottom: "-2030px;"
        }}>
            <footer className="text-center text-lg-start bg-dark text-light" >
                <f className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href="" className="me-4 link-light">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="" className="me-4 link-light">
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </f>

                <f2 className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3 text-secondary"></i>Sarah Salloum
                                </h6>
                                <p>
                                    Here you can choose the best accsseories to organize your home. 
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Decor</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Accsseories</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Unique styling</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset"></a>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3 text-secondary"></i>Cairo, Egypt</p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    smsalloum@gmail.com
                                </p>
                                <p><i className="fas fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
                            </div>
                        </div>
                    </div>
                </f2>


                <div className="text-center p-4" style={{ backgroundColor: "black" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">SaraSalloum.com</a>
                </div>
            </footer>
        </footer>
)}
export default Footer;