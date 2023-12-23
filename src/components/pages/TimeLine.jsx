import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ParentComponent from "./ParentComponent.jsx";
import worldline from "../../images/worldline.png";
import medirecords from "../../images/medirecords.webp";
import usyd from "../../images/usyd.jpg";
import btc from "../../images/btc-logo.png";
import "./TimeLine.css";

const techList = [
  "Java",
  "Spring",
  "Maven",
  "Docker",
  "Bash",
  "PL/SQL",
  "JBoss",
];

const elementStyles = {
  contentStyle: {
    background: "transparent ",
    // border: "2px solid rgb(33, 150, 243)", // Adjust border thickness as needed,
    boxShadow: "0px 0px 10px rgba(33, 150, 243, 0.5)",
    color: "black",
    marginLeft: "70px",
    // marginTop: "20px"
  },
  workIconStyle: {
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

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline lineColor={"black"} layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={elementStyles.contentStyle}
          contentArrowStyle={elementStyles.arrowStyle}
          date="2022-2023"
          iconStyle={elementStyles.workIconStyle}
          icon={
            <img
              src={worldline}
              alt="worldline"
              style={elementStyles.imageStyle}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Worldline</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Java Backend Developer
          </h4>
          <p>
            Batch Processing, Pipelines, Developer Tool Creator, Devops, Avante
            Gardner{" "}
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
          contentStyle={elementStyles.contentStyle}
          contentArrowStyle={elementStyles.arrowStyle}
          date="2021-2022"
          iconStyle={elementStyles.workIconStyle}
          icon={
            <img
              src={medirecords}
              alt="medirecords"
              style={elementStyles.imageStyle}
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
          contentStyle={elementStyles.contentStyle}
          contentArrowStyle={elementStyles.arrowStyle}
          date="2020-2021"
          iconStyle={elementStyles.workIconStyle}
          icon={
            <img
              src={btc}
              alt="break-the-chain"
              style={elementStyles.imageStyle}
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
          contentStyle={elementStyles.contentStyle}
          contentArrowStyle={elementStyles.arrowStyle}
          date="2014-2020"
          iconStyle={elementStyles.workIconStyle}
          icon={<img src={usyd} alt="usyd" style={elementStyles.imageStyle} />}
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
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
