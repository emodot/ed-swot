import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";
import PricingPlans from "components/PricingPlans";

const Section7 = () => {
  // const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-white">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[4rem]">
        <div className="flex flex-col items-center">
          <CustomHeading text={"Our Pricing"} variants={fadeIn("up", 0.2)} />
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Affordable Learning. Exceptional Value.
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 text-center leading-[24px] mb-6"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Get the most out of your education with flexible packages designed
            to grow with you.
          </motion.p>
        </div>
        <div>
          <PricingPlans />
        </div>
      </div>
    </div>
  );
};

export default Section7;
