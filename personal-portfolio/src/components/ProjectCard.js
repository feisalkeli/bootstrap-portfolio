import React from "react";
import { Col, Row } from "react-bootstrap";
const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <>
      <Col sm={6} md={4}>
        <Row>
          <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        </Row>
      </Col>
    </>
  );
};

export default ProjectCard;
