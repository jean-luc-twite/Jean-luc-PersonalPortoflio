import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
         title="Devops Engineer"
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
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
