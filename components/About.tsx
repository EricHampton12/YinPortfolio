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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#fdcdcd]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit placeat incidunt aspernatur eum praesentium facere
          cupiditate aut aperiam accusantium quas sint rem, sit inventore
          repellendus. Quam ducimus error recusandae hic. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Et odit placeat alias consequatur!
          Obcaecati, explicabo numquam. Sapiente molestias dolor, repellat
          aliquid, animi pariatur dolore nesciunt quas unde voluptas consectetur
          repudiandae!
        </p>
      </div>
    </motion.div>
  );
}

export default About;
