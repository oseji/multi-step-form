import thankYou from "./assets/icon-thank-you.svg";
import { motion } from "framer-motion";

const Completed = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: { duration: 0.7 },
    },
    exit: {
      x: "25%",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="completedPage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.img
        src={thankYou}
        alt="icon"
        className="mx-auto block"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      />

      <motion.h1
        className="formHeading text-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        Thank you
      </motion.h1>

      {/* <h1 className="formHeading text-center">Thank you</h1> */}

      <motion.p
        className="text-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support,please feel free to email us at
        support@loremgaming.com
      </motion.p>
    </motion.div>
  );
};

export default Completed;
