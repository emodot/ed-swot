import { motion } from "framer-motion";
// import { fadeIn } from "variants.js";
import { ReactComponent as Stars } from "assets/icons/stars.svg";

const CustomHeading = ({ text, variants }) => {
  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex gap-3 items-center bg-brand_secondary rounded-[16px] px-4 py-1 w-fit"
      >
        <p className="font-aeroMatics_r text-brand_primary text-14">{text}</p>
        <Stars />
      </motion.div>
    </>
  );
};

export default CustomHeading;
