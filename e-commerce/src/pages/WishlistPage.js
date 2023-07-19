// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../components/UseAuth';
// import axios from "axios";
// import { NavLink } from 'react-router-dom';
// import '../CSS/wishlist.css';

// const WishlistPage = (id) => {
//     const { authTokens } = useAuth();
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const getWishlistItems = async () => {
//         try {
//             const response = await fetch(`http://127.0.0.1:8000/wishList/wishlist/`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${authTokens.access}`,
//                 },
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setWishlistItems(data);
//             } else if (response.status === 401) {
//                 // Handle unauthorized access
//             } else {
//                 throw new Error(`${response.status} ${response.statusText}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         if (authTokens && authTokens.access) {
//             getWishlistItems();
//         }
//     }, [authTokens]);

//     const handleRemoveWishlist = async (itemId) => {
//         try {
//             const response = await fetch(`http://127.0.0.1:8000/wishList/wishlist/remove/${itemId}/`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${authTokens.access}`,
//                 },
//             });
//             if (response.ok) {
//                 setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
//             } else if (response.status === 401) {
//                 // Handle unauthorized access
//             } else {
//                 throw new Error(`${response.status} ${response.statusText}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

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

//     return (
//         <div className='wishlist-body'>
//             <div className='container'>
//                 <h1 className='wishlist-heading'>My WishList</h1>
//                 {wishlistItems.length === 0 ? (
//                     <p className='wishlist-empty'>Your wishlist is empty.</p>
//                 ) : (
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th className='table-head'>Product Name</th>
//                             <th className='table-head'>Description</th>
//                             <th className='table-head'>Image</th>
//                             <th className='table-head'></th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {wishlistItems.map(item => (
//                             <tr key={item.id}>
//                                 <td className='pname'>{item.product.name}</td>
//                                 <td className='pname'>{item.product.description}</td>
//                                 <td className='pname'><img
//                                     src={`http://localhost:8000${item.product.image}`}
//                                     className="card-img-top"
//                                     style={{ height: "150px", objectFit: "contain", marginRight: "-290px" }}
//                                 /></td>
//                                 <td>
//                                     <button className='btn' onClick={() => handleRemoveWishlist(item.id)}><i className="trash bi bi-trash3-fill"></i></button>
//                                     <NavLink onClick={handleAddToCart} to={`/cart/${item.product.id}`} className="btn btn-primary">Add to Cart</NavLink>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default WishlistPage;


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../components/UseAuth';
// import axios from "axios";
// import { NavLink } from 'react-router-dom';
// import '../CSS/wishlist.css';

// const WishlistPage = () => {
//     const { authTokens } = useAuth();
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const getWishlistItems = async () => {
//         try {
//             const response = await axios.get(
//                 "http://127.0.0.1:8000/wishList/wishlist/",
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             setWishlistItems(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         if (authTokens && authTokens.access) {
//             getWishlistItems();
//         }
//     }, [authTokens]);

//     const handleRemoveWishlist = async (itemId) => {
//         try {
//             const response = await axios.delete(
//                 `http://127.0.0.1:8000/wishList/wishlist/remove/${itemId}/`,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             if (response.status === 204) {
//                 setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
//             } else if (response.status === 401) {
//                 // Handle unauthorized access
//             } else {
//                 throw new Error(`${response.status} ${response.statusText}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleAddToCart = async (productId) => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/cart/add_to_cart/",
//                 { product_id: productId, quantity: 1 },
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

//     return (
//         <div className='wishlist-body'>
//             <div className='container'>
//                 <h1 className='wishlist-heading'>My WishList</h1>
//                 {wishlistItems.length === 0 ? (
//                     <p className='wishlist-empty'>Your wishlist is empty.</p>
//                 ) : (
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th className='table-head'>Product Name</th>
//                                 <th className='table-head'>Description</th>
//                                 <th className='table-head'>Image</th>
//                                 <th className='table-head'></th>
//                                 <th className='table-head'></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {wishlistItems.map(item => (
//                                 <tr key={item.id}>
//                                     <td className='product-name'>{item.product.name}</td>
//                                     <td className='product-name'>{item.product.description}</td>
//                                     <td className='product-name'><img
//                                         src={`http://localhost:8000${item.product.image}`}
//                                         className="card-img-top"
//                                         style={{ height: "150px", objectFit: "contain", marginLeft: "-40px", marginTop: "5px" }}
//                                     /></td>
//                                     <td>
//                                         <button className='btn' onClick={() => handleRemoveWishlist(item.id)}><i className="trash bi bi-trash3-fill"></i></button>
//                                         {/* <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn btn-success">Add to Cart</NavLink> */}
//                                     </td>
//                                     <td>
//                                         <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn wishlist">Add to Cart</NavLink>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };
// export default WishlistPage;


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../components/UseAuth';
// import axios from "axios";
// import { NavLink, useHistory, useParams } from 'react-router-dom';
// import '../CSS/wishlist.css';

// const WishlistPage = () => {
//     const { authTokens } = useAuth();
//     const [wishlistItems, setWishlistItems] = useState([]);
//     const history = useHistory();

//     const getWishlistItems = async () => {
//         try {
//             const response = await axios.get(
//                 "http://127.0.0.1:8000/wishList/wishlist/",
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             setWishlistItems(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         if (authTokens && authTokens.access) {
//             getWishlistItems();
//         }
//     }, [authTokens]);

//     const handleRemoveWishlist = async (itemId) => {
//         try {
//             const response = await axios.delete(
//                 `http://127.0.0.1:8000/wishList/wishlist/remove/${itemId}/`,
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             if (response.status === 204) {
//                 setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
//             } else if (response.status === 401) {
//                 // Handle unauthorized access
//             } else {
//                 throw new Error(`${response.status} ${response.statusText}`);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleAddToCart = async (productId) => {
//         try {
//             const response = await axios.post(
//                 "http://127.0.0.1:8000/cart/add_to_cart/",
//                 { product_id: productId, quantity: 1 },
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${authTokens.access}`,
//                     },
//                 }
//             );
//             console.log(response.data);
//             // Navigate to cart page and refresh cart items
//             history.push(`/cart/${productId}`);
//         } catch (error) {
//             console.log("Error adding item to cart:", error);
//         }
//     };

//     return (
//         <div className='wishlist-body'>
//             <div className='container'>
//                 <h1 className='wishlist-heading'>My WishList</h1>
//                 {wishlistItems.length === 0 ? (
//                     <p className='wishlist-empty'>Your wishlist is empty.</p>
//                 ) : (
//                     <div className="card-group">
//                         {wishlistItems.map(item => (
//                             <div className="card" key={item.id}>
//                                 <div className="card-img-container">
//                                     <img
//                                         src={`http://localhost:8000${item.product.image}`}
//                                         className="card-img-top"
//                                         alt={item.product.name}
//                                     />
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.product.name}</h5>
//                                     <p className="card-text">{item.product.description}</p>
//                                     <div className="btn-group" role="group" aria-label="Action buttons">
//                                         <button className='btn' onClick={() => handleRemoveWishlist(item.id)}><i className="trash bi bi-trash3-fill"></i></button>
//                                         <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn wishlist">Add to Cart</NavLink>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default WishlistPage;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/UseAuth';
import axios from "axios";
import { NavLink } from 'react-router-dom';
import '../CSS/wishlist.css';
import NavBars from '../components/NavBars';



const WishlistPage = () => {
    const { authTokens } = useAuth();
    const [wishlistItems, setWishlistItems] = useState([]);
    const getWishlistItems = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/wishList/wishlist/",
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                }
            );
            setWishlistItems(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        if (authTokens && authTokens.access) {
            getWishlistItems();
        }
    }, [authTokens]);

    const handleRemoveWishlist = async (itemId) => {
        try {
            const response = await axios.delete(
                `http://127.0.0.1:8000/wishList/wishlist/remove/${itemId}/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${authTokens.access}`,
                    },
                }
            );
            if (response.status === 204) {
                setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
            } else if (response.status === 401) {
                // Handle unauthorized access
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddToCart = async (productId) => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/cart/add_to_cart/",
                { product_id: productId, quantity: 1 },
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
    

    return (
        // <div className='wishlist-body'>
        //     <div className='container'>
        //         <h1 className='wishlist-heading'>My WishList</h1>
        //         {wishlistItems.length === 0 ? (
        //             <p className='wishlist-empty'>Your wishlist is empty.</p>
        //         ) : (
        //             <div className="card-group">
        //                 {wishlistItems.map(item => (
        //                     <div className="card card-wishlist" key={item.id}>
        //                         <div className="card-img-container">
        //                             <img
        //                                 src={`http://localhost:8000${item.product.image}`}
        //                                 className="card-img-top"
        //                                 alt={item.product.name}
        //                             />
        //                         </div>
        //                         <div className="card-body">
        //                             <h5 className="card-title">{item.product.name}</h5>
        //                             <p className="card-text">{item.product.description}</p>
        //                             <div className="btn-group" role="group" aria-label="Action buttons">
        //                                 <button className='btn' onClick={() => handleRemoveWishlist(item.id)}><i className="trash bi bi-trash3-fill"></i></button>
        //                                 {/* <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn wishlist">Add to Cart</NavLink> */}
        //                                 <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn wishlist">Add to Cart</NavLink>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 ))}
        //             </div>
        //         )}
        //     </div>
        // </div>
        <div>
        <NavBars></NavBars>
        <div className='wishlist-body'>
            <div className='container'>
                <h1 className='wishlist-heading'>My WishList</h1>
                {wishlistItems.length === 0 ? (
                    <p className='wishlist-empty'>Your wishlist is empty.</p>
                ) : (
                    <div className="card-group">
                        {wishlistItems.map(item => (
                            <div className="card card-wishlist" key={item.id}>
                                <div className="card-img-container">
                                    <img
                                        src={`http://localhost:8000${item.product.image}`}
                                        className="card-img-top"
                                        alt={item.product.name}
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.product.name}</h5>
                                    <p className="card-text">{item.product.description}</p>
                                    <div className="btn-group" role="group" aria-label="Action buttons">
                                        <button className='btn' onClick={() => handleRemoveWishlist(item.id)}><i className="trash bi bi-trash3-fill"></i></button>
                                        <NavLink onClick={() => handleAddToCart(item.product.id)} to={`/cart/${item.product.id}`} className="btn wishlist">Add to Cart</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
          </div>
        </div>

    );
};

export default WishlistPage;


