import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import { Nav, Navbar, Form, NavDropdown, Button, FormControl } from 'react-bootstrap';
import CorporateGiftForm from './Components/CorporateGifts/CorportateGiftsForm';
import CustomGiftsForm from './Components/CustomGifts/CustomGiftsForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Happy Cabbage</h1>
      <div className='nav-routes'/>
    
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href='/'> Home</Nav.Link>
        <NavDropdown title="Shop All Gifts" id="nav-dropdown">
          <NavDropdown.Item href="/wellness">Wellness</NavDropdown.Item>
          <NavDropdown.Item href="/gestures">Gestures</NavDropdown.Item>
          <NavDropdown.Item href="/childresngifts">Childrens Gifts</NavDropdown.Item>
          <NavDropdown.Item href="/newbaby">New Baby</NavDropdown.Item>
          <NavDropdown.Item href="/smallgifts">Small Gifts</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href='/customgiftsform'> Custom</Nav.Link>
        <Nav.Link href='/corporategiftsform'>Corporate</Nav.Link>
        <Nav.Link href='/thecabbagepatch'>The Cabbage Patch</Nav.Link>
        <Nav.Link href='/admin'>Admin</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Navbar>





        <Router>
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/giftseditdelete' component={GiftsEditDelete} />
          <Route path='/giftsform' component={giftsform} />
          <Route path='/shopallgifts' component={shopallgifts} />
          <Route path='/wellnessshow' component={wellnessshow} />
          <Route path='/gesturesshow' component={gesturesshow} />
          <Route path='/childrensgiftsshow' component={childrensgiftsshow} />
          <Route path='/newbabyshow' component={newbabyshow} />
          <Route path='/smallgiftsshow' component={smallgiftsshow} /> */}
          <Route path='/customgiftsform' component={CustomGiftsForm} />
          {/* <Route path='/customgiftsshow' component={customgiftsshow} /> */}
          <Route path='/corporategiftsform' component={CorporateGiftForm} />
          {/* <Route path='/corporategiftsshow' component={corporategiftsshow} />
          <Route path='/thecabbagepatchshow' component={thecabbagepatchshow} />
          <Route path='/thecabbagepatchcreate' component={thecabbagepatchcreate} />
          <Route path='/thecabbagepatcheditdelete' component={thecabbagepatcheditdelete} /> */}
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
