import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import { Nav, Navbar, Form, NavDropdown, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>INSTA-INSPIRE</h1>
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
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Navbar>





        <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shopallgifts' component={shopallgifts} />
          <Route path='/wellness' component={wellness} />
          <Route path='/gestures' component={gestures} />
          <Route path='/childrensgifts' component={childrensgifts} />
          <Route path='/newbaby' component={newbaby} />
          <Route path='/smallgifts' component={smallgifts} />
          <Route path='/customgiftsform' component={customgiftsform} />
          <Route path='/corporategiftsform' component={corporategiftsform} />
          <Route path='/thecabbagepatch' component={thecabbagepatch} />
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
