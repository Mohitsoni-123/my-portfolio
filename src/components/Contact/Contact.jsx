import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import { contactData } from "./contactData";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_9lnrqos",
        "template_2xk4mmk",
        form.current,
        "ky5jOyzQeKdxzwvsj",
      )
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
        setLoading(false);
      });
  };
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-violet-400 mb-3">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold text-white">Let's Work Together</h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
            Have an idea, internship opportunity, or freelance project? Feel
            free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}

          <div className="space-y-6">
            {contactData.map((item, index) => (
              <ContactCard key={index} item={item} delay={index * 0.15} />
            ))}
          </div>

          {/* Right Side */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none focus:border-violet-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              className="w-full rounded-xl bg-white/10 border border-white/10 px-5 py-4 text-white outline-none resize-none focus:border-violet-500"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 text-white font-semibold shadow-lg shadow-violet-500/30"
            >
              Send Message 🚀
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
