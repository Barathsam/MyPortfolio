import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { Type } from "./Type";
import "./Home.css";
export const Home = () => {
  return (
    <>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15,textAlign: 'center' }} className="heading">
                  Hi There! <span className="wave">👋🏻</span> 
                  
                </h1>
                  <h1 style={{ paddingBottom: 15, textAlign: 'center'}} className="heading">
                  Welcome to MY Portfolio!!  
                </h1>
                <h1 className="heading-name"style={{ padding: 15, textAlign: "center" }}>
                     I'M
                  <strong className="main-name"> &nbsp;BARATH</strong>
                </h1>
                <div style={{ padding: 10, textAlign: "center" }}>
                  <Type />
                </div>

                <div style={{ padding:15, textAlign: "center" }}>
                  <ul className="home-about-social-links">
                   <li className="social-icons" >
                    <a
                        href="https://github.com/Barathsam/Barathsam"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        
                    >
                      <div>
                        <AiFillGithub />
                        <p >GITHUB </p>
                      </div>
                         
                    </a>
                </li>
                <li className="social-icons" >
                    <a
                        href="https://www.linkedin.com/in/barath-sam-b7ba841b9/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        
                    >
                       <div>
                        <FaLinkedinIn />
                        <p >LINKEDIN</p> 
                      </div>
                         
                    </a>
                </li>
               
                <li className="social-icons" >
                    <a
                        href="https://drive.google.com/file/d/1E1D_q06hfcICdZJ-zzDlkPFnAXjIniPT/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        id="resumelink"
                        
                    >
                      <div>
                        <GrResume />
                       <p >RESUME </p>  
                      </div>
                    </a>
                </li>
               
                </ul>
                </div>
              </Col>
             
            </Row>
          </Container>
        </Container>
    </>
  );
};
