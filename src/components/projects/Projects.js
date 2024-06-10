import React from 'react'
import Title from '../layouts/Title'
import { projectOne,  PROJECT6 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { PROJECT1, PROJECT3,PROJECT4, PROJECT5} from '../../assets/index';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title=" Carwash Booking Service Website"
          des=" conceptualized and developed a comprehensive 
          carwash booking service website. Leveraging my expertise in Java EE for backend 
          development and Derby as the database technology, I engineered a robust and 
          scalable architecture to handle the intricacies of appointment scheduling, customer 
          management, and service tracking."
          src={PROJECT1}
        />
        <ProjectsCard
          title=" Healthcare Android Application"
          des="In another endeavor, I spearheaded the development of a healthcare mobile 
          application aimed at providing users with convenient access to essential medical 
          services and resources. Utilizing Android Studio as the primary development 
          environment, I leveraged my proficiency in Java programming to implement robust 
          functionality and seamless user interactions."
          src={PROJECT4}
        />
        <ProjectsCard
          title="Project Experience: Real-Time Face Recognition"
          des="n a venture at the intersection of technology and security, I engineered a real-time 
          face recognition system using Java within the Android Studio environment. By 
          integrating cutting-edge libraries such as MKL and TensorFlow Lite, I developed a 
          robust and efficient solution capable of accurately identifying faces in real-world 
          scenarios. This project showcased my proficiency in Java programming, as well as my 
          ability to harness advanced libraries and frameworks to address complex challenges. 
          The real-time face recognition system holds significant potential in enhancing security 
          protocols and streamlining authentication processes across various industries."
          src={PROJECT5}
        />
        <ProjectsCard
          title="Bus Booking Application"
          des="I led the development of a bus booking application, utilizing React Native for frontend 
          development, Spring Boot for backend infrastructure, and MySQL for database 
          management. Through seamless integration of frontend and backend components, I 
          delivered a user-friendly solution enabling travelers to book tickets, view schedules, 
          and manage itineraries. This project showcased my proficiency in full-stack 
          development and my ability to leverage cutting-edge technologies to drive impactful 
          solutions in the transportation sector"
          src={PROJECT3}
        />
        <ProjectsCard
          title=" Fitness Website"
          des="In a bid to promote health and wellness, I led the development of a dynamic fitness 
          website using React Native. This cross-platform framework facilitated the creation of 
          a responsive and engaging user interface, accessible across various devices and 
          operating systems. By harnessing React JS's capabilities, I delivered a seamless 
          browsing experience, allowing users to access fitness plans, track progress, and 
          engage with interactive content effortlessly"
          src={projectOne}
        />
        <ProjectsCard
          title=" Game Website"
          des="Driven by a passion for gaming, I spearheaded the creation of a captivating game 
          website utilizing Angular. Leveraging Angular's powerful features and modular 
          architecture, I crafted an immersive platform for gaming enthusiasts to explore, 
          discover, and engage with a diverse array of games. Through intuitive design and 
          seamless navigation, the website provided an enriched gaming experience, fostering 
          community interaction and enjoyment.
          !"
          src={PROJECT6}
        />
      </div>
    </section>
  );
}

export default Projects