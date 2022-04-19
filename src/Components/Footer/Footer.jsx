import React from "react";
import { Row } from "react-bootstrap";
import "./Footer.css";
import {
    AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
export const Footer = () => {
    return (
        <Row md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
                Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
                <li className="social-icons">
                    <a
                        href="https://github.com/Barathsam/"
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
                <li className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/barath-sam-b7ba841b9/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                    >
                        <div>
                        <FaLinkedinIn />
                        <p >LINKEDIN </p>
                      </div>
                    </a>
                </li>
               
                <li className="social-icons">
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
        </Row>
    );
};
