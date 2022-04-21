import * as styles from "../styles/home.module.scss"
import { Container, Row, Image, Col, Form, Button, Card, Navbar, Nav} from "react-bootstrap"
import { MenuBar } from '../components/MenuBar'
import * as React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function IndexPage() {
  return ( 
    <Container fluid>
      <MenuBar></MenuBar>
      <Row>
          <Col md={5}>
            <Image 
              src={require(`../images/mail.png`).default}
              width={88}
              height={43}
            />
          </Col>
          <Col md={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>American Case Competition</Card.Title>
                <Card.Text>
                What is this? This is a case competition for teams of Penn undergraduate, graduate, and MBA students to analyze why Amazon should locate their new headquarters in Philadelphia.
                </Card.Text>
                <Card.Link href="#"> Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row>
        Project showcase with icons
      </Row>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <Container className={`${styles.MailContainer}`}>
            <Image 
              src={require(`../images/mail.png`).default}
              width={88}
              height={43}
            />
            <Container>
              Live deliberately.
              <br></br>
              Resources to help students disocver their passions at Penn, in their careers, and beyond.
            </Container>
          </Container>
          <br></br>
          <Container fluid className={`${styles.SubscribeContainer}`}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
            <Button>
              Subscribe
            </Button>
          </Container>
        </Col>
      </Row>
      <Container fluid className={`fixed-bottom ${styles.FootContainer}`}>
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
