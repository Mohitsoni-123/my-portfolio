import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const HeroLeft = () => {

  const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/Mohitsoni-123",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/mohitsoni2197/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/_.mohit17/",
  },
];
  return (
    <div className="space-y-8">
      {/* Available Badge */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-white/5 px-5 py-2 backdrop-blur-xl"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse"></span>

        <span className="text-sm text-gray-300">Available for Internship</span>
      </motion.div>

      {/* Hello */}

      <motion.h3
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300"
      >
        👋 Hello, I'm
      </motion.h3>

      {/* Name */}

      <motion.h1
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-5xl font-black leading-tight"
      >
        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Mohit Soni
        </span>
      </motion.h1>

      {/* Typewriter */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-white"
      >
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1800,
            "React Developer",
            1800,
            "UI Designer",
            1800,
            "Problem Solver",
            1800,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>

      {/* Description */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="max-w-xl text-lg text-gray-400 leading-6"
      >
        Passionate Full-Stack Developer dedicated to crafting modern,
        responsive, and user-friendly web applications with React, Tailwind CSS,
        and JavaScript. I love building beautiful digital experiences with clean
        code.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap gap-5"
      >
        <Link to="contact" smooth={true} duration={600} offset={-80}>
          <button className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 font-semibold transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/40">
            Hire Me
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </Link>

        <Link to="projects" smooth={true} duration={600} offset={-80}>
          <button
            className="rounded-xl border border-violet-400/30
    bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl
    transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-lg
    hover:shadow-violet-500/30"
          >
            View Projects
          </button>
        </Link>
      </motion.div>

      {/* Social Icons */}

      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="flex gap-5 pt-4"
>
  {socialLinks.map((social, index) => {
    const Icon = social.icon;

    return (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          border-white/10
          bg-white/5
          text-white
          text-xl
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-violet-500
          hover:bg-violet-500/20
          hover:text-violet-400
        "
      >
        <Icon className="text-2xl" />
      </a>
    );
  })}
</motion.div>
    </div>
  );
};

export default HeroLeft;
