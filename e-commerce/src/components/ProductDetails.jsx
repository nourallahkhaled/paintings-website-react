// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {  useParams } from "react-router-dom";

// const ProductDetails = () => {
//     let { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchItem = async () => {
//         const response = await axios.get(`http://localhost:8000/products/${id}/`);
//         setProduct(response.data);
//         setLoading(false);
//         };

//         fetchItem();
//     }, [id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     const { name, description, price, image } = product;

//     return (
//         <div className='container'>
//             <h2>{name}</h2>
//             <p>{description}</p>
//             <p>{price}</p>
//             <img src={`http://localhost:8000${image}`} alt={description} />
//         </div>
//     );
// };

// export default ProductDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../CSS/productdetails.css'
import { useAuth } from './UseAuth';
import NavBars from '../components/NavBars';



// 


const ProductDetails = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const { authTokens, setAuthTokens } = useAuth()
    const [wishlistItems, setWishlistItems] = useState();


    useEffect(() => {
        const fetchItem = async () => {
            const response = await axios.get(`http://localhost:8000/products/${id}/`);
            const product = response.data;
            if (product.promotion) {
                const promotionResponse = await axios.get(`http://localhost:8000/products/promotions/${product.promotion}/`);
                product.discountRate = promotionResponse.data.discount_rate;
            }


            setProduct(response.data);
            setLoading(false);
        };

        fetchItem();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const { name, description, price, discountRate, image, details_image_one, details_image_two, details_image_three, details_image_four } = product;
    const afterDiscount = ((100 - discountRate) * price) / 100;
    const saving = price - afterDiscount;
    function img(anything) {
        document.querySelector('.slide').src = anything
    }

    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

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

    const handleRemoveWishlist = async (itemId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/wishList/wishlist/remove/${itemId}/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authTokens.access}`,
                },
            });
            if (response.ok) {
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

    return (
        <div>
            <NavBars></NavBars>
        <div className="container detailsContainer">
            <div className="row">
                <div className="col-md-6">
                    <div >
                        <img src={`http://localhost:8000${image}`} alt={description} className="slide img-fluid w-100" />
                    </div>
                    <div className="option d-flex">
                        <img src={`http://localhost:8000${image}`} onClick={() => img(`http://localhost:8000${image}`)} className="img-fluid img1" />
                        <img src={`http://localhost:8000${details_image_one}`} onClick={() => img(`http://localhost:8000${details_image_one}`)} className="img-fluid" />
                        <img src={`http://localhost:8000${details_image_two}`} onClick={() => img(`http://localhost:8000${details_image_two}`)} className="img-fluid" />
                        <img src={`http://localhost:8000${details_image_three}`} onClick={() => img(`http://localhost:8000${details_image_three}`)} className="img-fluid" />
                        <img src={`http://localhost:8000${details_image_four}`} onClick={() => img(`http://localhost:8000${details_image_four}`)} className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h1>{name}</h1>

                    <h6 className='text-secondary mt-3'>Was:  <del>EGP {price}.00</del> <span>Now:  {afterDiscount}.00 <small>L.E</small></span></h6>
                    <h4 className='text-danger'>Now:  {afterDiscount}.00 <small>L.E</small>
                    </h4>
                    <h6 className='text-secondary'>Saving:  EGP{saving}.00 <span className='bg-danger text-light p-1'>{discountRate} %</span> </h6>



                    <p className="text-muted">{description}</p>

                    <div className="add-to-cart-container d-flex align-items-center">
                        <button className="addbutton btn btn-primary mr-2" onClick={handleAddToCart}>Add to cart</button>
                        <i
                            className={isFavorite ? "text-danger bi bi-suit-heart-fill" : "bi bi-suit-heart text-danger"}
                            onClick={() => {
                                if (!id) {
                                    console.error("Invalid item id");
                                    return;
                                }
                                if (isFavorite) {
                                    handleRemoveWishlist(id);
                                } else {
                                    handleAddToWishlist();
                                }
                                setIsFavorite(!isFavorite);
                            }}

                        ></i>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;


