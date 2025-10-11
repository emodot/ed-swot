import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";
import Image1 from "assets/images/socials/Sub Container-1.png";
import Image2 from "assets/images/socials/Sub Container-2.png";
import Image3 from "assets/images/socials/Sub Container-3.png";
import Image4 from "assets/images/socials/Sub Container-4.png";
import Image5 from "assets/images/socials/Sub Container-5.png";
import Image6 from "assets/images/socials/Sub Container-6.png";
import Image7 from "assets/images/socials/Sub Container-7.png";
import Image8 from "assets/images/socials/Sub Container.png";
import Button from "components/Inputs/Button";

const Section6 = () => {
  const socailImages = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  return (
    <div className="bg-light_brand_primary py-[5rem]">
      <div className="bg-white max-w-[1300px] lg:w-[95%] w-[90%] m-auto lg:p-[4rem] p-2">
        <div className="flex flex-col items-center">
          <CustomHeading text={"Our Socials"} variants={fadeIn("up", 0.2)} />
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Social Media Highlights
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 text-center leading-[24px] mb-6"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Catch up on our latest updates, student stories, and
            behind-the-scenes moments—fresh from our community to your feed.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button
              name={"Follow US"}
              theme={"primary"}
              className="!w-[20rem] xs:w-auto sm:mb-6 mb-2"
              onClick={() => {
                // navigate("/");
              }}
            />
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 md:w-[85%] mx-auto mt-4">
          {socailImages.map((item, index) => (
            <motion.img
              variants={fadeIn("", 0.8 + index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              key={index}
              src={item}
              alt="socials"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
