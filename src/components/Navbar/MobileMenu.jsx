import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import navLinks from "./navLinks";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Menu */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 250,
            }}
            className="fixed right-0 top-0 h-screen w-[280px] bg-[#0B1120]/95 backdrop-blur-xl border-l border-white/10 z-50 shadow-2xl"
          >
            {/* Header */}

            <div className="flex items-center justify-between p-6 border-b border-white/10">

              <h2 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Menu
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl hover:text-violet-400 transition"
              >
                <IoClose />
              </button>

            </div>

            {/* Navigation */}

            <div className="flex flex-col mt-8 px-6 gap-7">

              {navLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  smooth
                  duration={600}
                  offset={-80}
                  spy={true}
                  onClick={() => setOpen(false)}
                  activeClass="text-violet-400"
                  className="cursor-pointer text-lg font-medium text-gray-300 hover:text-violet-400 transition-all"
                >
                  {item.title}
                </Link>
              ))}

              {/* Resume Button */}

              <a
                href="/resume.pdf"
                download
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 py-3 text-white font-semibold shadow-lg shadow-violet-500/30"
              >
                Resume
                <FiDownload />
              </a>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;