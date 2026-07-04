import {
  FaLaptopCode,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

export const experiences = [
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Personal Projects",
    description:
      "Built responsive React applications using Tailwind CSS, Framer Motion, and reusable component architecture.",
    icon: <FaLaptopCode className="text-violet-400 text-2xl" />,
    color: "from-violet-500 to-fuchsia-500",
  },

  {
    year: "2024",
    title: "Full Stack Learning",
    company: "Self Learning",
    description:
      "Learned React, Node.js, Express.js, MongoDB, REST APIs, Git, and GitHub while building real-world projects.",
    icon: <FaBriefcase className="text-cyan-400 text-2xl" />,
    color: "from-cyan-500 to-blue-500",
  },

  {
    year: "2023",
    title: "Started Web Development",
    company: "Learning Journey",
    description:
      "Started learning HTML, CSS, JavaScript and developed responsive websites while practicing DSA.",
    icon: <FaGraduationCap className="text-pink-400 text-2xl" />,
    color: "from-pink-500 to-rose-500",
  },
];