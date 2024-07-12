import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./Home.css";
import "/src/fontstyles.css";

import Calendar from "/src/Calendar";

import CardBG from "../images/homebg.jpg"

function Home() {
    return (
        <>
            <Card className="bg-dark text-white home-card">
                <Card.Img src={CardBG} alt="Card image" className="green-darken-image"></Card.Img>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Card.Title className="poppins-extrabold-italic header">Engineering 4 Generations</Card.Title>
                    <Card.Text className="poppins-light sub-header">An engineering education program based in Dublin, CA</Card.Text>
                    <Card.Text className="poppins-light sub-header">
                        <span>Reach out to us at: </span>
                        <a href="mailto:dnloojr@gmail.com" className="email-link">dnloojr@gmail.com</a>
                    </Card.Text>
                    <Button variant="outline-light" className="poppins-medium" onClick={() => window.open('https://forms.gle/c72LmD5egtPKZDad6', '_blank')}>Sign Up</Button>
                </Card.ImgOverlay>
            </Card>
            
            <Container className="schedule-container">
                <Row>
                    <Col>
                        <Card className="schedule-card text-center">
                            <Card.Title className="poppins-bold-italic schedule-title">Schedule</Card.Title>
                            <Calendar />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;