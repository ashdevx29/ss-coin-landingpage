import heroVideo from "../assets/newhero/bg-hero.mp4";
import heroCoin from "../assets/newhero/hero-right.png";
import coinIcon from "../assets/newhero/icon.png";
import Header from "./Navbar";
import icon1 from "../assets/newhero/Audited.png";
import icon2 from "../assets/newhero/secure.png";
import icon3 from "../assets/newhero/kyc.png";


import img1 from "../assets/newhero/img1.png";
import img2 from "../assets/newhero/img2.png";
import img3 from "../assets/newhero/img3.png";
import img4 from "../assets/newhero/img4.png";
import img5 from "../assets/newhero/img5.png";
import img6 from "../assets/newhero/img6.png";



const features = [
  {
    icon: icon1,
    title: "Audited",
    subtitle: "Smart Contract",
  },
  {
    icon: icon2,
    title: "100 % Secure",
    subtitle: "Decentralized",
  },
  {
    icon: icon3,
    title: "KYC Verified",
    subtitle: "Trusted Project",
  },
];

const stats = [
  {
    img: img1,
    value: "24M",
    label: "Total Supply",
    desc: "Fixed and Transparent",
  },
  {
    img: img2,
    value: "500k+",
    label: "Global Community",
    desc: "Growing Everyday",
  },
  {
    img: img3,
    value: "10k+",
    label: "Merchants",
    desc: "Accepting SSC",
  },
  {
    img: img4,
    value: "100k+",
    label: "Wallet Users",
    desc: "Worldwide",
  },
  {
    img: img5,
    value: "1M+",
    label: "Transactions",
    desc: "On Chain",
  },
  {
    img: img6,
    value: "24/7",
    label: "Support",
    desc: "Always Here",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black font-['Poppins']">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(240,177,0,0.15),transparent_45%)] z-[2]" />

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-12 lg:pt-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 xl:gap-12 items-center">

          {/* Left */}
          <div className="max-w-[700px]">

            <div className="inline-flex items-center gap-3 mb-3 lg:mb-5">

              <span className="border border-[#F0B100] rounded-md px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent">
                BEP 20
              </span>

              <span className="text-[#D8D8D8]">
                Binance Smart Coin
              </span>

            </div>

            <h2 className="text-white text-4xl md:text-6xl lg:text-5xl xl:text-7xl leading-[1.05] font-light">

              <span className="block bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent">
                One Transaction
              </span>

              Infinite Possibilities

            </h2>

            <p className="text-[#D8D8D8] text-base lg:text-lg max-w-[450px] leading-8 mt-4 lg:mt-6">
              SS Coin (SSC) is a BEP-20 utility token enabling secure,
              instant e-commerce and global payments.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-5 lg:mt-8">

              <a
                href="/presale"
                className="group relative w-[170px] h-[52px]"
              >
                <svg
                  className="absolute inset-0"
                  width="170"
                  height="52"
                  viewBox="0 0 170 52"
                >
                  <defs>
                    <linearGradient id="buyGrad">
                      <stop offset="0%" stopColor="#F0B100" />
                      <stop offset="100%" stopColor="#D08700" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M15 0H170V40L152 52H0V12L15 0Z"
                    fill="url(#buyGrad)"
                    className="group-hover:fill-[#D08700] transition-all duration-300"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  Buy SSC Now
                </span>

              </a>

              <a
                href="https://sscoin.gitbook.io/sscoin-docs/"
                className="group relative w-[170px] h-[52px]" target="_blank"
  rel="noopener noreferrer" 
              >
                <svg
                  className="absolute inset-0"
                  width="170"
                  height="52"
                  viewBox="0 0 170 52"
                >
                  <path
                    d="M15 0H170V40L152 52H0V12L15 0Z"
                    fill="transparent"
                    stroke="#F0B100"
                    strokeWidth="1.5"
                    className="group-hover:fill-[#F0B100]"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-[#F0B100] group-hover:text-black font-medium transition">
                  Whitepaper
                </span>

              </a>

            </div>

            {/* Features */}

            <div className="flex flex-wrap gap-2 xl:gap-4 mt-6 lg:mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="rounded-xl p-[1px] bg-gradient-to-r from-[#F0B100] to-[#D08700]"
                >

                  <div className="bg-black rounded-xl px-2 xl:px-4 py-[5px] xl:py-3">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.icon}
                        className="w-10 h-10"
                        alt=""
                      />

                      <div>

                        <h4 className="text-white text-sm">
                          {item.title}
                        </h4>

                        <p className="text-[#BFBFBF] text-xs">
                          {item.subtitle}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Image */}

          <div className="flex justify-center lg:justify-end">

            <img
              src={heroCoin}
              alt=""
              className="w-full max-w-[700px] object-contain animate-pulse"
            />

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-14 mb-6 p-[1px] rounded-2xl bg-gradient-to-r from-[#F0B100] to-[#D08700]">

          <div className="rounded-2xl overflow-hidden bg-black">

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[rgba(240,177,0,0.25)]">

              {stats.map((item, index) => (



                <div
                  key={index}
                  className="
    relative
    bg-black
    px-4 py-6
    flex items-center
    gap-3
    shadow-[inset_0px_0px_60px_0px_#F0B1002E]

    after:content-['']
    after:absolute
    after:top-0
    after:right-0
    after:w-[1px]
    after:h-full
    after:bg-[linear-gradient(180deg,#000000_0%,rgba(253,199,0,0.44)_45.68%,#000000_100%)]

    before:content-['']
    before:absolute
    before:left-0
    before:bottom-0
    before:w-full
    before:h-[1px]
    before:bg-[linear-gradient(90deg,#000000_0%,rgba(253,199,0,0.44)_45.68%,#000000_100%)]
  "
                >
                  {/* Image - 60% */}
                  <div className="w-[32%] flex justify-center">
                    {/* <img
                      src={coinIcon}
                      className="w-14 h-14 object-contain"
                      alt=""
                    /> */}
                     <img
                      src={item.img}
                      className="w-14 h-14 object-contain"
                      alt=""
                    />
                  </div>

                  {/* Content - 40% */}
                  <div className="w-[68%] text-right">
                    <h2
                      className="
      text-2xl
      font-semibold
      bg-gradient-to-r
      from-[#F0B100]
      to-[#D08700]
      bg-clip-text
      text-transparent
      "
                    >
                      {item.value}
                    </h2>

                    <p className="text-[#D8D8D8] text-[9px] xl:text-[10px] mb-0 leading-[16px]">
                      {item.label}
                    </p>

                    <span className="text-[#999] text-[9px] xl:text-[10px] leading-[16px] block">
                      {item.desc}
                    </span>
                  </div>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}





// import React, { useEffect, useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";
// import slide1 from "../assets/hero/heroImage.png";
// import slide2 from "../assets/hero/heroImage.png";
// import slide3 from "../assets/hero/heroImage.png";

// import user1 from "../assets/hero/user1.png";
// import user2 from "../assets/hero/user2.png";
// import user3 from "../assets/hero/user3.png";

// const slides = [slide1, slide2, slide3];
// const allSlides = [...slides, ...slides];

// const users = [user1, user2, user3];

// export default function HeroSection() {
//   const [active, setActive] = useState(0);

//  useEffect(() => {
//   const timer = setInterval(() => {
//     setActive((prev) => {
//       if (prev === slides.length - 1) {
//         return 0;
//       }

//       return prev + 1;
//     });
//   }, 3000);

//   return () => clearInterval(timer);
// }, []);

//   return (
//     <section className="bg-black pt-[100px] w-full overflow-hidden relative">

//       <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-6 md:pt-10 pb-8 sm:pb-12  lg:pb-16">

//         {/* Top */}

//         <div className="">

//           {/* Row 1 */}

//           <div className="grid md:grid-cols-[1px_240px_0.95fr] lg:grid-cols-[50px_240px_0.95fr] items-start">
//             <div>
//               {/* Empty for equal spacing */}
//             </div>

//             <div className="pt-3 pr-2 text-center md:text-end">
//               <p className=" text-[#F0F0F0] font-['Poppins] text-sm sm:text-base lg:text-xl leading-[24px]">
//                 BEP-20
//               </p>

//               <p className=" text-[#F0F0F0] font-['Poppins] text-sm sm:text-base lg:text-xl leading-[24px]">
//                 Binance Smart Chain
//               </p>
//             </div>


//             <div className="text-center">

//               <h2
//                 className="
//                   bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent
//                   text-2xl sm:text-4xl md:text-[40px] lg:text-6xl  xl:text-[80px] font-[400]
//                   leading-[1]
//                   tracking-[-2px]
//                 "
//               >
//                 One Transaction at a Time
//               </h2>

//             </div>




//           </div>



//           {/* Row 2 */}

//           <div className="grid md:grid-cols-[1px_1fr_220px] lg:grid-cols-[50px_1fr_220px] items-start mt-2">

//             <div />

//             <div className="text-center">

//               <h2
//                 className="
//                 text-white
//                 text-2xl sm:text-4xl md:text-[39px] lg:text-[56px] xl:text-[80px]
//                 leading-[1]
//                 font-[400]
//               "
//               >
//                 Powering Digital Commerce
//               </h2>

//             </div>


//             <div className="pt-5 pl-2 xl:pt-8">

//               <p
//                 className="
//         text-[#D8D8D8]
//         text-sm font-[400] font-['Poppins']
//         leading-[22px] text-center md:text-left

//       "
//               >
//                 SS Coin (SSC) is a BEP-20 utility token enabling secure,
//                 instant e-commerce and global payments.
//               </p>

//             </div>

//           </div>



//           {/* Buttons */}

//           <div className="flex flex-wrap justify-center gap-6 mt-12">

//             {/* Buy SSC Now */}

//             <a href="/presale" className="group relative w-[160px] h-[48px]">

//               <svg
//                 className="absolute inset-0"
//                 width="160"
//                 height="48"
//                 viewBox="0 0 160 48"
//               >
//                 <defs>
//                   <linearGradient id="grad" x1="0" y1="0" x2="160" y2="0">
//                     <stop offset="0%" stopColor="#F0B100" />
//                     <stop offset="100%" stopColor="#D08700" />
//                   </linearGradient>
//                 </defs>

//                 <path
//                   d="M15 0H160V36L145 48H0V12L15 0Z"
//                   fill="url(#grad)"
//                    className="group-hover:fill-[#D08700] transition-all duration-300"
//                 />
//               </svg>

//               <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
//                 Buy SSC Now
//               </span>

//             </a>



//             {/* Whitepaper */}

//             <a
//               href="/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative w-[160px] h-[48px] block transition-all duration-300 hover:scale-105"
//             >
//               <svg
//                 className="absolute inset-0"
//                 width="160"
//                 height="48"
//                 viewBox="0 0 160 48"
//               >
//                 <path
//                   d="M15 0H160V36L145 48H0V12L15 0Z"
//                   fill="transparent"
//                   stroke="#F0B100"
//                   className="group-hover:fill-[#F0B100] transition-all duration-300"
//                 />
//               </svg>

//               <span className="absolute inset-0 flex items-center justify-center text-[#F0B100] group-hover:text-black font-medium transition-all duration-300">
//                 Whitepaper
//               </span>
//             </a>

//           </div>

//         </div>

//         {/* Slider */}

//         <div className="relative mt-8">

//           <div className="overflow-hidden">

//             <div
//               className="flex transition-transform duration-700 ease-linear"
//               style={{
//                 transform: `translateX(-${active * 100}%)`,
//               }}
//             >

//               {allSlides.map((img, i) => (

//                 <div
//                   key={i}
//                   className="w-full flex-shrink-0 flex justify-center"
//                 >

//                   <img
//                     src={img}
//                     alt=""
//                     className="w-[1100px] max-w-full object-contain"
//                   />

//                 </div>

//               ))}

//             </div>

//           </div>


//           {/* Rating */}

//           <div className="absolute bottom-0 lg:bottom-10 left-0 flex items-center gap-2 md:gap-5">

//             <div>

//               <p className="text-[#ffff] Font-[400] font-['Poppins'] text-[10px] sm:text-xs md:text-sm">

//                 Rating

//               </p>

//               <div className="flex items-center gap-2">

//                 <span className="text-white text-lg sm:text-2xl md:text-4xl font-semibold">

//                   4.9

//                 </span>
//                 <div className="w-3 md:w-6 h-3 md:h-6 rounded-full bg-white p-[1.5px] md:p-1 ">

//                   <FaArrowUp className="text-[#F0B100] text-[9px] md:text-base" />
//                 </div>

//               </div>

//             </div>


//             <div className="flex  -space-x-1 sm:-space-x-2 md:-space-x-3">

//               {users.map((img, i) => (

//                 <img
//                   key={i}
//                   src={img}
//                   alt=""
//                   className="w-4 sm:w-8 md:w-12 h-4 sm:h-8 md:h-12 rounded-full border-2 border-black object-cover"
//                 />

//               ))}

//             </div>

//           </div>


//           {/* Right Bottom */}

//           <div className="absolute bottom-0 lg:bottom-10 right-0 flex items-center gap-6">

//             <div className="text-white text-base sm:text-xl md:text-3xl font-[400]">

//               {String(active + 1).padStart(2, "0")}

//               <span className="text-[#FFFFFF] text-[10px] sm:text-xs md:text-sm">

//                 /0{slides.length}

//               </span>

//             </div>


//             <div className="flex gap-3">

//               {slides.map((_, i) => (

//                 <button
//                   key={i}
//                   onClick={() => setActive(i)}
//                   className={`transition-all duration-300 rounded-full
//                   ${active === i
//                       ? "w-4 sm:w-8 h-[8px] sm:h-3 bg-white"
//                       : "w-[8px] h-[8px] sm:w-3 sm:h-3 bg-[#FFFFFF21]"
//                     }`}
//                 />

//               ))}

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* Mobile */}

//       <style>{`

//         @media(max-width:768px){

//           h2{
//             font-size:38px !important;
//           }

//           h1{
//             font-size:32px !important;
//           }

//         }

//       `}</style>

//     </section>
//   );
// }

