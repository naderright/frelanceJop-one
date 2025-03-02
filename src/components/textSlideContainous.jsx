"use client";
import { motion } from "framer-motion";

const texts = [
  "Civil / Structural Engineers",
  "Manufacturing Engineers",
  "Industrial Engineers",
  "Electrical Engineers",
  "Electronics / Hardware Engineers",
  "Software / Firmware Engineers",
  "Environmental Engineers",
  "Packaging Engineers",
  "Quality Assurance / Validation Engineers",
  "Technical Writers",
  "CAD Designers / Drafters",
  "Engineering Technicians",
  "Electronics Technicians",
  "Lab Technicians",
  "Electronics Assemblers",
  "Electromechanical Assemblers",
  "QA Inspectors",
  "Mechanical Engineers"
];

export default function ContinuousText() {
  return (
    <div className="overflow-hidden bg-primary pt-1 pb-3" >
      <motion.div
        className="flex min-w-max space-x-10 text-2xl font-bold text-white "
        animate={{ x: ['-100%','0%'] }} // تقليل المسافة لجعل الحركة أكثر انسيابية
        transition={{ repeat: Infinity, duration: 200, ease: "linear" }} // مدة طويلة جدًا لإبطاء السرعة
      >
        {[...texts, ...texts, ...texts].map((text, index) => ( // تكرار النصوص 3 مرات لملء الشاشة
          <span key={index} className={`"tracking-[.2rem]  mx-10" ${index%2 == 0 ?'text-black':''}`}
          style={index%2 == 0 ?{
            textShadow: "2px 2px 0px white, -2px -2px 0px white, -2px 2px 0px white, 2px -2px 0px white"
          }:{}}
          >{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
