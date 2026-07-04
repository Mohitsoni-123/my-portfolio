import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png"; // Change your image path

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex justify-center items-center"
    >
      {/* Glow Background */}

      <div className="absolute h-[360px] w-[360px] rounded-full bg-violet-600/20 blur-[90px]" />

      {/* Rotating Border */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-violet-500/30"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[290px] w-[290px] rounded-full border border-cyan-500/20"
      />

      {/* Main Card */}

      <motion.div
        whileHover={{
          rotateX: 6,
          rotateY: -6,
          scale: 1.03,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
        }}
        className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >
        {/* Image */}

        <div className="relative">

          <img
            src={profile}
            alt="Profile"
            className="h-72 w-72 rounded-3xl object-cover"
          />

          {/* Online Badge */}

          <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-[#0B1120] px-4 py-2 border border-white/10">

            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-sm text-white">
              Available
            </span>

          </div>

        </div>

        {/* Name */}

        <div className="mt-6 text-center">

          <h2 className="text-2xl font-bold text-white">
            Mohit Soni
          </h2>

          <p className="mt-2 text-gray-400">
            Frontend Developer
          </p>

        </div>

      </motion.div>

      {/* Floating Card */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute -left-6 top-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-xl"
      >
        <h3 className="text-3xl font-bold text-violet-400">
          2+
        </h3>

        <p className="text-sm text-gray-300">
          Projects
        </p>

      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute -right-8 bottom-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 shadow-xl"
      >
        <h3 className="text-3xl font-bold text-cyan-400">
          300+
        </h3>

        <p className="text-sm text-gray-300">
          DSA
        </p>

      </motion.div>

    </motion.div>
  );
};

export default ProfileCard;