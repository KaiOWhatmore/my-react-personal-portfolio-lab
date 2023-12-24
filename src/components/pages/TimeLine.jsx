import { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ParentComponent from "./ParentComponent.jsx";
import worldline from "../../images/worldline.png";
import medirecords from "../../images/mediRecordsLogo.jpg";
import usyd from "../../images/usyd.jpg";
import btc from "../../images/btc-logo.png";
import seymour from "../../images/seymourCropped.png";
import folioLogo from "../../images/folioLogo2.png";
import "./TimeLine.css";

const elementStylesWork = {
  contentStyle: {
    background: "transparent ",
    // border: "2px solid rgb(33, 150, 243)", // Adjust border thickness as needed,
    boxShadow: "0px 0px 10px #003f5c",
    color: "black",
    marginLeft: "70px",
    // marginTop: "20px"
  },
  iconStyle: {
    background: "rgb(33, 150, 243)",
    color: "#fff",
    width: "70px",
    height: "70px",
    marginLeft: "-15px", // Half of the width to center the icon
  },
  arrowStyle: {
    borderRight: "transparent",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
};

const elementStylesProjects = {
  contentStyle: {
    background: "transparent ",
    boxShadow: "0px 0px 10px rgba(185, 0, 0, 0.5)",
    color: "black",
    marginLeft: "70px",
  },
  iconStyle: {
    background: "rgb(185, 0, 0)",
    color: "#fff",
    width: "70px",
    height: "70px",
    marginLeft: "-15px", // Half of the width to center the icon
  },
  arrowStyle: {
    borderRight: "transparent",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
};

const TimeLine = () => {
  const projectsRef = useRef(null);

  // Smooth scroll to the projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="outer-container">
      <div className="timeline-container">
        <VerticalTimeline lineColor={"black"} layout={"1-column-left"}>
          <div className="work-experience-section">
            <h2>Work Experience</h2>
            <h2 className="jump-to-projects" onClick={scrollToProjects}>
              <button className="">Jump to Projects</button>
            </h2>
          </div>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStylesWork.contentStyle}
            contentArrowStyle={elementStylesWork.arrowStyle}
            date="2022-2023"
            iconStyle={elementStylesWork.iconStyle}
            icon={
              <img
                src={worldline}
                alt="worldline"
                style={elementStylesWork.imageStyle}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Worldline</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Java Backend Developer
            </h4>
            <p>
              Batch Processing, Pipelines, Developer Tool Creator, Devops,
              Avante Gardner{" "}
            </p>
            <ParentComponent
              technologies={[
                "Java",
                "Spring",
                "Maven",
                "Git",
                "Docker",
                "Bash",
                "Jenkins",
                "PL/SQL",
                "JBoss",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStylesWork.contentStyle}
            contentArrowStyle={elementStylesWork.arrowStyle}
            date="2021-2022"
            iconStyle={elementStylesWork.iconStyle}
            icon={
              <img
                src={medirecords}
                alt="medirecords"
                style={elementStylesWork.imageStyle}
              />
            }
          >
            <h4 className="vertical-timeline-element-subtitle">
              <h3 className="vertical-timeline-element-title">MediRecords</h3>
              Junior Java Backend Developer
            </h4>
            <p>FHIR REST APIs, Healthtech, DevOps, Support, ... </p>
            <ParentComponent
              technologies={[
                "Java",
                "Spring",
                "Gradle",
                "Jenkins",
                "Git",
                "Docker",
                "PostgreSQL",
                "FreeMarker",
                "JQuery",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStylesWork.contentStyle}
            contentArrowStyle={elementStylesWork.arrowStyle}
            date="2020-2021"
            iconStyle={elementStylesWork.iconStyle}
            icon={
              <img
                src={btc}
                alt="break-the-chain"
                style={elementStylesWork.imageStyle}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Break The Chain</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Data Engineer, Analyst, Product Advisor
            </h4>
            <p>
              ETL Pipelines, Financial Analysis, Quantitative Product Analysis
            </p>
            <ParentComponent
              technologies={[
                "Python",
                "FBA",
                "Pandas",
                "SciKit Learn",
                "Tableau",
              ]}
            />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStylesWork.contentStyle}
            contentArrowStyle={elementStylesWork.arrowStyle}
            date="2014-2020"
            iconStyle={elementStylesWork.iconStyle}
            icon={
              <img src={usyd} alt="usyd" style={elementStylesWork.imageStyle} />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Mathematics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University Of Sydney
            </h4>
            <p>Set Theory, Mathematic Algorithms, Quantum Mechanics, ...</p>
            <ParentComponent technologies={["MATLAB", "Python"]} />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
          <div ref={projectsRef}>
            <div className="projects-section">
              <h2>Projects</h2>
            </div>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={elementStylesProjects.contentStyle}
              contentArrowStyle={elementStylesProjects.arrowStyle}
              date="2021-Present"
              iconStyle={elementStylesProjects.iconStyle}
              icon={
                <img
                  src={seymour}
                  alt="seymour"
                  style={elementStylesProjects.imageStyle}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Seymour</h3>
              <h4 className="vertical-timeline-element-subtitle">
                A Personal Finances App
              </h4>
              <p>
                <a href="https://developer.up.com.au/">
                  Utilising Up Banks dev API 
                </a>
                &nbsp;with a frontend and backend tech
                stack
              </p>
              <ParentComponent
                technologies={[
                  "Python",
                  "MongoDB",
                  "AWS Lambda",
                  "Firebase",
                  "React",
                  "CSS",
                  "HTML",
                ]}
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={elementStylesProjects.contentStyle}
              contentArrowStyle={elementStylesProjects.arrowStyle}
              date="2023-Present"
              iconStyle={elementStylesProjects.iconStyle}
              icon={
                <img
                  src={folioLogo}
                  alt="seymour"
                  style={elementStylesProjects.imageStyle}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Personal Portfolio
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                An SPA that you're browsing this very moment
              </h4>
              <p>
                Deployed on a Google firebase service, this webpage displays my
                interests and is hopefully a gateway for working with some cool
                people
              </p>
              <ParentComponent
                technologies={["React", "CSS", "HTML", "Firebase"]}
              />
            </VerticalTimelineElement>
          </div>
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default TimeLine;
