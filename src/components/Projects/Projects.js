import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Inventory from "../../Assets/Projects/Inventory.jpeg";
import crypto from "../../Assets/Projects/crypto.jpg";
import Aurora from "../../Assets/Projects/Aurora.jpeg";
import luxeVisita from "../../Assets/Projects/LuxeVisita.jpg";
import Shop from "../../Assets/Projects/Shop_Track.jpg";
import EchoChat from "../../Assets/Projects/EchoChat.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={luxeVisita}
              isBlog={false}
              title="LuxeVisita"
              description="A Python-powered web app for efficient hotel management. It streamlines operations and enhances user experience. Built with SDLC principles for a structured approach."
              ghLink="https://github.com/Bhavya-PR/LuxeVisita"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EchoChat}
              isBlog={false}
              title="EchoChat"
              description="Built and deployed a real-time chat app using MERN stack with Socket.io for instant messaging, JWT for authentication, and React Context for online status. Designed a responsive UI with TailwindCSS and Daisy UI, and developed a secure, scalable backend with Node.js and Express."
              ghLink="https://github.com/Bhavya-PR/EchoChat"
              demoLink="https://chatapplication-xu8n.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Aurora}
              isBlog={false}
              title="Aurora Music App"
              description="Aurora is an interactive music streaming app built with PHP, HTML, and CSS, offering a seamless experience with dynamic playlists, user authentication, and a sleek, responsive design."
              ghLink="https://github.com/ArulKevin2004/Aroura-music-app"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Inventory}
              isBlog={false}
              title="Inventory Trail"
              description=" A Python-based Machine learning system that analyzes stock trends using ant colony optimization algorithms.Optimizes stock patterns for accurate predictions by combining biological techniques with trend analysis"
              ghLink="https://github.com/Bhavya-PR/InventoryTrail"
              demoLink="https://inventorytrail-9xokhl4kxzjraqfthwg7rr.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shop}
              isBlog={false}
              title="Shop Track"
              description="ShopTrack is a Java-based inventory management system that helps shops track stock availability efficiently.It ensures real-time updates, reducing stock shortages and overstocking. With a user-friendly interface, managing inventory becomes seamless and hassle-free. "
              ghLink="https://github.com/Bhavya-PR/ShopTrack"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Details"
              description="CryptoDetails is a Python app that fetches real-time Bitcoin data from an API.It displays key details like price, trends, and market insights.Simple and efficient, it keeps users updated instantly."
              ghLink="https://github.com/Bhavya-PR/CryptoDetails"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
