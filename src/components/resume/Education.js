import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 20</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Diploma in Computer Science"
          subTitle="Tshwane University Of Technology (2020 - 2024)"
           result="70%"
           des="Comprehensive education in computer science fundamentals, including programming, algorithms, data structures, and software development, preparing graduates for careers in technology."
/>
          {/* <ResumeCard
            title="AS - Science & Information"
            subTitle="SuperKing College (2001 - 2005)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
           title="Intern Software Engineer"
           subTitle="Fluid Intellect"
           result="South Africa"
           des="Worked on developing and maintaining software solutions, collaborating with senior engineers to learn and apply industry best practices."
         />
        <ResumeCard
         title="Junior Software Engineer"
         subTitle="Fluid Intellect"
         result="South Africa"
         des="Assisted in the development of web applications, improved system performance, and contributed to team projects with a focus on innovation."
        />
        <ResumeCard
         title="Data Engineer"
         subTitle="Fluid Intellect"
         result="South Africa"
         des="Designed and implemented data pipelines, optimized data storage solutions, and enabled data-driven decision-making to support business operations."
       />
        <ResumeCard
         title="DevOps Engineer"
         subTitle="Fluid Intellec"
         result="South Africa"
         des="Automated infrastructure deployment, managed CI/CD pipelines, and ensured system reliability and scalability through continuous monitoring and improvement."
       />
        </div>
      </div>
    </motion.div>
  );
}

export default Education