import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../components/UseAuth';
import Decimal from 'decimal.js';
import '../CSS/orderpage.css';
import axios from "axios";
import NavBars from '../components/NavBars';
import AuthContext from '../context/AuthContext';
import React, { useEffect, useContext } from 'react';



const OrderPage = (props) => {
    const { authTokens } = useAuth();
    const { user } = useContext(AuthContext);
    const [shippingAddress, setShippingAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [district, setDistrict] = useState('');
    const [shippingCost, setShippingCost] = useState(new Decimal('0')); // new state variable
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();
    const cartItems = props.location.state;
    const [couponCode, setCouponCode] = useState('');
    const [first_name, setfirst_name] = useState('');
    const [phone_number, setphone_number] = useState('');
    const [isVisa, setIsVisa] = useState(false);
    // const [couponSent ,  setcouponSent] = useState('')
    const handleCouponCodeChange = (event) => {
        setCouponCode(event.target.value);
    };
    // const [total, setTotal] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(0);



    const applyCoupon = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/coupons/coupons/use/${couponCode}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    original_price: cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0),
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setDiscountAmount(data.discount_amount);
                setDiscountedPrice(data.discounted_price);
                setError(null);
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
            setError('Sorry You are not Authorized to use this Coupon');
        }
    };


    const get_shipping_cost = (selectedDistrict) => { // updated to take a district as argument
        if (selectedDistrict === 'Hadayek El Qobba') {
            return new Decimal('30');
        } else if (selectedDistrict === 'Zamalek') {
            return new Decimal('60');
        } else if (selectedDistrict === 'The 5th Settlement') {
            return new Decimal('100');
        } else if (selectedDistrict === 'Masr El Gedida') {
            return new Decimal('55');
        } else if (selectedDistrict === 'Nasr City') {
            return new Decimal('55');
        } else if (selectedDistrict === '6th of October City') {
            return new Decimal('90');
        } else if (selectedDistrict === 'Al Haram') {
            return new Decimal('30');
        } else {
            return new Decimal('0');
        }
    };

    const handleDistrictChange = (e) => {
        setDistrict(e.target.value);
        setShippingCost(get_shipping_cost(e.target.value)); // update shipping cost
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        if (paymentMethod === 'visa') {
            setIsVisa(true);
            // Perform action for Visa payment method
            // const response = await axios.post(`http://127.0.0.1:8000/api/stripe/create-checkout-session/${user.user_id}`);
            console.log("visa");
        }
        try {
            let orderPrice = cartItems.reduce((total, item) => total.plus(item.total_price), new Decimal('0'));
            let discountedAmount = 0;

            if (couponCode) {
                discountedAmount = (cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0) - discountAmount / 100 * cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)).toFixed(2);
                orderPrice = orderPrice.minus(discountedAmount);
            }

            const orderTotal = orderPrice.plus(shippingCost || 0);

            const response = await fetch('http://127.0.0.1:8000/order/order_details/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authTokens.access}`,
                },
                body: JSON.stringify({
                    order_items: cartItems.map((item) => ({
                        product_id: item.product.id,
                        quantity: item.quantity,
                    })),
                    shipping_address: shippingAddress,
                    payment_method: paymentMethod,
                    district: district,
                    shipping_cost: (shippingCost || 0).toString(),
                    total_price: couponCode ? orderTotal.toString() : orderTotal.toString(),
                    first_name: first_name,
                    phone_number: phone_number,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Order created:', data);
                const total = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
                // history.push('/order-confirmation');
            } else if (response.status === 401) {
                // Obtain a new access token using the refresh token
                // ...
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
            setError('An error occurred while submitting your order.');
        } finally {
            setIsSubmitting(false);
        }
    };



    const handleHistory = () => {
        history.push('/history');

    }

    // total cart - discountamount 
    const discountedAmount = (cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0) - discountAmount / 100 * cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)).toFixed(2)
    // Dah sa7  
    const orderTotal = cartItems.reduce((total, item) => total.plus(item.total_price), new Decimal('0')).plus(shippingCost).toFixed(2) - discountedAmount
    // total cart without shipping after coupon 
    const cartTotal = cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2) - discountedAmount
    //total cart after shipping and coupon

    return (

        <div>
            <NavBars></NavBars>
        <div class='parent'>
            <div class='container container-bg'>
                <h1 class='form-title'>Checkout Page</h1>
                    <form action={isVisa ? `http://127.0.0.1:8000/api/stripe/create-checkout-session/${user.user_id}` : ""}
                        method={isVisa == "visa" ? "POST":""} onSubmit={handleSubmit}>
                    <div class='main-user-info'>
                        <div className='col-sm-12 col-lg-6' class="par1">
                            <div class="user-input-box">
                                <label htmlFor="firstName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="firstName" value={first_name} onChange={(e) => setfirst_name(e.target.value)} required />
                            </div>
                            <div class="user-input-box">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber" value={phone_number} onChange={(e) => setphone_number(e.target.value)} required />
                            </div>
                            <div class="user-input-box">
                                <label htmlFor="shippingAddress" className="form-label">Shipping Address</label>
                                <input className="form-control" id="shippingAddress" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} required />
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-6 bg-info' class="par1">
                            <div className="form-group" class="user-input-box">
                                <label htmlFor="District">Shipping District</label>
                                <select className="form-control" id="District" value={district} onChange={handleDistrictChange} required>
                                    <option value="">Select Shipping District</option>
                                    <option value="Hadayek El Qobba">Hadayek El Qobba</option>
                                    <option value="Zamalek">Zamalek</option>
                                    <option value="The 5th Settlement">The 5th Settlement</option>
                                    <option value="Masr El Gedida">Masr ElGedida</option>
                                    <option value="Nasr City">Nasr City</option>
                                    <option value="6th of October City">6th of October City</option>
                                    <option value="Al Haram">Al Haram</option>
                                </select>
                            </div>
                            <div class="user-input-box">
                                <label htmlFor="shippingCost" className="form-label">Shipping Cost</label>
                                <input type="text" className="form-control" id="shippingCost" value={shippingCost.toFixed(2)} readOnly />
                            </div>
                            <div class="user-input-box">
                                <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                                <select className="form-control" id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
                                    <option value="">Select Payment Method</option>
                                    <option value="visa">Visa</option>
                                    <option value="cash">Cash_on_Delivery</option>
                                </select>
                            </div>
                        </div>
                        <ul class='cart-info'>
                            {cartItems.map((item, index) => (
                                <li key={index}>
                                    {item.product.name} x {item.quantity} - Total Price: {item.total_price}
                                </li>
                            ))}
                        </ul>

                        {/* <h4>Total Price: {cartItems.reduce((total, item) => total.plus(item.total_price), new Decimal('0')).plus(shippingCost).toFixed(2)}</h4> */}

                            <button type="submit" className="btn btn-primary" class="subbtn">Place Order</button>
 
                            <form
                                action={`http://127.0.0.1:8000/api/stripe/create-checkout-session/${user.user_id}`}
                                method='POST' onSubmit={handleSubmit}
                            >
                                <button className='btn1' type='submit' >
                                    Pay by Visa 
                                </button>

                            </form> 


                    </div>

                </form>
                <button className="btn btn-primary" class="subbtn2" onClick={handleHistory}>History</button>
                <div >
                    <div class='coupon'>
                        <label htmlFor="coupon-code">Enter coupon code:</label>
                        <input type="text" id="coupon-code" value={couponCode} onChange={handleCouponCodeChange} />
                        <button class='apply' onClick={applyCoupon}>Apply</button>

                    </div>
                    {error && <p>{error}</p>}

                    {discountedPrice > 0 ? (
                        <div>
                            <p style={{color: "white"}}>Discount amount: {100 - discountAmount}% </p>
                            <p style={{ color: "white" }}>Discounted price: ${discountedAmount}</p>
                            <p style={{ color: "white" }}>Total: ${orderTotal}</p>
                        </div>
                    ) : (
                        <h4 class="total">Total Price: {cartItems.reduce((total, item) => total.plus(item.total_price), new Decimal('0')).plus(shippingCost).toFixed(2)}</h4>
                    )}
                </div>
            </div>
            </div>
            </div>
    )
};

export default OrderPage;