import * as React from 'react'
import * as styles from "../styles/menubar.module.scss"
import { Navbar, Nav, Container, Image, NavDropdown, NavbarBrand } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const MenuBar = function({className}) {
  return (
  <Navbar>
    <Container fluid className={`${styles.Container}`}>
      <Navbar.Brand>
        <Nav.Link href='/'>
          <Container className={`${styles.Brand}`}>
            <Image 
              src={require(`../images/logo.png`).default}
              width={80}
              height={80}
            />
            <Navbar.Text className={`${styles.Header}`}>The Signal</Navbar.Text>
          </Container>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav className={` ${styles.Menu}`}>
          <Nav.Link href='/about' className={`${styles.Item}`}>
            About
          </Nav.Link>
          <NavDropdown title={<span className={`${styles.Item}`}>Project</span>}> 
            <NavDropdown.Item href='hotones'>
              Hot Ones
            </NavDropdown.Item>
            <NavDropdown.Item href='spectrum'>
              Spectrum
            </NavDropdown.Item>
            <NavDropdown.Item href='interviews'>
              Interviews
            </NavDropdown.Item>
            <NavDropdown.Item href='http://antiresume.org/'>
              Anti-Resume
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='events'className={`${styles.Item}`}>
            Events
          </Nav.Link>
          <Nav.Link href='join' className={`${styles.Item}`}>
            Join Us
          </Nav.Link>
          <Nav.Link href='join'className={`${styles.Item, styles.Shop}`}>
            <img
              src={require(`../images/cart.png`).default}
              width={17}
              height={16}
              style={{marginRight: "7px"}}
            />
            Shop
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}