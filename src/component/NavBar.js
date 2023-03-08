import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        <img alt="Skash logo" src={logo} height="60" className="d-inline-block align-top"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav>
            <Nav.Link href="#top">الرئيسية</Nav.Link>
            <Nav.Link href="#course">كورس التداول</Nav.Link>
            <Nav.Link href="#trading">تداول الأسهم</Nav.Link>
            <Nav.Link href="#link">حول</Nav.Link>
            <a href="/" className="contact_us_btn">اتصل بنا</a>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;
