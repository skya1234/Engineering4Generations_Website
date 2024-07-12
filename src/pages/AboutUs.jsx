import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import "./AboutUs.css";
import "/src/fontstyles.css";

function AboutUs() {
    return (
        <div className="about-us">
            <Card className="header-card text-center">
                <Card.Title className="poppins-extrabold-italic">About Us</Card.Title>
            </Card>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <Card className="mission-card text-left">
                            <Card.Title className="poppins-bold-italic card-title text-center">Our Mission</Card.Title>
                            <Card.Text className="poppins-regular text-description">Is your middle school child interested in learning the basics of engineering?</Card.Text>
                            <Card.Text className="poppins-regular text-description">We are Engineering 4 Generations, a group of advanced Dublin High School Engineering Academy students, including several World Championship competitors in the VEX Robotics Competition.</Card.Text>
                            <Card.Text className="poppins-regular text-description">We’ve put together a two-week FREE engineering program for middle schoolers. Our program will teach your child basic principles of engineering, such as mechanical advantages, forces, and basic coding, through interactive lessons with hands-on projects.</Card.Text>
                            <Card.Text className="poppins-regular text-description">Our pilot session will be held July 15 - July 27 and meets Monday, Wednesday, and Friday - 10 AM to 2:30 PM and Saturday - 10 AM to 1 PM at a house near Emerald Glen Park (address to be shared with those accepted to the program). The schedule includes time for breaks, but students will need to bring their own lunch and snacks.</Card.Text>
                            <Card.Text className="poppins-regular text-description">There is limited capacity in this FREE program. If your child is interested in applying, please complete this <a href="https://forms.gle/c72LmD5egtPKZDad6" target="_blank" rel="noopener noreferrer">Google form</a>. The application deadline is this Friday, July 12 at 11:59 PM. We will email acceptance decisions on Saturday, July 13.</Card.Text>
                            <Card.Text className="poppins-regular text-description">If you have any questions, please email dnloojr@gmail.com.</Card.Text>
                            <Row className = "text-center">
                                <Col>
                                    <Card.Img className = "card-image" src = "src/images/e4g_img1.png"/>
                                </Col>
                                <Col>    
                                    <Card.Img className = "card-image" src = "src/images/e4g_img2.png"/>
                                </Col>
                                <Col>    
                                    <Card.Img className = "card-image" src = "src/images/e4g_img3.png"/>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}

export default AboutUs;
