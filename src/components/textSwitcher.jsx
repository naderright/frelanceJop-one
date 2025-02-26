"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const texts = [
    "Most generous contract employee benefits in the industry",
     "Strongest guarantees in the staffing industry ",
      "Over 5,700 contract and permanent hires"
] 

export default function TextSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // يتغير كل 2 ثانية

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center   ">
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[index]}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold max-w-[25rem] bgText "
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
