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
               Hi Everyone, I am <span className="purple">Barath P. </span>
              <b>I</b> am a graduate with a 
              <i>
                <b className="purple">  B.Tech </b>
              </i> in <i>
                <b className="purple">  Information Technology </b>
              </i>. During my academic years, I have gained a solid foundation in 
              <i>
                <b className="purple"> computer science and web development</b>
              </i> concepts, and have dedicated my time to apply these concepts in practical applications.

                <i>
                <b className="purple"> <b>I</b> have hands-on experience in all my skills through various projects.</b>
              </i>  I have also familiar with modern frameworks such as
                 <i>
                <b className="purple">  React.js.</b>
              </i> I am passionate about web development and enjoy creating
               <i>
                <b className="purple">  innovative and user-friendly designs.</b>
              </i>
              As a 
               <i>
                <b className="purple"> fresher, </b>
              </i>
               I am eager to apply my knowledge and grow professionally. I am quick to learn new technologies and can adapt to changing environments.
               I believe that my 
               <i>
                <b className="purple"> passion for web development</b>
              </i> and my ability to work collaboratively in a team make me a strong candidate for the Web Developer position.&nbsp;
                <br/>
                <br/>
                          
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
