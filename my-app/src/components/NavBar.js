import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { translations } from "@/lib/lang";
import LanguageContext from "@/lib/languageContext";

function SearchForm({ onSearch }) {
  //const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder={translations.search.placeholder[language]}
        className="me-2"
        aria-label={translations.search.placeholder[language]}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="outline-success" type="submit">
        {translations.search.button[language]}
      </Button>
    </Form>
  );
}

export function NavBar() {
  const router = useRouter();
  //const [filters, setFilters] = useState("books");
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLang = (selected) => {
    if (selected !== language) {
      setLanguage(selected);
      const currentPath = router.asPath.replace(`/${language}`, `/${selected}`);
      router.push(currentPath);
    }
  };

  const handleSearch = (searchQuery) => {
    router.push(`/${language}/search?filter=${filters}&search=${searchQuery}`);
  };

  const renderNavLinks = () => (
    <>
      <Nav.Link href={`/${language}`}>
        {translations.navbar.home[language]}
      </Nav.Link>
      <NavDropdown title={translations.navbar.all[language]} id="navbarScrollingDropdown">
        <NavDropdown.Item href={`/${language}/books`}>
          {translations.navbar.books[language]}
        </NavDropdown.Item>
        <NavDropdown.Item href={`/${language}/characters`}>
          {translations.navbar.characters[language]}
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href={`/${language}/houses`}>
          {translations.navbar.houses[language]}
        </NavDropdown.Item>
        <NavDropdown.Item href={`/${language}/spells`}>
          {translations.navbar.spells[language]}
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href={`/${language}/random`}>
        {translations.navbar.random[language]}
      </Nav.Link>
      <Nav.Link href={`/${language}/about`}>
        {translations.navbar.about[language]}
      </Nav.Link>
    </>
  );

  const renderLanguageDropdown = () => (
    <NavDropdown 
      title={translations.navbar.languageNames[language]} 
      id="navbarScrollingDropdown"
    >
      {["en", "es", "fr", "it", "pt"].map((lang) => (
        <NavDropdown.Item key={lang} onClick={() => handleLang(lang)}>
          {translations.navbar.languageNames[lang]}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href={`/${language}`}>PotterWeb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {renderNavLinks()}
          </Nav>
          <Nav>
            {renderLanguageDropdown()}
          </Nav>
          {/* Uncomment the following lines to enable filter and search functionality */}
          {/* 
          <NavDropdown title="Filter" id="navbarScrollingDropdown">
            <NavDropdown.Item onClick={() => setFilters("books")}>Books</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setFilters("characters")}>Characters</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setFilters("houses")}>Houses</NavDropdown.Item>
            <NavDropdown.Item onClick={() => setFilters("spells")}>Spells</NavDropdown.Item>
          </NavDropdown>
          <SearchForm onSearch={handleSearch} />
          */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}