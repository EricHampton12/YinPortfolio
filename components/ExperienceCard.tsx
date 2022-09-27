import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] mt-40 snap-center bg-[#bbc9f7] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://cdn.shopify.com/s/files/1/0745/8479/products/672090900142_920x.jpg?v=1604957683"
      ></motion.img>

      <div className="px-20 md:px-10">
        <h4 className="text-4xl font-light">Research Assitant</h4>
        <p className="font-bold text-2xl mt-1">
          Led Lab meetings and research efforts.
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/285_R_Project_logo-512.png"
            alt=""
          />
          {/*  */}
          {/*  */}
          {/*  */}
        </div>
        <p className="uppercase py-5 text-white-300">Started work... - Ended</p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
