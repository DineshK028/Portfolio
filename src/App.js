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
  FaBriefcase, // For Full Stack Developer icon
  FaLightbulb, // For Problem Solver icon
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
  // New colors for projects
  projectAccent: "#00bcd4", // Teal for titles and links
  projectAccentDark: "#00838f", // Darker teal for hover
  projectTagBg: "#00505b", // Very dark teal for tag background
  projectTagText: "#80deea", // Lighter teal for tag text
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

// Styled components for the About section text
const NameText = styled.h1`
  color: ${theme.primary};
  margin-bottom: 0.5rem;
  font-size: 3.5rem; /* Increased font size for name */
`;

const TitleText = styled.h2`
  color: ${theme.lightText};
  margin-bottom: 1.5rem; /* Increased margin for the gap below Java Developer */
  font-size: 1.8rem; /* Smaller font size for title */
`;

const RoleContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping for smaller screens */
  gap: 1.5rem; /* Gap between role tags on the same line */
  margin-bottom: 1.5rem; /* Space before the paragraph */
`;

const RoleTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.text}; /* Text color for roles */
  font-size: 1rem;

  svg {
    color: ${theme.primary}; /* Icon color */
  }
`;

// Removed ProfileImage styled component as it's no longer needed.

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
  text-align: left; /* Aligned content to the left */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: ${theme.projectAccent}; /* Changed color */
    margin-bottom: 0.5rem;
  }

  p {
    color: ${theme.text};
    margin-bottom: 1rem;
    font-size: 1.1rem; /* Increased font size for the paragraph */
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  color: ${theme.projectAccent}; /* Changed color */
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.projectAccentDark}; /* Changed hover color */
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
  background: ${theme.projectTagBg}; /* Changed background */
  color: ${theme.projectTagText}; /* Changed text color */
  padding: 0.3rem 0.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${theme.projectTagBg}; /* Changed border color */
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
  padding: 40px 0; /* Decreased padding */
  margin: 20px 0; /* Decreased margin */
`;

const Button = styled.a`
  display: inline-block;
  background-color: ${theme.primary};
  color: ${theme.white};
  padding: 0.6rem 1.2rem; /* Smaller padding */
  border-radius: 20px; /* More rounded border */
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.9rem; /* Smaller font size for button text */

  &:hover {
    background-color: ${theme.primaryDark};
    transform: translateY(-2px);
  }
`;

// New styled component for the "View More Projects" button container
const ViewMoreButtonContainer = styled.div`
  text-align: center;
  margin-top: 2rem; /* Space above the button */
`;

function App() {
  // Original, distinct descriptions for each project, now ensuring consistent length
  const projectDescription1 =
    "Developed a Deep Learning model using Convolutional Neural Networks (CNN) with TensorFlow and Keras to accurately identify diseases in rice plant leaves, achieving 96% accuracy. Processed 5,000+ labeled images and implemented image preprocessing techniques.";
  const projectDescription2 =
    "Built a comprehensive Note App enabling users to create, read, update, and delete notes. Features include user authentication, rich text editing, and cloud synchronization.";
  const projectDescription3 =
    "A real-time collaborative IDE that allows multiple users to code together simultaneously. Features include syntax highlighting, real-time cursor position, and integrated chat.";

  return (
    <>
      <Navbar />
      <AppContainer>
        <Section id="home">
          <AboutCard>
            {/* Removed ProfileImage component */}
            <AboutContent>
              <NameText> Hey I'm Dinesh</NameText>
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
                Software Engineer with a strong foundation in full-stack
                development and a growing expertise in Machine Learning.
                Passionate about building scalable applications, solving
                real-world problems, and delivering intuitive user experiences
                through innovative technology.{" "}
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
              <SkillItem>
                <FaJava />
                <span>Java</span>
              </SkillItem>
              <SkillItem>
                <FaCode />
                <span>C</span>
              </SkillItem>
              <SkillItem>
                <FaPython />
                <span>Python</span>
              </SkillItem>
              <SkillItem>
                <FaJs />
                <span>JavaScript</span>
              </SkillItem>

              {/* Frontend */}
              <SkillItem>
                <FaReact />
                <span>React.js</span>
              </SkillItem>
              <SkillItem>
                <FaHtml5 />
                <span>HTML5</span>
              </SkillItem>
              <SkillItem>
                <FaCss3Alt />
                <span>CSS3</span>
              </SkillItem>
              <SkillItem>
                <SiTailwindcss />
                <span>Tailwind CSS</span>
              </SkillItem>

              {/* Backend */}
              <SkillItem>
                <FaNodeJs />
                <span>Node.js</span>
              </SkillItem>
              <SkillItem>
                <SiExpress />
                <span>Express.js</span>
              </SkillItem>
              <SkillItem>
                <FaServer />
                <span>Flask</span>
              </SkillItem>
              <SkillItem>
                <SiMongodb />
                <span>MongoDB</span>
              </SkillItem>

              {/* Data Science & ML */}
              <SkillItem>
                <FaBrain />
                <span>Machine Learning</span>
              </SkillItem>
            </SkillsGrid>
          </Card>
        </Section>

        <Section id="projects">
          <Card>
            <h2>Projects</h2>
            <ProjectsGrid>
              <ProjectCard>
                <h3>Rice Plant Leaf Disease Predictor</h3>
                <p>{projectDescription1}</p>
                <TechStack>
                  <TechTag>Python</TechTag>
                  <TechTag>TensorFlow</TechTag>
                  <TechTag>Keras</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/DineshK028/Rice-Disease"
                    target="_blank"
                  >
                    <FaGithub />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectCard>

              <ProjectCard>
                <h3>Note App</h3>
                <p>{projectDescription2}</p>
                <TechStack>
                  <TechTag>React.js</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>MongoDB</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/DineshK028/noteapp"
                    target="_blank"
                  >
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink
                    href="https://noteapp-henna-ten.vercel.app/"
                    target="_blank"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectCard>

              <ProjectCard>
                <h3>Collab IDE</h3>
                <p>{projectDescription3}</p>
                <TechStack>
                  <TechTag>React.js</TechTag>
                  <TechTag>Socket.io</TechTag>
                  <TechTag>Express.js</TechTag>
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/DineshK028/CollabIDE"
                    target="_blank"
                  >
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink
                    href="https://collab-and-code-conquer-01.onrender.com/"
                    target="_blank"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectCard>
            </ProjectsGrid>
            <ViewMoreButtonContainer>
              <Button
                href="https://github.com/DineshK028?tab=repositories"
                target="_blank"
              >
                View More Projects <FaExternalLinkAlt />
              </Button>
            </ViewMoreButtonContainer>
          </Card>
        </Section>

        <Section id="contact">
          <ContactSection>
            <h2>Get In Touch</h2>
            <p>
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <SocialLinks>
              <SocialIcon href="mailto:dineshkarajagi22@gmail.com">
                <FaEnvelope />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/in/dinesh-karajagi-a7332924a"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/DineshKarajagi"
                target="_blank"
              >
                <FaGithub />
              </SocialIcon>
            </SocialLinks>
          </ContactSection>
        </Section>
      </AppContainer>
    </>
  );
}

export default App;
