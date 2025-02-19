import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Alzhemeir.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/Face.png";
import chatify from "../../Assets/Projects/Chatbot.png";
import suicide from "../../Assets/Projects/Todo.png";
import bitsOfCode from "../../Assets/Projects/weather.png";

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
              imgPath={chatify} //chatbot
              isBlog={false}
              title="AI Teaching Assistant"
              description="I developed an AI-powered workshop chatbot using Streamlit as the front end and LangChain for the backend. It acted as a virtual assistant, answering attendee questions and providing details about workshop topics. For storing and retrieving information, I used Pinecone, a vector database."
              // ghLink="https://github.com/Lavan02/Project-Name"
              // demoLink="https://project-name/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode} //weather
              isBlog={false}
              title="Weather Forecast"
              description="Developed a simple weather forecast application with a dynamic UI using React or Streamlit. The backend was built with Flask or FastAPI to handle API requests, and weather data was sourced from OpenWeatherMap API. The application was hosted on Vercel."
              //ghLink="https://github.com/Lavan02/Project-Name"
             // demoLink="https://blogs.lavan"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} //face reco
              isBlog={false}
              title="Facial Recognition"
              description="Developed an **AI-Based Facial Recognition System** using **Python, TensorFlow, scikit-learn, and OpenCV**. The system could detect and recognize faces, applying machine learning for accurate identification."
              //ghLink="https://github.com/"
              //demoLink="https://Project-name/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}  //Alzeh
              isBlog={false}
              title="Alzheimer Disease Classification"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              // ghLink="https://github.com/Lavan02/Project-Name"
              // demoLink="https://project-name/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide} //To do
              isBlog={false}
              title="To-Do App"
              description="Developed a simple **To-Do App** using **HTML, CSS, JavaScript, and React**. Users can add, edit, delete, and mark tasks as completed, making task management easy and efficient."
              //ghLink="https://github.com/Lavan02/Project-Name"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              //ghLink="https://github.com/Lavan02/Project-Name"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
