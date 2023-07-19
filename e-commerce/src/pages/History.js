import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/UseAuth'; // import the useAuth hook
import { Card } from 'react-bootstrap';
import '../CSS/history.css'
import Table from 'react-bootstrap/Table';
import NavBars from '../components/NavBars';


const History = () => {
    const { authTokens } = useAuth(); // use the useAuth hook to get the authTokens variable
    const [orders, setOrders] = useState([]);

    const getHistory = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/order/order_list/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${authTokens.access}`,
                },
            });
            const data = await response.json();
            if (response.ok) {
                setOrders(data);
            } else if (response.status === 401) {
                // Handle unauthorized access
            } else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (authTokens && authTokens.access) {
            getHistory();
        }
    }, [authTokens]);

    if (!authTokens) {
        return (
            <div>
                <h1>Not logged in</h1>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }


    return (
        <div>
            <NavBars></NavBars>
        <div className='one'>
            <div className="container lbox">
                <h1 className="mb-5  title"  >Your Orders</h1>
                <div className="row ">
                    {orders.map(order => (
                        <div className="col-md-4 " key={order.id}>
                            <Card className="mb-4 sbox">
                                <Card.Body>
                                    <Card.Title className='title2 '>Order : {order.id}</Card.Title>
                                    <Card.Text>
                                        <p><strong><span className='detail'>Date: </span></strong>  {order.date}</p>
                                        <p><strong><span className='detail'>Shipping Address: </span> </strong> {order.shipping_address}</p>
                                        <p><strong><span className='detail'>District: </span></strong> {order.district}</p>
                                        <p><strong><span className='detail'>Payment Method: </span></strong> {order.payment_method}</p>
                                        <p><strong><span className='detail'>Shipping Option: </span></strong> {order.shipping_option}</p>
                                        <p><strong><span className='detail'>Shipping Price: </span></strong> {order.shipping_price}</p>
                                        <h5 className="mt-4 mb-2 title3 ">Purchases:</h5>
                                        <ul className="list-group innerbox">
                                            {order.items.map(item => (
                                                <li key={item.product} className="list-group-item">
                                                    <p className="mb-1"><strong><span className='detail'>Product:</span></strong> {item.product}</p>
                                                    <p className="mb-1"><strong><span className='detail'>Quantity:</span></strong> {item.quantity}</p>
                                                    <p className="mb-1"><strong><span className='detail'>Price:</span></strong> {item.price}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-3 "><strong><span className='detail'>Total Price:</span></strong> {order.total_price}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}



export default History;


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../components/UseAuth'; // import the useAuth hook

// const History = () => {
//     const { authTokens } = useAuth(); // use the useAuth hook to get the authTokens variable
//     const [orders, setOrders] = useState([]);

//     const getHistory = async () => {
//         try {
//             const response = await fetch(`http://127.0.0.1:8000/order/order_list/`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Authorization: `Bearer ${authTokens.access}`,
//                 },
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 setOrders(data);
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
//             getHistory();
//         }
//     }, [authTokens]);

//     if (!authTokens) {
//         return (
//             <div>
//                 <h1>Not logged in</h1>
//             </div>
//         );
//     }

//     if (orders.length === 0) {
//         return (
//             <div>
//                 <h1>Loading...</h1>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1>Order History</h1>
//             <ul>
//                 {orders.map(order => (
//                     <li key={order.id}>
//                         <h2>Order #{order.id}</h2>
//                         <p>Date: {order.date}</p>
//                         <p>Status: {order.status}</p>
//                         <p>Shipping Address: {order.shipping_address}</p>
//                         <p>District: {order.district}</p>
//                         <p>Payment Method: {order.payment_method}</p>
//                         <p>Shipping Option: {order.shipping_option}</p>
//                         <p>Shipping Price: {order.shipping_price}</p>
//                         <h3>Items:</h3>
//                         <ul>
//                             {order.items.map(item => (
//                                 <li key={item.product}>
//                                     <p>Product: {item.product}</p>
//                                     <p>Quantity: {item.quantity}</p>
//                                     <p>Price: {item.price}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                         <p>Total Price: {order.total_price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default History;