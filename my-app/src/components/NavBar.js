import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useState, useContext, useEffect } from 'react';
import { translations } from "@/lib/lang";
import LanguageContext from "@/lib/languageContext";

export function NavBar() {
  const router = useRouter();
  const [filter, setFilter] = useState("books");
  const { language, setLanguage } = useContext(LanguageContext);
  const [searchQuery, setSearchQuery] = useState("");
  const handleLang = (selected) => {
    if (selected !== language) {
      setLanguage(selected);
      const currentPath = router.asPath.replace(`/${language}`, `/${selected}`);
      router.push(currentPath);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
    router.push(`/${language}/search?filter=${filter}&query=${searchQuery}`);
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
          <Nav>
            <NavDropdown title={translations.navbar[filter][language]} id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => setFilter("books")}>{translations.navbar.books[language]}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter("characters")}>{translations.navbar.characters[language]}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter("houses")}>{translations.navbar.houses[language]}</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setFilter("spells")}>{translations.navbar.spells[language]}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}