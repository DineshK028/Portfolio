// Full rewritten React portfolio file with updated tech stacks
import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaExternalLinkAlt,
  FaJava,
  FaCode,
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaServer,
  FaBrain,
  FaBriefcase,
  FaLightbulb,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import Navbar from "./components/Navbar";

// Theme colors
const theme = {
  primary: "#007bff",
  primaryDark: "#0056b3",
  secondary: "#6c757d",
  background: "#1a1a1a",
  cardBg: "#2d2d2d",
  text: "#ffffff",
  lightText: "#b3b3b3",
  white: "#ffffff",
  hoverBg: "#3d3d3d",
  border: "#404040",
  projectAccent: "#00bcd4",
  projectAccentDark: "#00838f",
  projectTagBg: "#00505b",
  projectTagText: "#80deea",
};

const AppContainer = styled.div`
  font-family: "Arial", sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 80px;
  background-color: ${theme.background};
  min-height: 100vh;
`;

const Card = styled.div`
  background: ${theme.cardBg};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  border: 1px solid ${theme.border};

  &:hover {
    transform: translateY(-5px);
  }
`;

const AboutCard = styled(Card)`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const AboutContent = styled.div`
  flex: 1;
`;

const NameText = styled.h1`
  color: ${theme.primary};
  margin-bottom: 0.5rem;
  font-size: 3.5rem;
`;

const TitleText = styled.h2`
  color: ${theme.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const RoleTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.text};
  font-size: 1rem;

  svg {
    color: ${theme.primary};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillItem = styled.div`
  background: #2a2a2a;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-5px);
  }

  svg {
    font-size: 2.5rem;
    color: #00ff88;
  }

  span {
    font-size: 0.9rem;
    color: #ffffff;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
`;

const ProjectCard = styled.div`
  background: ${theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid ${theme.border};
  text-align: left;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: ${theme.projectAccent};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.text};
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: ${theme.projectAccent};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.projectAccentDark};
    transform: translateY(-2px);
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: ${theme.projectTagBg};
  color: ${theme.projectTagText};
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${theme.projectTagBg};
`;

const ContactSection = styled(Card)`
  text-align: center;

  h2 {
    color: ${theme.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${theme.text};
    margin-bottom: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: ${theme.primary};
  font-size: 1.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.primaryDark};
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 40px 0;
  margin: 20px 0;
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${theme.primary};
  color: ${theme.white};
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    background-color: ${theme.primaryDark};
    transform: translateY(-2px);
  }
`;

const ViewMoreButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

function App() {
  const projectDescription1 =
    "Developed a CNN model using TensorFlow and Keras to identify rice leaf diseases with 96% accuracy.";
  const projectDescription2 =
    "A Note App with CRUD operations, authentication, and MySQL backend using JEE and Hibernate.";
  const projectDescription3 =
    "Real-time collaborative IDE with Socket.io, React.js, and live sync features.";

  return (
    <>
      <Navbar />
      <AppContainer>
        <Section id="home">
          <AboutCard>
            <AboutContent>
              <NameText>Hey I'm Dinesh</NameText>
              <TitleText>Java Developer</TitleText>

              <RoleContainer>
                <RoleTag>
                  <FaBrain /> ML Enthusiast
                </RoleTag>
                <RoleTag>
                  <FaBriefcase /> Full Stack Developer
                </RoleTag>
                <RoleTag>
                  <FaLightbulb /> Problem Solver
                </RoleTag>
              </RoleContainer>

              <p>
                Software Engineer skilled in Java Full Stack Development and Machine Learning.
                Passionate about building efficient applications and solving real-world problems.
              </p>

              <Button href="/dinesh_Resume.pdf" target="_blank">
                View Resume <FaExternalLinkAlt />
              </Button>
            </AboutContent>
          </AboutCard>
        </Section>

        <Section id="skills">
          <Card>
            <h2>Skills</h2>
            <SkillsGrid>
              {/* Programming Languages */}
              <SkillItem><FaJava /><span>Java</span></SkillItem>
              <SkillItem><FaPython /><span>Python</span></SkillItem>
              <SkillItem><FaCode /><span>SQL</span></SkillItem>
              <SkillItem><FaJs /><span>JavaScript</span></SkillItem>

              {/* Advanced Java & Backend */}
              <SkillItem><FaJava /><span>Advanced Java</span></SkillItem>
              <SkillItem><FaJava /><span>JEE</span></SkillItem>
              <SkillItem><FaServer /><span>Hibernate</span></SkillItem>
              <SkillItem><FaServer /><span>Spring</span></SkillItem>
              <SkillItem><FaServer /><span>Spring Boot</span></SkillItem>

              {/* Frontend */}
              <SkillItem><FaReact /><span>React.js</span></SkillItem>

              {/* Frameworks */}
              <SkillItem><FaServer /><span>Flask</span></SkillItem>

              {/* Databases */}
              <SkillItem><FaServer /><span>MySQL</span></SkillItem>
              <SkillItem><SiMongodb /><span>MongoDB</span></SkillItem>

              {/* Tools */}
              <SkillItem><FaCode /><span>Git</span></SkillItem>
              <SkillItem><FaGithub /><span>GitHub</span></SkillItem>
              <SkillItem><FaCode /><span>Maven</span></SkillItem>
              <SkillItem><FaServer /><span>Docker</span></SkillItem>

              {/* IDEs */}
              <SkillItem><FaCode /><span>Eclipse IDE</span></SkillItem>
              <SkillItem><FaCode /><span>VS Code</span></SkillItem>

              {/* Notebook */}
              <SkillItem><FaBrain /><span>Google Colab</span></SkillItem>
            </SkillsGrid>
          </Card>
        </Section>

        <Section id="projects">
          <Card>
            <h2>Projects</h2>
            <ProjectsGrid>
              <ProjectCard>
                <h3>Rice Disease Predictor</h3>
                <p>{projectDescription1}</p>
                <TechStack>
                  <TechTag>Python</TechTag>
                  <TechTag>TensorFlow</TechTag>
                  <TechTag>Keras</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href="https://github.com/DineshK028/Rice-Disease" target="_blank"><FaGithub /></ProjectLink>
                </ProjectLinks>
              </ProjectCard>

              <ProjectCard>
                <h3>Note App</h3>
                <p>{projectDescription2}</p>
                <TechStack>
                  <TechTag>JEE</TechTag>
                  <TechTag>Hibernate</TechTag>
                  <TechTag>MySQL</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href="https://github.com/DineshK028/noteapp" target="_blank"><FaGithub /></ProjectLink>
                  <ProjectLink href="https://noteapp-henna-ten.vercel.app/" target="_blank"><FaExternalLinkAlt /></ProjectLink>
                </ProjectLinks>
              </ProjectCard>

              <ProjectCard>
                <h3>Collab IDE</h3>
                <p>{projectDescription3}</p>
                <TechStack>
                  <TechTag>React.js</TechTag>
                  <TechTag>Socket.io</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href="https://github.com
