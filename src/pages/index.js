import * as React from "react"
import * as styles from "../public/static/styles/home.module.scss"
import { Container, Row, Image, Col, Form, Button } from "react-bootstrap"
import { MenuBar } from '../components/MenuBar'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => {
  return (
    <Container fluid>
      <MenuBar></MenuBar>
      <Row>
        Featured project
      </Row>
      <Row>
        Project showcase with icons
      </Row>
      <Row className="justify-content-md-center">
        <Col md={5}>
          <Container className={`${styles.MailContainer}`}>
            <Image 
              src={require(`../public/static/images/mail.png`).default}
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
    </Container>
  )
}

export default IndexPage
