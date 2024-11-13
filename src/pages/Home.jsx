import { motion } from "framer-motion";
import Layout from "./Layout";

import CreateNote from "./components/home/CreateNote";
import GetNotes from "./components/home/GetNotes";

export default function Home() {
  const easing = [0.6, -0.05, 0.1, 0.99];
  const fadeIn1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: easing,
    },
    },
  };
  const fadeIn2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: easing,
      },
    },
  };
  return (
    <Layout>
      <motion.div exit="exit" initial="initial" animate="animate">
        <motion.div variants={fadeIn1}>
          <CreateNote></CreateNote>
        </motion.div>
      </motion.div>
      <motion.div exit="exit" initial="initial" animate="animate">
        <motion.div variants={fadeIn2}>
          <GetNotes></GetNotes>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
