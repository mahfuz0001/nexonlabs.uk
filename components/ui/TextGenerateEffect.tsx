"use client";

import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = useMemo(() => words.split(" "), [words]);

  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }} // Simplified transition timing
            style={{
              color: idx > 3 ? "#CBACF9" : "currentColor", // Using inline style for conditional color
            }}
            className="dark:text-white text-black"
          >
            {word}{" "}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
