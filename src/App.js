import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import CreateHerb from './components/create'
import UpdateHerb from './components/update'
import HerbList from './components/list'
import Navbar from 'react-bootstrap/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        
        <NavBar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/create"} className="nav-link">
                LeafHerb
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create"} className="nav-link">
                  Create Herb
                </Link>
              </Nav>
              <Nav>
                <Link to={"/list"} className="nav-link">
                  Herb List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </NavBar>

      <Container>
        <Row>
          <Col md-12>
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={CreateHerb} />
                <Route path="/create" component={CreateHerb} />
                <Route path="/update/:id" component={UpdateHerb} />
                <Route path="/list" component={HerbList} />
              </Switch>
            </div>
          
          </Col>
        </Row>
      </Container>

    </div>
    </Router>
  );
}

export default App;
