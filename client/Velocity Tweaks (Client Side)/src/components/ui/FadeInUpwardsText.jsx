import { motion } from "framer-motion";

export default function FadeInUpwardsText(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{duration: 0.7}}
    >
      <div className={props.fadeClass}>{props.text}</div>
    </motion.div>
  );
}

