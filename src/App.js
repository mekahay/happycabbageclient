import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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

        <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/getintouch' component={GITForm} />
          <Route path='/getintouchshow' component={GITShow} />
          {/* <Route path='/giftseditdelete' component={GiftsEditDelete} /> */}
          <Route path='/productform' component={ProductForm} />
          <Route path='/productsalladmin' component={AllProducts} />
          <Route path='/customgiftsform' component={CustomGiftsForm} />
          <Route path='/customgiftsshow' component={CustomGiftsShow} />
          <Route path='/corporategiftsform' component={CorporateGiftForm} />
          <Route path='/corporategiftsshow' component={CorporateGiftsShow} />
          {/* <Route path='/thecabbagepatchshow' component={thecabbagepatchshow} /> */}
          {/* <Route path='/thecabbagepatchcreate' component={thecabbagepatchcreate} /> */}
          {/* <Route path='/thecabbagepatcheditdelete' component={thecabbagepatcheditdelete} /> */}
          <Route path='/shopallgifts' component={ShopAllGifts} />
          <Route path='/' component={Header} />
        </Switch>
        </Router>
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
      
    </div>
  );
}

export default App;
