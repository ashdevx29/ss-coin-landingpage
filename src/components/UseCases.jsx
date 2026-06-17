// UseCases.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

import img1 from "../assets/images/ecommerce.png";
import img2 from "../assets/images/gateway.png";
import img3 from "../assets/images/merchant.png";

const cards = [
  {
    title: "E-Commerce Payments",
    description:
      "Purchase products and services across partnered online stores, marketplaces, and digital platforms using SSC as the native currency.",
    image: img1,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "SSC can be seamlessly integrated into existing merchant payment gateways via developer-friendly APIs.",
    image: img2,
  },
  {
    title: "Merchant Payments",
    description:
      "Brick-and-mortar retailers, service providers, and digital businesses can receive direct SSC payments.",
    image: img3,
  },
];

const EASE = [0.16, 1, 0.3, 1];

const UseCases = () => {
  const [active, setActive] = useState(1);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const leftIndex = active === 0 ? cards.length - 1 : active - 1;

  const rightIndex =
    active === cards.length - 1 ? 0 : active + 1;

  return (
    <section className="bg-black max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ">

      <div
        className="w-full px-3 sm:px-4 md:px-6 lg:px-8 bg-[#FFFFFF]
        rounded-[22px]
        py-10
        lg:py-14
      "
      >

        {/* Heading */}

        <div className="text-center">

          <h2 className="
          text-2xl
          sm:text-4xl
          lg:text-5xl

          font-[400]

          text-[#000000]
          ">

            Powerful Real-World{" "}

            <span
              className="
              bg-gradient-to-r
              from-[#F0B100]
              to-[#D08700]
              bg-clip-text
              text-transparent
            "
            >

              Use Cases

            </span>

          </h2>

          <p
            className="
            max-w-[700px]
            mx-auto
            mt-5
            font-[Poppins] font-[400]
            text-[#000]
            text-sm
          "
          >

            SS Coin is not a speculative asset — it is a functional utility token engineered for real-world deployment across multiple commercial verticals.

          </p>

        </div>



        {/* Slider */}

        <div className="relative mt-16">

          {/* Left Arrow */}

          <button
            onClick={prevSlide}
            className="
            absolute
            left-[-5px]
            md:left-[-20px]
            top-1/2
            -translate-y-1/2
            z-30
            w-10
            h-10
            md:w-12
            md:h-12
            rounded-full
            bg-[#E8E8E8CC]
            shadow-[0px_0px_4px_0px_#00000040]
            text-[#696969CC]
            text-3xl
          "
          >
          <MdOutlineArrowBackIos />
          </button>



          {/* Cards */}

          <div
            className="
            flex

            justify-center
            items-center

            gap-5
            lg:gap-10
          "
          >



            {/* LEFT CARD */}

            <AnimatePresence>

              <motion.div

                key={leftIndex}

                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  duration: 0.5,
                  ease: EASE,
                }}

                className="
                hidden
                lg:block

                w-[301px]
                h-[344px]

                bg-black

                border
                border-[#F0B100]

                rounded-[22px]

                overflow-hidden
              "
              >

                <img
                  src={cards[leftIndex].image}
                  alt=""
                  className="
                  w-full
                  h-[150px]
                  object-cover
                "
                />

                <div className="p-5">

                  <h3 className="text-white text-[24px]">

                    {cards[leftIndex].title}

                  </h3>

                  <p className="text-[#8A8A8A] mt-3 text-sm leading-6">

                    {cards[leftIndex].description}

                  </p>

                </div>

              </motion.div>

            </AnimatePresence>



            {/* CENTER CARD */}

            <AnimatePresence mode="wait">

              <motion.div

                key={active}

                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                }}

                transition={{
                  duration: 0.6,
                  ease: EASE,
                }}

                className="
                w-full

                max-w-[320px]

                sm:max-w-[420px]

                lg:max-w-[450px]

                bg-black

                border
                border-[#F0B100]

                rounded-[28px]

                overflow-hidden

                shadow-[0_0_25px_rgba(240,177,0,0.35)]
              "
              >

                <img
                  src={cards[active].image}
                  alt=""
                  className="
                  w-full

                  h-[220px]

                  sm:h-[280px]

                  lg:h-[330px]

                  object-cover
                "
                />


                <div className="p-6 lg:p-8">

                  <h3 className="
                  text-white

                  text-[26px]

                  lg:text-[36px]
                ">

                    {cards[active].title}

                  </h3>


                  <p
                    className="
                    mt-4

                    text-[#9C9C9C]

                    text-sm
                    lg:text-[18px]

                    leading-7
                  "
                  >

                    {cards[active].description}

                  </p>

                </div>

              </motion.div>

            </AnimatePresence>



            {/* RIGHT CARD */}

            <AnimatePresence>

              <motion.div

                key={rightIndex}

                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}

                animate={{
                  opacity: 1,
                  scale: 1,
                }}

                transition={{
                  duration: 0.5,
                  ease: EASE,
                }}

                className="
                hidden
                lg:block

                w-[301px]
                h-[344px]

                bg-black

                border
                border-[#F0B100]

                rounded-[22px]

                overflow-hidden
              "
              >

                <img
                  src={cards[rightIndex].image}
                  alt=""
                  className="
                  w-full
                  h-[150px]
                  object-cover
                "
                />

                <div className="p-5">

                  <h3 className="text-white text-[24px]">

                    {cards[rightIndex].title}

                  </h3>

                  <p className="text-[#8A8A8A] mt-3 text-sm leading-6">

                    {cards[rightIndex].description}

                  </p>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>



          {/* Right Arrow */}

          <button
            onClick={nextSlide}
            className="
            absolute

            right-[-5px]
            md:right-[-20px]

            top-1/2
            -translate-y-1/2

            z-30

            w-10
            h-10

            md:w-12
            md:h-12

            rounded-full

            bg-[#E8E8E8]

            shadow-lg

            text-[#8B8B8B]
            text-3xl
          "
          >
            <MdOutlineArrowForwardIos />
          </button>

        </div>

      </div>

    </section>
  );
};

export default UseCases;




// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import img1 from "../assets/images/ecommerce.png";
// import img2 from "../assets/images/gateway.png";
// import img3 from "../assets/images/merchant.png";

// const cards = [
//   {
//     title: "E-Commerce Payments",
//     description:
//       "Purchase products and services across partnered online stores, marketplaces, and digital platforms using SSC.",
//     image: img1,
//   },
//   {
//     title: "Payment Gateway Integration",
//     description:
//       "SSC can be seamlessly integrated into existing merchant payment gateways via developer-friendly APIs.",
//     image: img2,
//   },
//   {
//     title: "Merchant Payments",
//     description:
//       "Retailers, service providers, and digital businesses can receive direct SSC payments.",
//     image: img3,
//   },
// ];

// // Smooth, cinematic ease-out-expo curve — replaces the bouncy spring physics
// const EASE = [0.16, 1, 0.3, 1];

// const centerVariants = {
//   enter: (direction) => ({
//     opacity: 0,
//     scale: 0.82,
//     x: direction > 0 ? 100 : -100,
//     filter: "blur(10px)",
//   }),
//   center: {
//     opacity: 1,
//     scale: 1,
//     x: 0,
//     filter: "blur(0px)",
//     transition: { duration: 0.6, ease: EASE },
//   },
//   exit: (direction) => ({
//     opacity: 0,
//     scale: 0.82,
//     x: direction > 0 ? -100 : 100,
//     filter: "blur(10px)",
//     transition: { duration: 0.45, ease: EASE },
//   }),
// };

// const sideVariants = {
//   enter: { opacity: 0, scale: 0.7, filter: "blur(6px)" },
//   center: {
//     opacity: 1,
//     scale: 0.9,
//     filter: "blur(0px)",
//     transition: { duration: 0.55, ease: EASE, delay: 0.06 },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.7,
//     filter: "blur(6px)",
//     transition: { duration: 0.35, ease: EASE },
//   },
// };

// const UseCases = () => {
//   const [active, setActive] = useState(1);
//   const [direction, setDirection] = useState(1);

//   const nextSlide = () => {
//     setDirection(1);
//     setActive((prev) => (prev + 1) % cards.length);
//   };

//   const prevSlide = () => {
//     setDirection(-1);
//     setActive((prev) => (prev - 1 + cards.length) % cards.length);
//   };

//   const leftIndex = active === 0 ? cards.length - 1 : active - 1;
//   const rightIndex = active === cards.length - 1 ? 0 : active + 1;

//   return (
//     <section className="py-20 bg-black">
//       <div className="mx-auto px-6 py-16 max-w-[1400px] bg-white rounded-[30px] md:px-12">

//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-[32px] font-light md:text-[48px]">
//             Powerful Real-World{" "}
//             <span className="text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text">
//               Use Cases
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-[800px] text-[#000] text-[14px] md:text-[16px]">
//             SS Coin is not a speculative asset — it is a functional utility
//             token engineered for real-world deployment across multiple
//             commercial verticals.
//           </p>
//         </div>

//         {/* Slider */}
//         <div className="overflow-hidden relative flex items-center justify-center mt-16">

//           {/* Left Arrow */}
//           <button
//             onClick={prevSlide}
//             className="z-20 absolute left-0 flex items-center justify-center w-12 h-12 h-14 text-[#888] text-3xl bg-[#ECECEC] rounded-full shadow-lg md:w-14"
//           >
//             ‹
//           </button>

//           {/* Cards Container */}
//           <div className="flex items-center justify-center gap-6 lg:gap-8">

//             <AnimatePresence mode="popLayout" initial={false} custom={direction}>

//               {/* Left Card */}
//               <motion.div
//                 key={`left-${leftIndex}`}
//                 custom={direction}
//                 variants={sideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="overflow-hidden hidden w-[280px] h-[360px] bg-black border-2 border-[#D9A11D] rounded-[28px] lg:block"
//               >
//                 <img
//                   src={cards[leftIndex].image}
//                   alt=""
//                   className="object-cover w-full h-[200px]"
//                 />

//                 <div className="p-5 text-white">
//                   <h3 className="text-xl">
//                     {cards[leftIndex].title}
//                   </h3>

//                   <p className="mt-3 text-sm text-gray-400">
//                     {cards[leftIndex].description}
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Center Card */}
//               <motion.div
//                 key={`center-${active}`}
//                 custom={direction}
//                 variants={centerVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 className="overflow-hidden w-full max-w-[500px] bg-black border-2 border-[#D9A11D] rounded-[32px] shadow-[0_0_30px_rgba(217,161,29,0.35)] lg:max-w-[520px]"
//               >
//                 <img
//                   src={cards[active].image}
//                   alt=""
//                   className="object-cover w-full h-[260px] md:h-[320px]"
//                 />

//                 <div className="p-6 text-white md:p-8">
//                   <h3 className="text-[22px] md:text-[30px]">
//                     {cards[active].title}
//                   </h3>

//                   <p className="mt-4 text-[#A5A5A5] text-[15px] leading-relaxed md:text-[18px]">
//                     {cards[active].description}
//                   </p>
//                 </div>
//               </motion.div>

//               {/* Right Card */}
//               <motion.div
//                 key={`right-${rightIndex}`}
//                 custom={direction}
//                 variants={sideVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 whileHover={{ scale: 0.95, transition: { duration: 0.25, ease: EASE } }}
//                 className="overflow-hidden hidden w-[280px] h-[360px] bg-black border-2 border-[#D9A11D] rounded-[28px] lg:block"
//               >
//                 <img
//                   src={cards[rightIndex].image}
//                   alt=""
//                   className="object-cover w-full h-[200px]"
//                 />

//                 <div className="p-5 text-white">
//                   <h3 className="text-xl">
//                     {cards[rightIndex].title}
//                   </h3>

//                   <p className="mt-3 text-sm text-gray-400">
//                     {cards[rightIndex].description}
//                   </p>
//                 </div>
//               </motion.div>

//             </AnimatePresence>

//           </div>

//           {/* Right Arrow */}
//           <button
//             onClick={nextSlide}
//             className="z-20 absolute right-0 flex items-center justify-center w-12 h-12 h-14 text-[#888] text-3xl bg-[#ECECEC] rounded-full shadow-lg md:w-14"
//           >
//             ›
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default UseCases;