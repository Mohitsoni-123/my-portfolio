import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070b16]">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Mohit<span className="text-violet-500">.</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-8">
              Passionate Full Stack Developer creating modern, responsive and
              interactive web applications using React, Tailwind CSS and
              Node.js.
            </p>
          </div>

          {/* Center */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {["Home", "About", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      spy={true}
                      className="cursor-pointer text-gray-400 hover:text-violet-400 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Right */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">Connect</h3>

            <div className="flex gap-4">
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-white hover:bg-violet-600 transition"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-white hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -5,
                }}
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-xl text-white hover:bg-pink-600 transition"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-center">
            © {year} Mohit Soni. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{
              scale: 1.1,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={scrollToTop}
            className="h-12 w-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-violet-500/30"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
