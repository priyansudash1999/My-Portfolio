import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from "framer-motion"
import {styles} from "../style"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import {SectionWrapper} from "../hoc/index"



const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full xs:m-auto">
       <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.5)} className='w-full green-pink-gradient p-[1px] rounded-[25px] shadow-card'>
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[25px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
       </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.dev variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.dev>
      <motion.p variants={fadeIn("", "", 0,1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
        I am a skilled frontend developer with expertise in creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js. Proficient in advanced tools and frameworks like Next.js, Tailwind CSS, and Material UI, I build visually appealing and optimized web applications. With hands-on experience in backend technologies like Python and Django, along with API integration using Axios and Postman, I ensure seamless functionality across applications. Adept in version control with GitHub and familiar with TypeScript for type-safe development, I am a motivated self-learner with a strong foundation in building modern, dynamic web solutions.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")