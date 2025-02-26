"use client";
import { motion } from "framer-motion";

const texts = ["مرحبًا بك!", "جرب ميزاتنا الجديدة", "استمتع بتجربة فريدة", "انضم إلينا الآن!"];

export default function ContinuousText() {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <motion.div
        className="flex space-x-10 text-3xl font-bold text-blue-600"
        animate={{ x: ["100%", "-100%"] }} // يتحرك من اليمين إلى اليسار
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // حركة مستمرة بدون تقطيع
      >
        {texts.map((text, index) => (
          <span key={index} className="mx-10">{text}</span>
        ))}
      </motion.div>
    </div>
  );
}
