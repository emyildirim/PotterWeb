import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
}

export function NavBar() {
  const router = useRouter();
  const { lang = "en" } = router.query;
  const [filters, setFilters] = useState("books");

  const handleLang = (selected) => {
    const currentPath = router.asPath.replace(`/${lang}`, `/${selected}`);
    router.push(currentPath);
  };

  const handleFilterChange = (selected) => {
    setFilters(selected);
  };

  const handleSearch = (searchQuery) => {
    router.push(`/${lang}/search?filter=${filters}&search=${searchQuery}`);
  };
  

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href={`/${lang}`}>PotterWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href={`/${lang}`}>Home</Nav.Link>
            <NavDropdown title="All" id="navbarScrollingDropdown">
              <NavDropdown.Item href={`/${lang}/books`}>Books</NavDropdown.Item>
              <NavDropdown.Item href={`/${lang}/characters`}>Characters</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/${lang}/houses`}>Houses</NavDropdown.Item>
              <NavDropdown.Item href={`/${lang}/spells`}>Spells</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`/${lang}/random`}>Random</Nav.Link>
            <Nav.Link href={`/${lang}/about`}>About</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleLang("en")}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLang("es")}>Español</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLang("fr")}>Français</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLang("it")}>Italiano</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleLang("pt")}>Português</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            {/*
            <NavDropdown title="Filter" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => handleFilterChange("books")}>Books</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterChange("characters")}>Characters</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterChange("houses")}>Houses</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleFilterChange("spells")}>Spells</NavDropdown.Item>
            </NavDropdown>
          
          *<SearchForm onSearch={handleSearch} />*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}