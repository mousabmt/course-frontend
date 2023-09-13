import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './navbar.scss'
export default function NaviBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="/" style={{ fontSize: "35px" }}>
      FH College
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ fontSize: "22px" }}
        >
          <Nav className="me-auto">
            <Nav.Link href="/Explore">Explore</Nav.Link>
            <Nav.Link href="/Schedule">My schedule</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" > 
              <NavDropdown.Item href="#action/3.1" style={{ fontSize: "18px" }}>
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ fontSize: "18px" }}>
                Principle
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ fontSize: "18px" }}>
                Messages
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">My Marks</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Settings</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
