import ResumeBuilderImg from "../../assets/images/resume-builder.png";
import ChatAIImg from "../../assets/images/Chat-AI.png";
import PortfolioImg from "../../assets/images/Portfolio.png";

export const projects = [
  {
    title: "Resume Builder",
    image: ResumeBuilderImg,

    description:
      "A full-stack Resume Builder with multiple templates, PDF export, authentication and dashboard.",

    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],

    // github: "https://github.com/yourusername/resume-builder",
    // demo: "https://resume-builder-demo.vercel.app",


    github: "https://github.com/Mohitsoni-123/Resume-Builder",
    demo: "https://resume-builder-demo.vercel.app",
  },

  {
    title: "Chat AI Assistant",

    image: ChatAIImg,

    description:
      "A modern AI-powered chatbot web application with real-time conversations, theme switching, recent search history, responsive UI, and intelligent AI responses.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "Gemini API",
      "Tailwind CSS",
      "MongoDB",
    ],

    github: "https://github.com/Mohitsoni-123/chat-ai-project",

    demo: "https://chat-ai-project-chi.vercel.app/",
  },

  {
    title: "Personal Portfolio Website",

    image: PortfolioImg,

    description:
      "A modern and responsive developer portfolio built with React, Tailwind CSS, and Framer Motion, featuring smooth animations, interactive UI, project showcase, and contact functionality.",

    technologies: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/yourusername/portfolio",

    demo: "https://portfolio-demo.vercel.app",
  },
];
