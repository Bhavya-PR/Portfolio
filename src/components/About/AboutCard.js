import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhavya PR </span>
            from <span className="purple"> Coimbatore, India.</span>
            <br />
            I am currently pursuing 3rd year of 5 year Integrated M.Sc. Software Systems at the 
            Department of Applied Mathematics and Computational Sciences at PSG College of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make sure you won't give up!"{" "}
          </p>
          <footer className="blockquote-footer">Bhavya Pandurangan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
