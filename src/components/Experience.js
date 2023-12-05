import React from 'react'
import {useScroll, motion, offset} from "framer-motion"
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Detail = ({position, company, comapnyLink, time, address, work}) =>
{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'> 
            {position}&nbsp;<a href={comapnyLink}
            target="_blank"
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
            {work}
            </p>
            
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:bm-16 '>
        Experience
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

<motion.div style={{scaleY: scrollYProgress}} 
className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
md:w-[2px] md:left-[30px] xs:left-[20px]'
/>


            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'> 
                <li>
                    <Detail
                    position="Web Developer" company="University College Hospital"
                    companyLink="http://uch-ibadan.org.ng/"
                    time="2017-Present" address="Queen Elizabeth I I Road, Agodi 200285, Ibadan, Oyo"
                    work="
                    •	Collaborated with designers to create engaging user interfaces, ensuring seamless navigation and intuitive user experiences.
•	Integrated e-commerce functionality using platforms like WooCommerce, enabling secure online transactions and streamlined product management.
•	Created and maintained custom WordPress themes and plugins, providing clients with unique and tailored solutions.
•	Implemented search engine optimization (SEO) strategies, improving website visibility and organic search rankings.
•	Utilized front-end frameworks like React and NextJS to create dynamic, interactive user interfaces, improving overall user engagement and experience.
•	Designed and optimized databases using SQL and NoSQL technologies, ensuring efficient data storage and retrieval for web applications
                    "
                    />

                     {/* <Detail
                    position="Cloud Engineer/ DevOps" company="University College Hospital"
                    companyLink="http://uch-ibadan.org.ng/"
                    time="2017-Present" address="Queen Elizabeth I I Road, Agodi 200285, Ibadan, Oyo"
                    work="Worked on a team responsible for developing new features for Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
                    
                    /> */}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Experience