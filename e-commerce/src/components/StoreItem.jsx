import axios from "axios";
import { useAuth } from './UseAuth';
import React from 'react';
import '../CSS/store.css'
// import { NavLink } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const StoreItem = ({ id }) => {
    const { authTokens, setAuthTokens } = useAuth()
    const [item, setItem] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchItem = async () => {
            const response = await axios.get(`http://localhost:8000/products/${id}/`);
            setItem(response.data);
            setLoading(false);
        };

        fetchItem();
    }, [id]);

    const handleAddToCart = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/cart/add_to_cart/",
                { product_id: id, quantity: 1 },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log("Error adding item to cart:", error);
        }
    };
    const handleAddToWishlist = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/wishList/wishlist/add/",
                { product_id: id },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                }
            );
            console.log(response.data);
        } catch (error) {
            console.log("Error adding item to wishlist:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const { image, name, description, price, quantity, category } = item;

    return (
        <div className="b">
            <div className="container-fluid">
                {/* <h1 className="cardh" style={{ textAlign: "center", marginTop: "5%" }}>
           
          </h1> */}

                <div className="row justify-content-around pb-3 " style={{ backgroundColor: "white" }}>
                    <div className="card prod-card col-lg-2 col-md-4 col-sm-6 m-1 mt-5" style={{ width: "18rem", height: "600px" }}>
                        <a href="" target="_blank">
                            <img src={`http://localhost:8000${image}`} className="card-img-top cimg" alt="html pic" style={{ height: "320px" }} />
                            <span className="badge badge-secondary" style={{ fontSize: "medium" }}>New</span>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text1">{description}</p>
                            <p className="card-text2">{price} EGP</p>
                            <p className="card-cat">{category}</p>

                            {/* <p className="card-text2">{quantity}</p> */}
                            {/* <button href="#" onClick={handleAddToCart} className="btn">Add to Cart</button> */}
                            <div className="h" style={{ width: "15rem", height: "1px", backgroundColor: "grey" }}></div>

                            <div style={{ display: "flex" }} className="icon-container">
                                <NavLink variant="dark" to={`/products/${id}`}>
                                    {/* <div style={{  width: "40px", height: "40px", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 5px" }}> */}
                                    <i className="fs-4 text-dark bi bi-eye-fill" style={{ fontSize: "3px !important", marginLeft: "50px" }}></i> <span>Quick view</span>
                                    {/* </div> */}

                                </NavLink>
                                <NavLink variant="dark" to={`/wishlist`} onClick={handleAddToWishlist}>
                                    {/* <div style={{ width: "40px", height: "40px", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 5px" }}> */}
                                    <i className="fs-4 text-dark bi bi-suit-heart" style={{ fontSize: "3px !important", marginLeft: "5px" }}></i> wishlist
                                    {/* </div> */}
                                </NavLink>

                            </div>
                            <button href="#" onClick={handleAddToCart} className="button1">Add to Cart</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StoreItem;
// import axios from "axios";
// import { useAuth } from './UseAuth';
// import React from 'react';
// import '../CSS/store.css'
// // import { NavLink } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

// const StoreItem = ({ id }) => {
//     const { authTokens, setAuthTokens } = useAuth()
//     const [item, setItem] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         const fetchItem = async () => {
//             const response = await axios.get(`http://localhost:8000/products/${id}/`);
//             setItem(response.data);
//             setLoading(false);
//         };

//         fetchItem();
//     }, [id]);

//     const handleAddToCart = async () => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/cart/add_to_cart/",
//                 { product_id: id, quantity: 1 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//         } catch (error) {
//             console.log("Error adding item to cart:", error);
//         }
//     };
//     const handleAddToWishlist = async () => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/wishList/wishlist/add/",
//                 { product_id: id },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//         } catch (error) {
//             console.log("Error adding item to wishlist:", error);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     const { image, name, description, price, quantity, category } = item;

//     return (
//         <div className="b">
//             <div className="container-fluid">
//                 {/* <h1 className="cardh" style={{ textAlign: "center", marginTop: "5%" }}>
           
//           </h1> */}

//                 <div className="row justify-content-around pb-3 " style={{ backgroundColor: "white" }}>
//                     <div className="card prod-card col-lg-2 col-md-4 col-sm-6 m-1 mt-5" style={{ width: "18rem", height: "550px" }}>
//                         <a href="" target="_blank">
//                             <img src={`http://localhost:8000${image}`} className="card-img-top cimg" alt="html pic" style={{ height: "320px" }} />
//                             <span className="badge badge-secondary" style={{ fontSize: "medium" }}>New</span>
//                         </a>
//                         <div className="card-body">
//                             <h5 className="card-title">{name}</h5>
//                             <p className="card-text1">{description}</p>
//                             <p className="card-text2">{price} EGP</p>
//                             <p className="card-cat">{category}</p>

//                             {/* <p className="card-text2">{quantity}</p> */}
//                             {/* <button href="#" onClick={handleAddToCart} className="btn">Add to Cart</button> */}
//                             <div className="h" style={{ width: "15rem", height: "1px", backgroundColor: "grey" }}></div>

//                             <div style={{ display: "flex" }} className="icon-container">
//                                 <NavLink variant="dark" to={`/products/${id}`}>
//                                     {/* <div style={{  width: "40px", height: "40px", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 5px" }}> */}
//                                     <i className="fs-4 text-dark bi bi-eye-fill" style={{ fontSize: "3px !important", marginLeft: "50px" }}></i> <span>Quick view</span>
//                                     {/* </div> */}

//                                 </NavLink>
//                                 <NavLink variant="dark" onClick={handleAddToWishlist}>
//                                     {/* <div style={{ width: "40px", height: "40px", borderRadius: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 5px" }}> */}
//                                     <i className="fs-4 text-dark bi bi-suit-heart" style={{ fontSize: "3px !important", marginLeft: "5px" }}></i> wishlist
//                                     {/* </div> */}
//                                 </NavLink>

//                             </div>
//                             <button href="#" onClick={handleAddToCart} className="button1">Add to Cart</button>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default StoreItem;

// import axios from "axios";
// import { useAuth } from './UseAuth';
// import React from 'react';

// const StoreItem = ({ id }) => {
//     const { authTokens, setAuthTokens } = useAuth()
//     const [item, setItem] = React.useState(null);
//     const [loading, setLoading] = React.useState(true);

//     React.useEffect(() => {
//         const fetchItem = async () => {
//             const response = await axios.get(`http://localhost:8000/products/${id}/`);
//             setItem(response.data);
//             setLoading(false);
//         };

//         fetchItem();
//     }, [id]);

//     const handleAddToCart = async () => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/cart/add_to_cart/",
//                 { product_id: id, quantity: 1 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//         } catch (error) {
//             console.log("Error adding item to cart:", error);
//         }
//     };

//     const handleAddToWishlist = async () => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/wishList/wishlist/add/",
//                 { product_id: id },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//         } catch (error) {
//             console.log("Error adding item to wishlist:", error);
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     const { image, name, description, price } = item;

//     return (
//         <div className="">
//             <div className="card" style={{ width: '18rem' }}>
//                 <img
//                     src={`http://localhost:8000${image}`}
//                     className="card-img-top"
//                     alt={description}
//                     style={{ height: "480px", objectFit: "contain" }}
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{name}</h5>
//                     <p className="card-text">{description}</p>
//                     <span>{price} EGP</span>
//                     <a href="#" onClick={handleAddToCart} className="btn btn-primary">Add to Cart</a>
//                     <a href="#" onClick={handleAddToWishlist} className="btn btn-secondary">Add to Wishlist</a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StoreItem;