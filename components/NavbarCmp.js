import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import ThemeToggle from 'components/ThemeToggle';

export default function NavbarCmp({theme, toggleTheme}) {
  return (
    <Navbar
      className="fj-navbar fj-nav-base"
      bg="transparent"
      expand="lg" >
      <Navbar.Brand className="fj-navbar-brand">
        <Link href='/' as={`/`}>
          <a>Sifaldin</a>
        </Link>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <ThemeToggle onChange={toggleTheme} />
          <Nav.Link  href='/'
            as={() =>
              <Link href='/'>
                <a className="fj-navbar-item fj-navbar-link">Home</a>
              </Link>} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
