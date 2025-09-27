// import Section2AImg from "assets/images/home-sec-2a.jpg";
// import Section2BImg from "assets/images/home-sec-2b.jpg";
// import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";

const Section2 = () => {
  const navigate = useNavigate();
  // const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-white">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[6rem]">
        <div className="flex flex-col items-center">
          <CustomHeading text={"Our Subjects"} variants={fadeIn("up", 0.2)} />
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Explore Our Curricula
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 text-center leading-[24px] mb-6"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Choose your preferred curriculum and dive into expert-led live
            classes across academics, languages, coding, and more.
          </motion.p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Section2;
