import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
// import donmovies from "../Assets/donmovies.png";
import chatapp from "../Assets/chatapp.png";
import ckeeper from "../Assets/ckeeper.png";
import hero from "../Assets/hero.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiBootstrap,DiNodejs,DiMongodb } from "react-icons/di";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
    return (
        
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={hero} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Hero
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Hero is an e-commerce website where user can buy products in categories having all the necessary features like the Add to car, Payment through paypal or card, filtering the products, sorting according to prices, with proper user authentication and authorization. There is an admin panel where admin can add new categories of products with specifications and can update the previous product.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiNodejs className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <DiBootstrap className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Barathsam/E-commerce-FrontEnd"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> FrontEnd
                                </Button> <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Barathsam/E-commerce-BackEnd"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> BackEnd
                                </Button>

                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://hero-ecommerce.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
        
                                </Button> 
                                 <br/>
                                <div className="credentials"  >
                                    <Card.Title style={{ fontWeight: "800",paddingTop:"25px" }}>
                                        DEMO CREDENTIALS 
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                    Admin Login : admin@gmail.com <br/>
                                    Admin Password : admin@gmail.com <br/>
                                    <br/>
                                    Customer Login : user1@gmail.com <br/>
                                    Customer Password : user1@gmail.com <br/>
                                    </Card.Text>
                                </div>
                                      
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={chatapp} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Chat App
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    Chat App allows users to register and login themself to communicate with the other users which is enlisted in chat list. To make the chat interactive, emojis are included to have fun chat. When the communication is done users can logout their chat anytime.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiNodejs className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/Barathsam/chat-App-FrontEnd"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> FrontEnd
                                </Button> <Button
                                    variant="primary"
                                    href="https://github.com/Barathsam/chat-App-BackEnd"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> BackEnd
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://chatapp-website.netlify.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                                <br/>
                                <div className="credentials"  >
                                    <Card.Title style={{ fontWeight: "800",paddingTop:"25px" }}>
                                        DEMO CREDENTIALS 
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                    User1 Username : user1<br/>
                                    User1 Password : Password@1 <br/>
                                    <br/>
                                    User2 Username : User2 <br/>
                                    User2 Password : Password@1 <br/>
                                    </Card.Text>
                                </div>
    
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={ckeeper} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    CKeeper
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                        Ckeeper is a website where users can save their contacts online with user authentication and authorization. The users can choose whether the contact is professional or personal to avoid confusion. The contacts that are updated can be modified or deleted according to users preference.          
                                 </Card.Text>
                                <div className="Techstacks">
                                    <DiNodejs className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Barathsam/Contact_Saver"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://contact-saver-app.netlify.app"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                                 <br/>
                                <div className="credentials"  >
                                    <Card.Title style={{ fontWeight: "800",paddingTop:"25px" }}>
                                        DEMO CREDENTIALS 
                                    </Card.Title>
                                    <Card.Text style={{ textAlign: "center" }}>
                                    User1 Login : user1@gmail.com <br/>
                                    User1 Password : user1@gmail.com <br/>
                                    <br/>
                                    User2 Login : admin@gmail.com <br/>
                                    User2 Password : Admin@123 <br/>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img
                                variant="top"
                                src={donmovies}
                                alt="Clockify Clone"
                            />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    DonMovies
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                    DonMovies website allows user to download movies from online. The movies are divided into hollywood, series etc.. There is an admin panel where admin can login to add movie's downloading link, screenshot, movie name etc.. Search option is included to filter the movie. 
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiNodejs className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <DiBootstrap className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiReact className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Barathsam/Movie-website"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://don-movies.herokuapp.com/#/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                                 <br/>
                                <div className="credentials" style={{ textAlign:"center" }} >
                                    <Card.Title style={{ fontWeight: "800",paddingTop:"25px" }}>
                                        DEMO CREDENTIALS 
                                    </Card.Title>
                                    <Card.Text style={{ textAlign:"center" }}>
                                    Admin Login : admin@gmail.com <br/>
                                    Admin Password : admin <br/>
                                    Admin Key : 555
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col> */}
                    <Col md={6}></Col>
                </Row>
            </Container>
        </Container>
    );
};
