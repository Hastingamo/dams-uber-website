"use client";
import { motion } from "framer-motion";
import React from "react";

function page() {
  return (
    <>
      <div className="flew flex-row">
        <div className="bg-amber-700 w-2/4 border h-screen"></div>
      </div>
      <div className="absolute grid grid-cols-2  top-40 w-2/3 left-20 xl:left-32 shadow-2xl xl:w-3/4 h-2/4 border">
        <div className="mt-44">
          <motion.h1
          animate={{opacity: 1}}
          transition={{duration: 5}}
          initial={{opacity: 0}} >get your ride at dams website</motion.h1>
        </div>
        <motion.div
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 3 }}
          initial={{ opacity: 0, scale: 0.9, x: -550 }}
          className="bg-home ml-14"
        ></motion.div>
      </div>
    </>
  );
}

export default page;
