import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,Container,Nav,NavDropdown,Form,} from 'react-bootstrap';






function App() {
  return (
    < >
    
    <div className='App'>
    <>
 
</>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Clothes Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About us</Nav.Link>
        <NavDropdown title="Our Products" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://www.amazon.com/Mens-Shirts/b?ie=UTF8&node=2476517011">Shirts</NavDropdown.Item>
          <NavDropdown.Item href="https://www.amazon.com/s?k=pants&rh=n%3A2476517011&ref=nb_sb_noss">Pants</NavDropdown.Item>
          <NavDropdown.Item href="https://www.amazon.com/s?k=shoes">Shoes</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="https://www.amazon.com/s?k=coats&crid=1ONOFLI6W6TO0&sprefix=coats%2Caps%2C318&ref=nb_sb_noss">Coats</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 

    </div>
    <p> To buy, please log in</p>

    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     
    
    </>
  );
}

export default App;
