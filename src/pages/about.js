import * as styles from "../styles/home.module.scss"
import { Container, Row, Image, Col, Form, Button, Card, Navbar, Nav} from "react-bootstrap"
import { MenuBar } from '../components/MenuBar'
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function AboutPage() {
  const [isShown, setIsShown] = useState(true);
  return ( 
    <Container fluid class="overflow-auto">
      <MenuBar />
      <Row style={{paddingBottom: 50}}>
          <Col style={{display: 'flex'}} className="d-flex justify-content-center">
            <Image 
              src={require(`../images/signal_noise.png`).default}
              width={'100%'}
              height={468}
            />
          </Col>
      </Row>


      <Row  className={`${styles.MailRow} justify-content-md-center`} >
        <Col md={5}>
          <Container >
            <h1 style={{fontWeight: "600", fontSize: "32px", margin: "0px !important"}}> Mission</h1>
            In 2017, The Signal began as a publication that encouraged the exploration of unconventional career paths and creative passions at Penn. Today, we are a collective of creators, designers, writers, and everything in between, with the goal of enhancing the undergraduate experience for all students. We provide resources to help students discover their passions and live deliberately at Penn, in their careers, and beyond.
          </Container>
        </Col>
      </Row>

      <Container fluid className={`${styles.FootContainer}`}>
        <Row>
          <Navbar className={`${styles.FooterNav}`}>
            <Navbar.Collapse className="justify-content-center">
              <Nav className={` ${styles.Menu}`}>
                <Nav.Link href='' className={`${styles.Item}`}>
                  Home
                </Nav.Link>
                <Nav.Link href='projects'className={`${styles.Item}`}>
                  Projects
                </Nav.Link>
                <Nav.Link href='/about' className={`${styles.Item}`}>
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Row>
          <p className={`text-center ${styles.Trademark}`}> The Sign.al © 2017-2022</p>
        </Row>
      </Container>
    </Container>
  )
}

export default AboutPage;
