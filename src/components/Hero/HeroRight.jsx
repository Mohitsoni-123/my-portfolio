import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

import FloatingCard from "./FloatingCard";

const HeroRight = () => {
  return (
    <div className="relative hidden lg:flex items-center justify-center h-[650px]">

      {/* Glow */}

      <div className="absolute h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-violet-500/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[280px] w-[280px] rounded-full border border-cyan-500/20"
      />

      {/* Center Circle */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="relative z-20 flex h-52 w-52 items-center justify-center rounded-full border border-violet-500/30 bg-[#0B1120]/80 backdrop-blur-xl shadow-2xl shadow-violet-500/30"
      >
        <h1 className="text-6xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          {"</>"}
        </h1>
      </motion.div>

      {/* Floating Cards */}

      <FloatingCard
        title="React"
        icon={<FaReact color="#61DAFB" />}
        color="rgba(97,218,251,.15)"
        className="-top-2 left-10"
        delay={0}
      />

      <FloatingCard
        title="JavaScript"
        icon={<SiJavascript color="#F7DF1E" />}
        color="rgba(247,223,30,.15)"
        className="top-24 right-0"
        delay={0.5}
      />

      <FloatingCard
        title="Tailwind"
        icon={<SiTailwindcss color="#38BDF8" />}
        color="rgba(56,189,248,.15)"
        className="bottom-28 left-0"
        delay={1}
      />

      <FloatingCard
        title="Node.js"
        icon={<FaNodeJs color="#68A063" />}
        color="rgba(104,160,99,.15)"
        className="bottom-5 right-12"
        delay={1.5}
      />

      <FloatingCard
        title="Git"
        icon={<FaGitAlt color="#F1502F" />}
        color="rgba(241,80,47,.15)"
        className="top-56 -left-8"
        delay={2}
      />

    </div>
  );
};

export default HeroRight;