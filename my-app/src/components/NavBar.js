import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import LanguageContext from "@/lib/languageContext";

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
  const [filters, setFilters] = useState("books");
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLang = (selected) => {
    if (selected === language) return;
    setLanguage(selected);
    const currentPath = router.asPath.replace(`/${language}`, `/${selected}`);
    router.push(currentPath);
  };

  const handleSearch = (searchQuery) => {
    router.push(`/${language}/search?filter=${filters}&search=${searchQuery}`);
  };
  

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href={`/${language}`}>PotterWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href={`/${language}`}>Home</Nav.Link>
            <NavDropdown title="All" id="navbarScrollingDropdown">
              <NavDropdown.Item href={`/${language}/books`}>Books</NavDropdown.Item>
              <NavDropdown.Item href={`/${language}/characters`}>Characters</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={`/${language}/houses`}>Houses</NavDropdown.Item>
              <NavDropdown.Item href={`/${language}/spells`}>Spells</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`/${language}/random`}>Random</Nav.Link>
            <Nav.Link href={`/${language}/about`}>About</Nav.Link>
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
              <NavDropdown.Item onClick={() => setFilters("books")}>Books</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilters("characters")}>Characters</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilters("houses")}>Houses</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilters("spells")}>Spells</NavDropdown.Item>
            </NavDropdown>
          
          *<SearchForm onSearch={handleSearch} />*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}