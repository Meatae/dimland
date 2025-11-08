"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const hashtags = [
  "#гений",
  "#магия",
  "#искусство",
  "#гений",
  "#магия",
  "#искусство",
  "#гений",
  "#магия",
  "#искусство",
  "#гений",
  "#магия",
  "#искусство",
  "#гений",
  "#магия",
  "#искусство",
];

interface HashtagConfig {
  tag: string;
  x: number;
  duration: number;
}

export function FloatingHashtags() {
  const [mounted, setMounted] = useState(false);
  const [hashtagConfigs] = useState<HashtagConfig[]>(() =>
    hashtags.map((tag) => ({
      tag,
      x: Math.random() * 1920, // Use fixed width for SSR consistency
      duration: 20 + Math.random() * 10,
    }))
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hashtagConfigs.map(({ tag, x, duration }, index) => (
        <motion.div
          key={index}
          className="absolute text-gray-400/30 text-lg font-light"
          initial={{
            x,
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 1080,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: -100,
            rotate: [0, 5, -5, 0],
            opacity: [0, 0.3, 0.3, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear",
          }}
        >
          {tag}
        </motion.div>
      ))}
    </div>
  );
}