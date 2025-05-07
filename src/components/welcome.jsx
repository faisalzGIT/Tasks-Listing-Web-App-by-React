import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function WelcomeBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // hide after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-violet-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg z-50"
    >
      Welcome to the Task App — Made with React
    </motion.div>
  );
}

export default WelcomeBanner;

