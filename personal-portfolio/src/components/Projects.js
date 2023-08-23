import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects = [
  {
    title: "weather app",
    description: "design and Development",
    imgUrl: projImg1,
  },
  {
    title: "E-commerce app",
    description: "design and Development",
    imgUrl: projImg2,
  },
  {
    title: "Spotify app",
    description: "design and Development",
    imgUrl: projImg3,
  },
];
const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h1>My Projects</h1>
            <p>Description of My Projects</p>
            {/* Projects Section */}
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              {/* Tab Content */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {" "}
                  {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                  ))}
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
