// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustration from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import Button from "./../components/Button";
// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black" // Replace #yourColor with the color you want
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="fixed  top-0  w-30 h-16 
          py-3 px-6    gap-12 z-30">
      <img
        src={downloadIcon}
        alt="Davamen Logo"
        className="fixed  top-0 left-0 m-4 w-30 h-16"
      />

      </div>
      
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            style={{ marginTop: '200px' }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-3xl lg:text-4x1
              font-bold text-textPrimary uppercase"
          >
            We Offer  
            <br />
            <span className=" text-green-400">
              <Typewriter
                words={["Renewable Energy Solution", "House Wiring", "Industrial Automation", "CCTV & Electric Fence Solution"]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={20}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <div>
              <p className="text-white">Join us in our journey towards a greener future with solar power</p>
            </div>
            <a href="https://davamen.gitbook.io/davamen-electricals-and-general-construction/" rel="noopener noreferrer">
  <Button secondary>
    read more
  </Button>
</a>
          </motion.div>
        </div>
        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustration}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
