import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';

function NavBars() {
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Smsalloum
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/store">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="mx-3">
                                {user ? (
                                    <button
                                        onClick={logoutUser}
                                        // className='loginbtn bg-light' style={{ border: "none", margin:"5px" }}
                                        className="btn btn-secondary"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link className="btn btn-secondary" to="/login">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/wishlist">
                                <i className="bi bi-heart"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i className="bi bi-bag"></i>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/store">
                                <i className="bi bi-search-heart"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBars;
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import React, { useContext } from 'react';
// // import 'react-bootstrap';
// import AuthContext from '../context/AuthContext'

// function NavBars() {
//     let { user, logoutUser } = useContext(AuthContext)

//     return (
//         <div>
//             <Navbar style={{ backgroundColor: "#5F7093" }} data-bs-theme="light">
//                 <Container className="me-auto d-flex justify-content-between" style={{ color: "wheat", fontSize: "1rem" }}>

//                     <Nav >
//                         <div> <a
//                             title="call us"
//                             href="tel:+201113852878"
//                             style={{
//                                 textDecoration: "none ",
//                                 color: "wheat", fontSize: ".8rem"

//                             }}
//                         >
//                             <i className="bi bi-telephone-outbound-fill mx-2" ></i> Call Us :
//                             +201113852878
//                         </a></div>
//                         <div><a
//                             title="send mail"
//                             style={{
//                                 textDecoration: "none ",
//                                 color: "wheat", fontSize: ".8rem"
//                             }}
//                             href=" mailto:smssalloum@gmail.com?subject=I need help !&body=can you help me !"
//                         >

//                             <i className="bi bi-envelope-open-fill  mx-3"></i>
//                             Contact us by mail
//                         </a></div>
//                     </Nav>

//                     <Nav>Follow Us :


//                         <a href="https://instagram.com/smsalloum?igshid=MzRlODBiNWFlZA==" className='mx-3' >
//                             <i className="bi bi-instagram " style={{
//                                 textDecoration: "none ",
//                                 color: "wheat", fontSize: ".8rem"

//                             }}></i>
//                         </a>
//                         <a href="#">
//                             <i className="bi bi-facebook" style={{
//                                 textDecoration: "none ",
//                                 color: "wheat", fontSize: ".8rem"

//                             }}></i>
//                         </a>


//                     </Nav>
//                 </Container>
//             </Navbar>

//             <Navbar bg="light" expand="lg" >
//                 <Container >
//                     <Navbar.Brand as={Link} to="/">
//                         Smsalloum
//                     </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                         <Nav className="me-auto">
//                             <Nav.Link as={Link} to="/">
//                                 Home
//                             </Nav.Link>
//                             <Nav.Link as={Link} to="/categories">
//                                 Categories
//                             </Nav.Link>
//                             <Nav.Link as={Link} to="/contact">
//                                 Contact Us
//                             </Nav.Link>
//                         </Nav>
//                         <Nav>

//                             <div className='mx-3'>

//                                 {user ? (
//                                     <button onClick={logoutUser} className='loginbtn bg-light' style={{ border: "none" }}> Logout </button>
//                                 ) : (
//                                     <Link to="/login" >Login</Link>
//                                 )}

//                             </div>

//                             <a href="#">
//                                 <i
//                                     className="bi bi-heart mx-1"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: 'black',
//                                         fontSize: '1rem',
//                                     }}
//                                 ></i>
//                             </a>
//                             <a href="#">
//                                 <i
//                                     className="bi bi-bag mx-1"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: 'black',
//                                         fontSize: '1rem',
//                                     }}
//                                 ></i>
//                             </a>
//                             <a href="#">
//                                 <i
//                                     className="bi bi-search-heart mx-1"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: 'black',
//                                         fontSize: '1rem',
//                                     }}
//                                 ></i>
//                             </a>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// }

// export default NavBars;