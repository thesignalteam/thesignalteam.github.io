import * as styles from "../styles/home.module.scss"
import { Container, Row, Image, Col, Form, Button, Card, Navbar, Nav} from "react-bootstrap"
import { MenuBar } from '../components/MenuBar'
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function IndexPage() {
  const [isShown, setIsShown] = useState(true);
  return ( 
    <Container fluid class="overflow-auto">
      <MenuBar />
      <Row >
          <Col style={{display: 'flex'}} className="d-flex justify-content-center">
            <Image 
              src={require(`../images/Rectangle.png`).default}
              width={406}
              height={255}
            />
            <Card className={`${styles.EventCardContainer}`} >
              <Card.Body className={`${styles.EventCard}`}>
                <Card.Title className={`${styles.EventCardTitle}`}>American Case Competition</Card.Title>
                <Card.Text>
                What is this? This is a case competition for teams of Penn undergraduate, graduate, and MBA students to analyze why Amazon should locate their new headquarters in Philadelphia.
                </Card.Text>
                <Card.Link href="#"> Read More &gt;&gt;</Card.Link>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row style={{margin: 0}}>
        <div className={`${styles.ProjectCol}`}
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}>
          {isShown ?  
            <div className={`${styles.ProjectCard}`}>
              <Image 
                src={require(`../images/squirrel.png`).default}
                width={130}
                height={145}
              />
            </div>
            :           <Image 
            src={require(`../images/squirrelOpen.png`).default}
            width={155}
            height={261}
          />}
        </div>
      </Row>
      <Row  className={`${styles.MailRow} justify-content-md-center`} >
        <Col md={5}>
          <Container className={`${styles.MailContainer}`}>
            <Image 
              src={require(`../images/mail.png`).default}
              width={88}
              height={43}
            />
            <Container >
              <h1 style={{fontWeight: "600", fontSize: "32px", margin: "0px !important"}}> Live deliberately.</h1>
              Resources to help students disocver their passions at Penn, in their careers, and beyond.
              <Container fluid className={`${styles.SubscribeContainer}`}>
                <div className={`${styles.FormBorder}`}>
                  <Form className={`${styles.FormContainer}`}>
                    <Form.Group className={`${styles.FormGroup} mb-3`} controlId="formBasicEmail">
                      <Form.Control className={`${styles.FormInput}`} type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Form>
                </div>
                <div className={`${styles.ButtonBorder}`}> 
                  <Button className={`${styles.Button}`}>
                    SUBSCRIBE
                  </Button>
                </div>
              </Container>
            </Container>
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
                <Nav.Link href='about' className={`${styles.Item}`}>
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

export default IndexPage;
