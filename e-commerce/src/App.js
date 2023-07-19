import './App.css';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
// import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import NavBars from './components/NavBars';
import { useAuth } from './components/UseAuth';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import OrderPage from './pages/OrderPage';
import BestSelling from './components/BestSelling';
import History from './pages/History';
import Footer from './components/Footer';

function App() {
  const { authTokens } = useAuth();
  return (
    <div className="App">
      {/* <NavBars/> */}
      <Router>
        <AuthProvider>
          {/* <Header /> */}
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={Register} />
            <Route path='/store' component={Store} />
            <Route path='/products/:id' component={ProductDetails} />
            {/* <Route path='/cart' component={CartPage} /> */}
            <Route path="/cart">
              {authTokens ? <CartPage /> : <LoginPage />}
            </Route>
            <Route path="/wishlist">
              {authTokens ? <WishlistPage /> : <LoginPage />}
            </Route>
            <Route path='/order' component={OrderPage} />
            <Route path='/aboutus' component={AboutUs} />
            <Route path='/contactus' component={ContactUs} />
            {/* <Route path='*' component={NotFound} /> */}
            <Route path='/bestselling' component={BestSelling} />
            <Route path="/history" component={History} />
          </Switch>
          <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;