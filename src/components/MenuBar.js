import * as React from 'react'
import * as styles from "../public/static/styles/menubar.module.scss"
import { Navbar, Nav, Container, Image, NavDropdown, NavbarBrand } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export const MenuBar = function({className}) {
  return (
  <Navbar>
    <Container fluid className={`${styles.Container}`}>
      <Navbar.Brand>
        <Nav.Link href='#'>
          <Container className={`${styles.Brand}`}>
            <Image 
              src={require(`../public/static/images/logo.png`).default}
              width={80}
              height={80}
            />
            <Navbar.Text className={`${styles.Header}`}>The Signal</Navbar.Text>
          </Container>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className={` ${styles.Menu}`}>
          <Nav.Link href='about'>
            About
          </Nav.Link>
          <NavDropdown title="Projects">
            <NavDropdown.Item href='hotones'>
              Hot Ones
            </NavDropdown.Item>
            <NavDropdown.Item href='spectrum'>
              Spectrum
            </NavDropdown.Item>
            <NavDropdown.Item href='interviews'>
              Interviews
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='events'>
            Events
          </Nav.Link>
          <Nav.Link href='join'>
            Join Us
          </Nav.Link>
          <Nav.Link href='join'>
            Shop
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}