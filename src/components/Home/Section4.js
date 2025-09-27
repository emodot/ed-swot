import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ReactComponent as OneOnOne } from "assets/icons/one-on-one.svg";
import { ReactComponent as Solution } from "assets/icons/solution.svg";
import Image1a from "assets/images/home-sec-4-1a.png";
import Image1b from "assets/images/home-sec-4-1b.png";
import Image1c from "assets/images/home-sec-4-1c.png";
import Image2a from "assets/images/home-sec-4-1a.png";
import Image2b from "assets/images/home-sec-4-2b.png";
import Image2c from "assets/images/home-sec-4-2c.png";
import { motion } from "framer-motion";
import { fadeIn } from "variants.js";
import CustomHeading from "components/CustomHeading";

const Section4 = () => {
  const oneOnOne = [
    {
      title: "Personalized Attention",
      desc: "Every session is tailored to your unique goals, learning style, and pace—no distractions, no one-size-fits-all.",
    },
    {
      title: "Faster Progress",
      desc: "With direct guidance, you'll grasp concepts quicker and focus only on what truly matters to you.",
    },
    {
      title: "Flexible Scheduling",
      desc: "Book sessions at times that work for you—morning, evening, or weekend. Your learning fits your lifestyle.",
    },
    {
      title: "Boosted Confidence",
      desc: "Ask questions freely, make mistakes without pressure, and grow in a safe, encouraging environment.",
    },
  ];

  const groupClasses = [
    {
      title: "Affordable & Social",
      desc: "Enjoy high-quality lessons at a lower cost while building friendships and community.",
    },
    {
      title: "Motivation & Accountability",
      desc: "Stay inspired by learning alongside others—track progress together and keep showing up.",
    },
    {
      title: "Collaborative Learning",
      desc: "Engage with peers, share ideas, and gain new perspectives through real-time interaction.",
    },
    {
      title: "Real-Time Feedback",
      desc: "Receive instant input from both tutors and classmates to help you improve on the spot.",
    },
  ];
  // const isMobile = window.innerWidth < 768;

  return (
    <div className="bg-light_brand_primary">
      <div className="max-w-[1300px] lg:w-[95%] w-[90%] m-auto pt-[5rem] pb-[4rem]">
        <div className="flex flex-col items-center">
          <CustomHeading text={"Our Courses"} variants={fadeIn("up", 0.2)} />
          <motion.h1
            className="mt-4 font-albra_sans_sb text-[28px] lg:text-[32px] lg:leading-[40px] leading-[30px] text-center mb-4"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Learn Live. Learn Better
          </motion.h1>
          <motion.p
            className="font-aileron_r lg:text-18 text-14 text-center leading-[24px] mb-6"
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Live online classes with expert tutors. Flexible, interactive
            learning for all ages.
          </motion.p>
        </div>
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto lg:flex gap-10 items-center">
            <div className="grid gap-4 mb-[2rem] lg:mb-0">
              <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                <img
                  src={Image1a}
                  alt="Tutor teaching online"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                  <img
                    src={Image1b}
                    alt="Student online learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                  <img
                    src={Image1c}
                    alt="Student focused learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <OneOnOne />
              <h2 className="text-[36px] font-albra_sans_sb text-brand_secondary mb-1">
                One-On-One Classes
              </h2>
              <p className="text-16 font-aileron_r text-brand_secondary mb-8">
                One tutor. One student. 100% focus on you and your goals.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {oneOnOne.map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 text-warning mb-2">
                      <Solution className="w-10 h-10" />
                    </div>
                    <h3 className="text-[18px] font-aileron_sb text-dark_brand_primary">
                      {feature.title}
                    </h3>
                    <p className="text-14 font-aileron_r text-brand_secondary mt-1">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto lg:flex flex-row-reverse gap-10 items-center">
            <div className="grid gap-4 mb-[2rem] lg:mb-0">
              <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                <img
                  src={Image2a}
                  alt="Tutor teaching online"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                  <img
                    src={Image2b}
                    alt="Student online learning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-[12px] overflow-hidden border border-brand_primary">
                  <img
                    src={Image2c}
                    alt="Student focused learning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <Solution />
              <h2 className="text-[36px] font-albra_sans_sb text-brand_secondary mb-1">
                Group Classes
              </h2>
              <p className="text-16 font-aileron_r text-brand_secondary mb-8 lg:w-[65%]">
                Personalized live classes tailored to your pace, goals, and
                interests. Just you and your expert tutor.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {groupClasses.map((feature, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-2 text-warning mb-2">
                      <Solution className="w-10 h-10" />
                    </div>
                    <h3 className="text-[18px] font-aileron_sb text-dark_brand_primary">
                      {feature.title}
                    </h3>
                    <p className="text-14 font-aileron_r text-brand_secondary mt-1">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section4;
