import heroVideo from "../assets/newhero/bg-hero.mp4";
import heroCoin from "../assets/newhero/hero-right.png";
import coinIcon from "../assets/newhero/icon.png";

const features = [
  {
    title: "Audited",
    subtitle: "Smart Contract",
  },
  {
    title: "100 % Secure",
    subtitle: "Decentralized",
  },
  {
    title: "KYC Verified",
    subtitle: "Trusted Project",
  },
];

const stats = [
  {
    value: "24M",
    label: "Total Supply",
    desc: "Fixed and Transparent",
  },
  {
    value: "500k+",
    label: "Global Community",
    desc: "Growing Everyday",
  },
  {
    value: "10k+",
    label: "Merchants ",
    desc: "Accepting SSC",
  },
  {
    value: "100k+",
    label: "wallet Users",
    desc: " Worldwide",
  },
  {
    value: "1M+",
    label: "Transactions",
    desc: "On Chain",
  },
  {
    value: "24/7",
    label: "Support",
    desc: "Always Here",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden font-['Poppins'] py-14 bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>



      <div className="relative max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

        {/* Top Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="max-w-[680px]">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-3">

              <span className="bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent border border-[#F0B100] text-black text-[11px] font-semibold px-2 py-[2px] rounded">
                BEP 20
              </span>

              <span className="text-[#D8D8D8] text-sm sm:text-base">
                Binance Smart Coin
              </span>

            </div>

            {/* Heading */}

            <h2 className="text-2xl sm:text-4xl text-[#ffffff] lg:text-5xl xl:text-7xl  font-[400] leading-[1.05]">

              <span className="block bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent">
                One Transaction{" "}
              </span>
              Infinite Possibilities

            </h2>


            {/* Description */}

            <p className="text-[#D8D8D8] text-sm sm:text-base  lg:text-lg mt-3 max-w-[380px] leading-8">
              SS Coin (SSC) is a BEP-20 utility token enabling secure,
              instant e-commerce and global payments
            </p>


            {/* Buttons */}


            <div className="flex flex-wrap font-['Inter'] justify-start item-start gap-6 mt-5">

              {/* Buy SSC Now */}

              <a
                href="/presale"
                className="group relative w-[160px] h-[48px]"
              >
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
                    className="group-hover:fill-[#D08700] transition-all duration-300"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-[#ffffff] font-medium">
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


            {/* Features */}

            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 md:mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="relative rounded-xl p-[1px] bg-gradient-to-r from-[rgba(240,177,0,0.8)] to-[rgba(208,135,0,0.8)]"
                >
                  <div className="rounded-[11px] sm:px-3 px-2 py-2  sm:py-3 bg-[#000000] backdrop-blur-md">

                    <div className="flex items-center gap-2 sm:gap-3">

                      <img
                        src={coinIcon}
                        className="w-7 sm:w-10 h-7 sm:h-10"
                        alt=""
                      />

                      <div>
                        <h4 className="text-[#D8D8D8] text-xs sm:text-sm font-[500]">
                          {item.title}
                        </h4>

                        <p className="text-[#D8D8D8] font-[400] text-[10px] sm:text-xs">
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
              alt="SS Coin"
              className="w-full max-w-[786px] object-contain"
            />

          </div>

        </div>



        {/* Bottom Stats */}

       <div className="mt-8 md:mt-12 p-[1px] rounded-2xl bg-gradient-to-r from-[#F0B100] to-[#D08700]">

  <div className="rounded-2xl overflow-hidden bg-black">

    <div
  className="
    grid
    grid-cols-2
    md:grid-cols-3
    lg:grid-cols-6

    gap-[1px]

    bg-[linear-gradient(90deg,#000000_0%,rgba(253,199,0,0.44)_45.68%,#000000_100%)]

    rounded-2xl
    overflow-hidden
  "
>
      {stats.map((item, index) => (

        <div
          key={index}
          className="
          min-h-[120px]
          sm:min-h-[140px]
          lg:min-h-[100px]

          px-2
          sm:px-3

          py-3

          flex
          flex-col
          sm:flex-row

          items-center
          justify-center
          gap-3

          text-center
          sm:text-left

          bg-black
          shadow-[inset_0px_0px_60px_0px_#F0B1002E]
        "
        >

          <img
            src={coinIcon}
            alt=""
            className="
            w-12 h-12
            sm:w-14 sm:h-14
            lg:w-16 lg:h-16
            flex-shrink-0
            "
          />

          <div>

            <h2 className="
            mb-1
            bg-gradient-to-r
            from-[#F0B100]
            to-[#D08700]
            bg-clip-text
            text-transparent

            text-xl
            sm:text-2xl
            lg:text-3xl

            font-medium
            ">
              {item.value}
            </h2>

            <p className="
            text-[#D8D8D8]
            text-[10px]
            mb-1
            ">
              {item.label}
            </p>

            <span className="
            block
            text-[#D8D8D8]
            text-[10px]
            ">
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

