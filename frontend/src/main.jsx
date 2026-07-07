import { createRoot } from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css'
import HomePage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup.jsx'
import AboutPage from './landing_page/about/AboutPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/NotFound.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element = {<HomePage></HomePage>}/>
    <Route path="/signup" element = {<Signup></Signup>}/>
    <Route path="/about" element = {<AboutPage></AboutPage>}/>
    <Route path="/product" element = {<ProductPage></ProductPage>}/>
    <Route path="/pricing" element = {<PricingPage></PricingPage>}/>
    <Route path="/support" element = {<SupportPage></SupportPage>}/>
    <Route path="*" element = {<NotFound></NotFound>}/>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
)