import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import "./Team.css";
import "/src/fontstyles.css";



const teamCards = [
  {
    id: crypto.randomUUID(),
    name: "Sky Aniszewski",
    role: "Team Member",
    imageName: "sky.jpg",
    description:
      "I'm Sky Aniszewski, a senior at Dublin High School studying computer science. In my free time I like to code video games and also go to the gym. I am the web developer for E4G and teach coding during our camps.",
  },
  {
    id: crypto.randomUUID(),
    name: "David Loo",
    role: "Team Member",
    imageName: "david.jpg",
    description:
      "Hello! My name is David Loo and I am a rising Senior at Dublin High. I am the founder for E4G because I want to be able to spread information to a younger audience that get more expereince before learning things in high school. My goal is to become a mechanical engineer and be able to make crazy inventions. I am happy and looking forward to helping out younger kids!",
  },
  {
    id: crypto.randomUUID(),
    name: "Jayden Musset",
    role: "Team Member",
    imageName: "jaden.jpg",
    description:
      "Hello, my name is Jayden Musset and I am a rising senior at DHS. For 3 years, I have been a part of the Gael Force Robotics club and the DHS Track and Field teams. I joined E4G to help encourage younger generations to explore different engineering principles along with share my experience from robotics.",
  },
  {
    id: crypto.randomUUID(),
    name: "Aiden Wang",
    role: "Team Member",
    imageName: "aiden.jpg",
    description:
      "Hello! My name is Aiden Wang, and I am an incoming Junior at Dublin High School. I’m helping with E4G because I want to share my knowledge of engineering and programming. I want to be an AI researcher in the future and I look forward to teaching younger kids!",
  },
  {
    id: crypto.randomUUID(),
    name: "Kaito Suzuki",
    role: "Team Member",
    imageName: "kaito.jpg",
    description:
      "Hi, my name is Kaito Suzuki, a rising senior at Dublin High. I have deep experiences in engineering and computer science through courses, robotics, and activities. Helping others explore their interest in STEM is my passion.",
  },
];

function Team() {
  return (
    <div className="team">
      <Card className="header-card text-center">
        <Card.Title className="poppins-extrabold-italic">Our Team</Card.Title>
      </Card>

      <Container>
        <Row xs={2} md={2}>
          {teamCards.map((card) => {
            
            return (
              <Col key={card.id}>
                <Card className="text-center list-card">
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={"/profileimages/" + card.imageName}
                    alt={card.name}
                  />
                  <Card.Body>
                    <Card.Title className="poppins-semibold title-name">
                      {card.name}
                    </Card.Title>
                    <Card.Title className="poppins-semibold title-role">
                      {card.role}
                    </Card.Title>
                    <Card.Text className="poppins-regular text-description">
                      {card.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Team;
