import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserCheck,
} from "react-icons/fa";

export const contactData = [
  {
    title: "Email",
    value: "mohitsoni@example.com",
    icon: <FaEnvelope className="text-violet-400 text-2xl" />,
  },
  {
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    icon: <FaPhoneAlt className="text-cyan-400 text-2xl" />,
  },
  {
    title: "Location",
    value: "Rajasthan, India",
    icon: <FaMapMarkerAlt className="text-pink-400 text-2xl" />,
  },
  {
    title: "Availability",
    value: "Open for Internship",
    icon: <FaUserCheck className="text-green-400 text-2xl" />,
  },
];