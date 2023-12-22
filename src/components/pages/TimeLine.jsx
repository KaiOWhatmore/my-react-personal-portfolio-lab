import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ParentComponent from "./ParentComponent.jsx";
import "./TimeLine.css";
import worldline from "../../images/worldline.png";

const techList = [
  "Java",
  "Spring",
  "Maven",
  "Docker",
  "Bash",
  "PL/SQL",
  "JBoss",
];

const TimeLine = () => {
  return (
    <div className="timeline-container">
      <VerticalTimeline lineColor={"black"} layout={"1-column-left"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent ",
            // border: "2px solid rgb(33, 150, 243)", // Adjust border thickness as needed,
            boxShadow: "0px 0px 10px rgba(33, 150, 243, 0.5)",
            color: "#fff",
            marginLeft: "70px",
            // marginTop: "20px"
          }}
          contentArrowStyle={{
            borderRight: "transparent",
          }}
          date="2022-2023"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            width: "70px",
            height: "70px",
            marginLeft: "-15px", // Half of the width to center the icon
          }}
          icon={
            <img
              src={worldline}
              alt="worldline"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">Worldline</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Java Backend Developer
          </h4>
          <p>Develoepr Tool Creator, Devops, Avante Gardner </p>
          <ParentComponent technologies={techList} />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
