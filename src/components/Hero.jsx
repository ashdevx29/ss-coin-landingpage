import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import slide1 from "../assets/hero/heroImage.png";
import slide2 from "../assets/hero/heroImage.png";
import slide3 from "../assets/hero/heroImage.png";

import user1 from "../assets/hero/user1.png";
import user2 from "../assets/hero/user2.png";
import user3 from "../assets/hero/user3.png";

const slides = [slide1, slide2, slide3];

const users = [user1, user2, user3];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black pt-[100px] w-full overflow-hidden relative">

      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-6 md:pt-10 pb-8 sm:pb-12  lg:pb-16">

        {/* Top */}

        <div className="">

          {/* Row 1 */}

          <div className="grid md:grid-cols-[1px_240px_0.95fr] lg:grid-cols-[50px_240px_0.95fr] items-start">
            <div>
              {/* Empty for equal spacing */}
            </div>

            <div className="pt-3 pr-2 text-center md:text-end">
              <p className=" text-[#F0F0F0] font-['Poppins] text-sm sm:text-base lg:text-xl leading-[24px]">
                BEP-20
              </p>

              <p className=" text-[#F0F0F0] font-['Poppins] text-sm sm:text-base lg:text-xl leading-[24px]">
                Binance Smart Chain
              </p>
            </div>


            <div className="text-center">

              <h2
                className="
                  bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent
                  text-2xl sm:text-4xl md:text-[40px] lg:text-6xl  xl:text-[80px] font-[400]
                  leading-[1]
                  tracking-[-2px]
                "
              >
                One Transaction at a Time
              </h2>

            </div>




          </div>



          {/* Row 2 */}

          <div className="grid md:grid-cols-[1px_1fr_220px] lg:grid-cols-[50px_1fr_220px] items-start mt-2">

            <div />

            <div className="text-center">

              <h2
                className="
                text-white
                text-2xl sm:text-4xl md:text-[39px] lg:text-[56px] xl:text-[80px]
                leading-[1]
                font-[400]
              "
              >
                Powering Digital Commerce
              </h2>

            </div>


            <div className="pt-5 pl-2 xl:pt-8">

              <p
                className="
        text-[#D8D8D8]
        text-sm font-[400] font-['Poppins']
        leading-[22px] text-center md:text-left

      "
              >
                SS Coin (SSC) is a BEP-20 utility token enabling secure,
                instant e-commerce and global payments.
              </p>

            </div>

          </div>



          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            {/* Buy SSC Now */}

            <a href="/preslae" className="group relative w-[160px] h-[48px]">

              <svg
                className="absolute inset-0"
                width="160"
                height="48"
                viewBox="0 0 160 48"
              >
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="160" y2="0">
                    <stop offset="0%" stopColor="#F0B100" />
                    <stop offset="100%" stopColor="#D08700" />
                  </linearGradient>
                </defs>

                <path
                  d="M15 0H160V36L145 48H0V12L15 0Z"
                  fill="url(#grad)"
                />
              </svg>

              <span className="absolute inset-0 flex items-center justify-center text-black font-medium">
                Buy SSC Now
              </span>

            </a>



            {/* Whitepaper */}

            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[160px] h-[48px] block transition-all duration-300 hover:scale-105"
            >
              <svg
                className="absolute inset-0"
                width="160"
                height="48"
                viewBox="0 0 160 48"
              >
                <path
                  d="M15 0H160V36L145 48H0V12L15 0Z"
                  fill="transparent"
                  stroke="#F0B100"
                  className="group-hover:fill-[#F0B100] transition-all duration-300"
                />
              </svg>

              <span className="absolute inset-0 flex items-center justify-center text-[#F0B100] group-hover:text-black font-medium transition-all duration-300">
                Whitepaper
              </span>
            </a>

          </div>

        </div>

        {/* Slider */}

        <div className="relative mt-8">

          <div className="overflow-hidden">

            <div
              className="flex transition-all duration-700 ease-in-out"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >

              {slides.map((img, i) => (

                <div
                  key={i}
                  className="w-full flex-shrink-0 flex justify-center"
                >

                  <img
                    src={img}
                    alt=""
                    className="w-[1100px] max-w-full object-contain"
                  />

                </div>

              ))}

            </div>

          </div>


          {/* Rating */}

          <div className="absolute bottom-0 lg:bottom-10 left-0 flex items-center gap-2 md:gap-5">

            <div>

              <p className="text-[#ffff] Font-[400] font-['Poppins'] text-[10px] sm:text-xs md:text-sm">

                Rating

              </p>

              <div className="flex items-center gap-2">

                <span className="text-white text-lg sm:text-2xl md:text-4xl font-semibold">

                  4.9

                </span>
                <div className="w-3 md:w-6 h-3 md:h-6 rounded-full bg-white p-[1.5px] md:p-1 ">

                  <FaArrowUp className="text-[#F0B100] text-[9px] md:text-base" />
                </div>

              </div>

            </div>


            <div className="flex  -space-x-1 sm:-space-x-2 md:-space-x-3">

              {users.map((img, i) => (

                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-4 sm:w-8 md:w-12 h-4 sm:h-8 md:h-12 rounded-full border-2 border-black object-cover"
                />

              ))}

            </div>

          </div>


          {/* Right Bottom */}

          <div className="absolute bottom-0 lg:bottom-10 right-0 flex items-center gap-6">

            <div className="text-white text-base sm:text-xl md:text-3xl font-[400]">

              {String(active + 1).padStart(2, "0")}

              <span className="text-[#FFFFFF] text-[10px] sm:text-xs md:text-sm">

                /0{slides.length}

              </span>

            </div>


            <div className="flex gap-3">

              {slides.map((_, i) => (

                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full
                  ${active === i
                      ? "w-4 sm:w-8 h-[8px] sm:h-3 bg-white"
                      : "w-[8px] h-[8px] sm:w-3 sm:h-3 bg-[#FFFFFF21]"
                    }`}
                />

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* Mobile */}

      <style>{`

        @media(max-width:768px){

          h2{
            font-size:38px !important;
          }

          h1{
            font-size:32px !important;
          }

        }

      `}</style>

    </section>
  );
}



// import heroImage from "../assets/hero/heroImage.png";
// import user1 from "../assets/hero/user1.png"
// import user2 from "../assets/hero/user2.png"
// import user3 from "../assets/hero/user3.png"

// const Hero = () => {
//   return (
//     <section className="overflow-hidden pt-[140px] min-h-screen bg-black">
//       <div className="mx-auto px-8 max-w-[1470px]">

//         {/* Hero Top */}
//         <div className="">

// <div className="w-full">
//   {/* Mobile & Tablet */}
//   <div className="flex flex-col items-center text-center lg:hidden">
//     <h1 className="leading-none font-[Gilroy] text-transparent font-medium text-[42px] bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text">
//       One Transaction at a Time
//     </h1>

//     <div className="mt-4 font-[Poppins]">
//       <h3 className="text-[#F0F0F0] text-[20px] font-light leading-[1.3]">
//         BEP-20 Binance Smart Chain
//       </h3>
//     </div>

//     <h2 className="mt-4 text-white font-[Gilroy] font-light leading-none text-[42px]">
//       Powering Digital Commerce
//     </h2>

//     <div className="mt-4 max-w-[320px] font-[Poppins] font-light">
//       <p className="text-[#D8D8D8] text-[14px] leading-[1.5]">
//         SS Coin (SSC) is a BEP-20 utility token enabling secure, instant
//         e-commerce and global payments.
//       </p>
//     </div>
//   </div>

//   {/* Desktop */}
//   <div className="hidden lg:block">
//     {/* Top Row */}
//     <div className="flex items-start justify-center gap-12">
//       <div className="w-[230px] text-right font-[Poppins]">
//         <h3 className="text-[#F0F0F0] text-[20px] font-light leading-[1.3]">
//           BEP-20 Binance Smart Chain
//         </h3>
//       </div>

//       <h1 className="leading-none font-[Gilroy] text-transparent font-medium bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text lg:text-[55px] xl:text-[70px]">
//         One Transaction at a Time
//       </h1>
//     </div>

//     {/* Bottom Row */}
//     <div className="flex items-center gap-10 mt-4 lg:justify-between xl:justify-center">
//       <h2 className="text-white font-[Gilroy] font-light leading-none lg:text-[50px] xl:text-[70px]">
//         Powering Digital Commerce
//       </h2>

//       <div className="relative top-9 max-w-[260px] font-[Poppins] font-light lg:left-1 xl:left-10">
//         <p className="text-[#D8D8D8] text-[14px] leading-[1.5]">
//           SS Coin (SSC) is a BEP-20 utility token enabling secure, instant
//           e-commerce and global payments.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//   {/* Buttons */}
//   <div className="flex justify-center gap-6 mt-20">

//    <button
//   className="w-[150px] h-[43px] text-white text-[16px] font-medium inter [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]"
//   style={{
//     background: "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
//   }}
// >
//   Buy SSC Now
// </button>

//     <button className="w-[150px] h-[43px] text-[#D9A11D] bg-transparent border-[#D9A11D] border [clip-path:polygon(10%_0%,100%_0%,100%_75%,90%_100%,0%_100%,0%_25%)]">
//       Whitepaper
//     </button>

//   </div>

// </div>

//         {/* Hero Image */}
//         <div className="relative mt-[-20]">

//           <img
//             src={heroImage}
//             alt="SS Coin"
//             className="object-contain mx-auto w-full max-w-[1350px]"
//           />

//           <div className="absolute left-28 bottom-[-10px] flex items-center gap-8">

//   <div>
//     <p className="text-white text-[12px] font-[Poppins]">
//       Rating
//     </p>

//     <div className="flex items-center gap-2 mt-2">
//       <h3 className="text-white text-[20px] font-[Poppins]">
//         4.9
//       </h3>

//       <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full">
//         <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0B100] to-[#D08700]">
//           ↑
//         </span>
//       </div>
//     </div>
//   </div>

//   <div className="flex -space-x-3">
//     <img src={user1} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
//     <img src={user2} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
//     <img src={user3} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
//   </div>

// </div>

//           {/* Slider */}
//           <div className="absolute right-10 bottom-10 flex items-center gap-6">

//             <h3 className="text-white text-5xl font-light">
//               01<span className="text-xl">/03</span>
//             </h3>

//             <div className="flex gap-3">
//               <div className="flex gap-3">
//   <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
//   <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
//   <span className="w-5 h-5 bg-amber-50 rounded-full border-2 border-white"></span>
//   <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
//   <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
// </div>
//             </div>

//           </div>

//         </div>

//       </div>
//       <div className="mt-12 pb-16 mt-30 ml-20 md:mt-16">
//   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

//     <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
// <h2
//   className="text-[35px] font-semibold text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text"
// >
//   24M
// </h2>
//       <p className="mt-3 text-[#8E929B] text-[15px]">Total Supply</p>
//     </div>

//     <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
//       <h2 className="text-[#D9A11D] text-[35px] font-semibold">$0.12</h2>
//       <p className="mt-3 text-[#8E929B] text-[15px]">Token Price</p>
//     </div>

//     <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
//       <h2 className="text-[#D9A11D] text-[35px] font-semibold">BEP-20</h2>
//       <p className="mt-3 text-[#8E929B] text-[15px]">Blockchain Standard</p>
//     </div>

//     <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
//       <h2 className="text-[#D9A11D] text-[35px] font-semibold">10+</h2>
//       <p className="mt-3 text-[#8E929B] text-[15px]">Real-World Use Cases</p>
//     </div>

//   </div>
// </div>
//     </section>
//   );
// };

// export default Hero;