import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Barath P </span>
            from <span className="purple">Tiruppur, TamilNadu, India.</span>
            <br />I am a graduate in Bachelor of Technology from 
            <span className="purple"> Hindusthan College of Engineering and Technology, Coimbatore.</span>
            <br />
            <br />
            Apart from coding, some other Qualities i have!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Enthusiast in Technology
            </li>
            <li className="about-activity">
              <ImPointRight />  A good Listener and Learner.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am a Team Player
            </li>
            <li className="about-activity">
              <ImPointRight /> Communication
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
