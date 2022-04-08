import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/Photo.jpg";
import "./Home.css";

export const Home2 = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Fresher looking for a good job to learn and to increase potential in my career to get a better experience.
              My Interest in Technology are growing day after day.&nbsp;
                <br/>
                <br/>
              <b>I</b> have been practicing programming over a year. 
              I am fluent in Basics like
              <i>
                <b className="purple"> HTML , CSS, Javascript . </b>
              </i>
              <i> I
                also have good skills in {" "}
                <b className="purple">Data Structure and Algorithms.</b>
              </i>
              <br />
              <br />
              Using my knowlege i am developing websites in a Passionated way with creativity in the Frameworks such as 
             <b className="purple"> Node js</b>,
              &nbsp;
              <i>
                <b className="purple">Bootstrap </b>
              </i>
              and
              <i>
                <b className="purple"> React.js .</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid myImage" alt="Avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
