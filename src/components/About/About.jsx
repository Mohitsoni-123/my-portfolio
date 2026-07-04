import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import StatsCard from "./StatsCard";
import { stats } from "./aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden"
    >
      {/* Section Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-violet-400 uppercase tracking-[5px] mb-3">
          Get To Know
        </p>

        <h2 className="text-5xl font-bold text-white">
          About Me
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <ProfileCard />

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-4xl font-bold text-white mb-8">
              Passionate Frontend Developer
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I'm Mohit Soni, a passionate Frontend Developer focused on
              building beautiful, fast, and responsive web applications.
              I enjoy transforming ideas into interactive digital experiences
              using React, Tailwind CSS, JavaScript, and modern UI technologies.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I continuously improve my skills through projects, problem-solving,
              and exploring new technologies. My goal is to create user-friendly
              interfaces with clean and maintainable code.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">

  {stats.map((item, index) => (
    <StatsCard
      key={index}
      number={item.number}
      label={item.label}
      icon={item.icon}
      color={item.color}
      delay={index * 0.15}
    />
  ))}

</div>

            {/* Resume Button */}

            <motion.a
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: .95
              }}
              href="/resume.pdf"
              download
              className="inline-block mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/30"
            >
              Download Resume
            </motion.a>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;
