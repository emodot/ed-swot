
import Section9BG from "assets/images/home-sec-9-bg.png";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import Button from "components/Inputs/Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Users } from "assets/icons/users.svg";
import { ReactComponent as Stars } from "assets/icons/stars-white.svg";

const Section9 = () => {
  const navigate = useNavigate();
  // const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-light_brand_primary py-[5rem]">
      <div
        className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto py-[4rem] rounded-[20px] border-[2px] border-dark_brand_primary"
        style={{
          width: "100%",
          backgroundImage: `url(${Section9BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-brand_primary to-dark_brand_primary rounded-[16px] p-[2px] w-fit"
          >
            <div className="flex gap-3 items-center bg-brand_secondary rounded-[16px] px-4 py-1 w-fit">
              <p className="font-aeroMatics_r text-white text-14">
                Get Started
              </p>
              <Stars />
            </div>
          </motion.div>
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] text-white lg:text-[40px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Start Your Journey Today
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-white text-14 text-center leading-[24px] mb-6"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Take the first step toward smarter, flexible learning.
          </motion.p>
          <motion.div
            className="xs:flex sm:gap-4 gap-2"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              name={"See Pricing Plans"}
              theme={"white"}
              textClassName="sm:text-14"
              className="!w-[150px] xs:w-auto sm:mb-6 mb-2"
              onClick={() => navigate("/")}
            />
            {/* <Button
              name={"Book a Free Trial Class"}
              theme={"transparent"}
              textClassName="sm:text-14"
              className="4xs:w-auto"
              onClick={() => navigate("/contact-us")}
            /> */}
            <button className="flex justify-center items-center gap-2 h-[40px] bg-brand_secondary text-white border border-dark_brand_primary font-aileron_r text-14 py-2 rounded-md w-[150px]">
              Enroll Now
              <span>
                <svg
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8049 14.633C12.5542 14.8702 12.1586 14.8592 11.9214 14.6084C11.6842 14.3576 11.6952 13.962 11.946 13.7248L15.4786 10.4287H4.04183C3.69664 10.4287 3.41681 10.1489 3.41681 9.80373C3.41681 9.45854 3.69664 9.1787 4.04183 9.1787H15.4805L11.946 5.88087C11.6952 5.64368 11.6842 5.24809 11.9214 4.9973C12.1586 4.74651 12.5542 4.73549 12.8049 4.97269L17.3195 9.19738C17.458 9.32845 17.5414 9.49522 17.5695 9.66921C17.579 9.71254 17.584 9.75755 17.584 9.80373C17.584 9.85172 17.5786 9.89846 17.5683 9.94335C17.5392 10.1148 17.4562 10.2789 17.3195 10.4083L12.8049 14.633Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center mt-4 lg:mt-0"
          >
            <Users />
            <p className="font-aileron_r text-white text-16 ml-3">
              12K+ students trust us to succeed
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
