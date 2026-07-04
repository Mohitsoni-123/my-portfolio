import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500 text-4xl" />,
        level: 95,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
        level: 90,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400 text-4xl" />,
        level: 88,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        level: 90,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
        level: 92,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-purple-500 text-4xl" />,
        level: 85,
      },
    ],
  },

  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
        level: 80,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300 text-4xl" />,
        level: 78,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-400 text-4xl" />,
        level: 75,
      },
    ],
  },

  {
    title: "Tools",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500 text-4xl" />,
        level: 90,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white text-4xl" />,
        level: 90,
      },
      {
        name: "VS Code",
        icon: <FaCode />,
        level: 95,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400 text-4xl" />,
        level: 88,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-pink-500 text-4xl" />,
        level: 70,
      },
    ],
  },
];