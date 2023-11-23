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

  const svgVariants = {
    hidden: { rotate: -180, opacity: 0, x: 200 },
    visible: { rotate: 0, opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: { opacity: 1, pathLength: 1, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className="completedPage"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.svg
        alt="icon"
        className="mx-auto block"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
      >
        <motion.g fill="none">
          <motion.circle
            cx="40"
            cy="40"
            r="40"
            fill="#F9818E"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.path
            variants={pathVariants}
            fill="#E96170"
            d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"
          />
          <motion.path
            variants={pathVariants}
            fill="#FFF"
            d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"
          />
        </motion.g>
      </motion.svg>

      <motion.h1
        className="formHeading text-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Thank you
      </motion.h1>

      {/* <h1 className="formHeading text-center">Thank you</h1> */}

      <motion.p
        className="text-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Thanks for confirming your subscription!We hope you have fun using our
        platform.If you ever need support,please feel free to email us at
        support@loremgaming.com
      </motion.p>
    </motion.div>
  );
};

export default Completed;
