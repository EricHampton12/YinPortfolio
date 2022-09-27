import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://media-exp1.licdn.com/dms/image/C5603AQHPWs2twPsUPg/profile-displayphoto-shrink_800_800/0/1589412032667?e=1669852800&v=beta&t=W0HzkHCzANNcX6hW9TwMg5Hkav-cO2zQQXPNkylPouU"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] mt-20"
      />
      <div className="space-y-10 px-0 md:px-10 mt-2">
        <h4 className="text-4xl font-semibold mt-2">
          Here is a little{" "}
          <span className="underline decoration-[#fdcdcd]">background</span>{" "}
        </h4>
        <p className="text-base">
          Xiao-Yin Chen (she/her) is a doctoral candidate in the Applied
          Cognition and Development program at the University of Georgia. She
          obtained both her Bachelor’s Degree in psychology and Master’s Degree
          in educational psychology at the University of Kentucky. Her research
          focuses on motivation in educational settings. She primarily studies
          social influences of student motivation and the ways in which
          educators can support students’ motivation through interventions. Her
          greater purpose is to support students who are minoritized in college
          settings (e.g., women in STEM, first-generation college students,
          and/or historically marginalized racial/ethnic students). Her work is
          grounded by her experiences growing up in eastern Kentucky, Appalachia
          as a second-generation Chinese-American.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
