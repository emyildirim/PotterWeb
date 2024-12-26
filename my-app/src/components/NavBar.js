import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export function NavBar(){
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">PotterWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <Nav.Link href="/" passHref>Home</Nav.Link>
            <NavDropdown title="All" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Characters
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Houses
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Spells
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Random</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}