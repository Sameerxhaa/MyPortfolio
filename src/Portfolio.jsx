import React from "react";
import { Container, Navbar, Nav, Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Portfolio.css';

const Portfolio = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Sameer Sha</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section */}
      <Container className="text-center my-5" id="home">
        <h1 className="display-4 fw-bold">Hi, I'm Sameer Sha</h1>
        <p className="lead">A Passionate Full-Stack Developer</p>
        <Button variant="primary" size="lg">View Resume</Button>
      </Container>

      {/* About Section */}
      <Container className="my-5" id="about">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>About Me</h2>
            <p>I specialize in building modern web applications with expertise in React.js and the MEAN stack. Passionate about creating intuitive user experiences and scalable backend systems.</p>
          </Col>
          <Col md={6}>
            <img src="/profile.jpg" alt="Sameer Sha" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>

      {/* Projects Section */}
      <Container className="my-5" id="projects">
        <h2 className="text-center">Projects</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Farm Management System</Card.Title>
                <Card.Text>A web application to manage farm activities efficiently.</Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Explore Kerala</Card.Title>
                <Card.Text>A travel guide showcasing the beauty of Kerala.</Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="my-5 text-center" id="contact">
        <h2>Contact</h2>
        <p>Email: sameer@example.com</p>
        <p>LinkedIn: linkedin.com/in/sameersha</p>
      </Container>
    </>
  );
};

export default Portfolio;
