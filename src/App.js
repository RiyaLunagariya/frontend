import './App.css';
import Footer from './Components/Footer';
import Main from './Components/ProductPage/Main';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/HomePage/Home";
import Productgrid from './Components/ProductPage/Productgrid';
import Contact from './Components/ContactusPage/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/AboutusPage/About";
import Features from "./Components/AboutusPage/Features";
import Protector from "./Components/AboutusPage/Protector"
import Faq from "./Components/AboutusPage/Faq";
import Testimonials from "./Components/AboutusPage/Testimonials";
import Search from './Components/HomePage/Search';
import Category from "./Components/HomePage/Category";
import ImmunitySection from './Components/HomePage/ImmunitySection';
import Nature from './Components/HomePage/Nature';
import Wellness from "./Components/HomePage/Wellness";
import Supplements from './Components/HomePage/Supplements';
import Selling from './Components/HomePage/Selling';
import CartPage from "./Components/CartPage/Cart";
import { CartProvider } from './Components/CartPage/CartContext';
import Checkout from './Components/CartPage/Checkout';
import AccountPage from "./Components/ProfilePage/Account";
import ProductDetailsPage from './Components/ProductinnerPage/Detail';  // Import the ProductDetailsPage

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/account" element={<AccountPage />} />
            {/* Other routes */}
            <Route path="/product/:id" element={<ProductDetailsPage />} /> {/* Add this route */}
          </Routes>
          
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Search />
                  <Category />
                  <ImmunitySection />
                  <Nature />
                  <Wellness />
                  <Selling />
                  <Supplements />
                  <Testimonials />
                </>
              }
            />

            {/* Home Page Route */}
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <Search />
                  <Category />
                  <ImmunitySection />
                  <Nature />
                  <Wellness />
                  <Selling />
                  <Supplements />
                  <Testimonials />
                </>
              }
            />
            {/* Products Page Route */}
            <Route
              path="/products"
              element={
                <>
                  <Main />
                  <Productgrid />
                </>
              }
            />
            {/* About Us Page Route */}
            <Route
              path="/about-us"
              element={
                <>
                  <About />
                  <Features />
                  <Protector />
                  <Faq />
                  <Testimonials />
                </>
              }
            />
            {/* Contact Page Route */}
            <Route path="/contact" element={<Contact />} />

            {/* Cart Page Route */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
