import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import {motion} from "framer-motion"
import { styles } from "../style"
import {experiences} from "../constants/index"
import {SectionWrapper} from "../hoc"
import { textVariant } from '../utils/motion'


const ExperienceCard =({exp}) => (
  <VerticalTimelineElement
    contentStyle={{background: '#915eff', color: "white"}}
    contentArrowStyle={{borderRight:'7px solid #b6a28e'}}
    date={exp.date}
    iconStyle={{background: exp.iconBg}}
    icon = {
      <div className='flex items-center justify-center h-full w-full'>
        <img src={exp.icon} alt={exp.title} className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>
        {exp.title}
      </h3>
      <p className='text-secondary text-[16px] font-bold m-0'>
        {exp.company_name}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {exp.points.map((point, ind) => (
        <li className='text-white-100 text-[14px] pl-1 tracking-wider' key={`experience-point-${ind}`}>
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}

      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experiences</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "works")