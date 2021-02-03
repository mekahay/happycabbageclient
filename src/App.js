import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import CorporateGiftForm from './Components/CorporateGifts/CorportateGiftsForm';
import CustomGiftsForm from './Components/CustomGifts/CustomGiftsForm';
import ProductForm from './Components/Admin/ProductForm';
import AllProducts from './Components/Admin/ProductShowAll';
import ShopAllGifts from './Components/ShopGifts/ShopAllGifts';
import Header from './Components/Header/HeaderLogo';
import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import CorporateGiftsShow from './Components/Admin/CorporateGiftsShow'
import CustomGiftsShow from './Components/Admin/CustomGiftsShow'
import GITForm from './Components/Footer/GetInTouch'
import GITShow from './Components/Admin/GITShow'
import CabbagePatchForm from './Components/Admin/TheCabbagePatchCreate'
import CabbagePatchAllAdmin from './Components/Admin/TheCabbagePatchAll'
import CabbagePatchAll from './Components/TheCabbagePatch/TheCabbagePatch'
import ShowProduct from './Components/Admin/ProductEditDelete'
import GiftShow from './Components/ShopGifts/GiftShow'
import About from './Components/Footer/AboutUs'
import CabbagePatchShow from './Components/TheCabbagePatch/TheCabbagePatchShow'

function App() {
  return (
    <div className="App">
      <Header />
    <div className='nav-routes'>
    
    <Navbar bg="white" expand="lg" >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/'> HOME</Nav.Link>
            <Nav.Link href='/shopallgifts'>SHOP</Nav.Link>
            <Nav.Link href='/customgiftsform'> CUSTOM</Nav.Link>
            <Nav.Link href='/corporategiftsform'>CORPORATE</Nav.Link>
            <Nav.Link href='/thecabbagepatch'>THE CABBAGE PATCH</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    <hr/>
      <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={Admin} />
        <Route path='/getintouch' component={GITForm} />
        <Route path='/getintouchshow' component={GITShow} />
        <Route path='/productshow/:id' component={ShowProduct} />
        <Route path='/productform' component={ProductForm} />
        <Route path='/productsall' component={AllProducts} />
        <Route path='/customgiftsform' component={CustomGiftsForm} />
        <Route path='/customgiftsshow' component={CustomGiftsShow} />
        <Route path='/corporategiftsform' component={CorporateGiftForm} />
        <Route path='/corporategiftsshow' component={CorporateGiftsShow} />
        <Route path='/thecabbagepatchall' component={CabbagePatchAllAdmin} />
        <Route path='/thecabbagepatch' component={CabbagePatchAll} />
        <Route path='/cabbagepatchshow/:id' component={CabbagePatchShow} />
        <Route path='/thecabbagepatchform' component={CabbagePatchForm} />
        <Route path='/shopallgifts' component={ShopAllGifts} />
        <Route path='/GiftShow/:id' component={GiftShow} />
        <Route path='/' component={Header} />
        <Route path='/aboutus' component={About}/>
      </Switch>
      </Router>
      <hr/>
      <footer>
        <Navbar bg="white" expand="lg" >
        <Nav className="footer">
        <Nav.Link href='/aboutus'>ABOUT US</Nav.Link>
        <Nav.Link href='/getintouch'>GET IN TOUCH</Nav.Link>
        <Nav.Link href='/faq'>FREQUENTLY ASKED QUESTIONS</Nav.Link>
        <Nav.Link href='/partners'>OUR PARTNERS</Nav.Link>
        <Nav.Link href='/admin'>ADMIN</Nav.Link>
        </Nav>
        </Navbar>
      </footer>
      <hr/>
      <p className="appointment">2150 W Armitage Chicago, IL 60647</p>
      <p> by appointment only</p>
      <p className="footermadeby">MEKAHAY DESIGNS</p>
      
    </div>
  );
}

export default App;
