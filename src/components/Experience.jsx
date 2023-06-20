import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experinece }) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      date={experinece.date}
      iconStyle={{ background: experinece.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experinece.icon}
            alt={experinece.company}
            className="w-[60%] h-[60%]             object-contain
"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experinece.title}</h3>
        <p
          className=" text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experinece.company}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experinece.points.map((point, index) => (
          <li
            key={`experinece.point - ${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Experinece</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experinece, index) => (
            <ExperienceCard key={index} experinece={experinece} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
