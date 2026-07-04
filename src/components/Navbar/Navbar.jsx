import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

import navLinks from "./navLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-[#0B1120]/80 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6 lg:px-10">
          {/* Logo */}

          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold cursor-pointer"
          >
            {/* <span className="text-violet-400">&lt;</span> */}

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Mohit
            </span>

            {/* <span className="text-violet-400"> /&gt;</span> */}
          </motion.h1>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <li key={item.id}>

                <Link
                  to={item.link}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-violet-400"
                  className="relative cursor-pointer text-gray-300 font-medium group transition"
                >
                  {item.title}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>

                </Link>

              </li>

            ))}

          </ul>

          {/* Resume Button */}

          <div className="hidden lg:flex items-center gap-4">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/30"
            >
              Resume

              <FiDownload />
            </motion.a>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white text-3xl"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <MobileMenu open={isOpen} setOpen={setIsOpen} />
    </>
  );
};

export default Navbar;