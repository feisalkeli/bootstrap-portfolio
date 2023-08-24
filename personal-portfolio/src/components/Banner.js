import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

const Banner = () => {
  //Looping through the Words

  const [loopNumber, SetLoopNumber] = useState(0);

  //Deleting The Words or Typing the Word
  const [isDeleting, SetIsDeleting] = useState(false);
  // Words to be displayed
  const toShow = ["Web Developer", "Mobile Developer", "Technical Writer"];
  // Text to Be Displayed
  const [text, setText] = useState("");
  //Time between when on letter is being typed out
  const period = 9000;
  //Determines how fast the letters appear
  const [delta, setDelta] = useState(3000);

  //useEffect responible for typing or deleting
  useEffect(
    () => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
    }
    /*runs everytime the text is updated*/
  );
  const tick = () => {
    let i = loopNumber % toShow.length;
    let fullText = toShow[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      SetIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      SetIsDeleting(false);
      setDelta(5000);
      SetLoopNumber(loopNumber + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi I'm Feisal Keli a{" "}
              <span className="wrap">Web and Mobile Developer</span>
            </h1>
            <p>
              Web and Mobile Developer with expertise in JavaScript, SQL, and
              Ruby on Rails, I aim to deliver high-quality code and collaborate
              effectively to build intuitive web applications.
            </p>
            <button onClick={() => console.log("lets connect")}>
              Lets Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
