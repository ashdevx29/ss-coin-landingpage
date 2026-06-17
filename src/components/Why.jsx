import React from "react";
import aboutCoin from "../assets/hero/whyCoin.png";
import { HiMiniArrowRight } from "react-icons/hi2";

const About = () => {
  return (
    <section
      className="relative overflow-hidden py-8 lg:py-16 bg-black"
    >
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}

          <div className=" relative">

            <img
              src={aboutCoin}
              alt="SS Coin"
              className="
              w-full
              max-w-[560px]
              mx-auto
              rounded-[16px]
              object-cover
              "
            />

            {/* Arrow */}

            <button
              className="
              absolute 
              bottom-[-30px] sm:bottom-[-20px] left-[10px]
              sm:left-[40px] xl:left-[60px]

              w-[70px]
              h-[70px]

              

              flex
              items-center
              justify-center


              hover:border-[#F0B100]
              transition-all
              duration-300
              "
            >

              <HiMiniArrowRight
                className="
                text-white font-[400]
                text-[28px] sm:text-[40px]
                "
              />

            </button>

          </div>


          {/* RIGHT */}

          <div className="">

            <h2 className="
            text-2xl
            sm:text-4xl
            xl:text-5xl
            max-w-[500px] 
            leading-[1.15]
            font-[400]
            ">

              <span className="text-white">

                Why the World Needs{" "}

              </span>

            

              <span className="
              bg-gradient-to-r
                from-[#F0B100]
                to-[#D08700]
                bg-clip-text
                text-transparent
              ">

                SS Coin

              </span>

            </h2>


            <p
              className="
              text-[#D8D8D8]
              mt-4 font-['Poppins'] font-[400]
              text-sm md:text-base
              leading-[28px]
              "
            >

              The global digital payments market is projected to exceed $20 trillion by 2030. Yet, billions remain underserved by legacy banking, burdened by high fees, settlement delays, and geographic restrictions. SS Coin is built to solve this.
            </p>


            {/* FEATURES */}


            <div className="grid  font-['Inter'] sm:grid-cols-2 gap-x-6 xl:gap-x-14 gap-y-6 xl:gap-y-12 mt-6 xl:mt-14">


              {/* Item 1 */}

              <div>

                <div className="flex items-center gap-3 xl:gap-4">

                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F0B100] to-[#D08700]" />

                  <h4 className="text-white text-lg sm:text-xl font-[600]">

                    Lightning Fast

                  </h4>

                </div>


                <p className="
                text-[#99A1AF]
                font-[400] text-sm md:text-base 
                leading-[24px]
                ml-7
                mt-5
                ">

                  Sub-second transaction finality on Binance Smart Chain ensures your payments never wait.

                </p>

              </div>


              {/* Item 2 */}

              <div>

                <div className="flex items-center gap-3 xl:gap-4">

                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F0B100] to-[#D08700]" />

                  <h4 className="text-white text-lg sm:text-xl font-[600]">

                    Secure by Design

                  </h4>

                </div>


                <p className=" text-[#99A1AF]
                font-[400] text-sm md:text-base 
                leading-[24px]
                ml-7
                mt-5
                ">

                  Military-grade encryption and decentralized architecture protect every transaction.

                </p>

              </div>



              {/* Item 3 */}

              <div className="sm:col-span-2">

                <div className="flex items-center gap-3 xl:gap-4">

                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F0B100] to-[#D08700]" />

                  <h4 className="text-white text-lg sm:text-xl font-[600]">

                    Globally Accessible

                  </h4>

                </div>


                <p className="
                text-[#99A1AF]
                font-[400] text-sm md:text-base 
                leading-[24px]
                 ml-7
                mt-5
                ">

                  Send and receive SSC from anywhere in the world,
                  24/7, with no banking intermediary.

                </p>

              </div>


            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;






// import whyCoin from "../assets/hero/whyCoin.png";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const WhySSCoin = () => {
//   return (
//     <section className="overflow-hidden py-16 bg-black lg:py-15">
//       <div className="mx-auto px-4 max-w-[1600px] md:px-8">

//         <div className="grid items-center gap-12 gap-20 lg:grid-cols-2">

//           {/* Left Image */}
//           <div className="relative">

//             <img
//               src={whyCoin}
//               alt="SS Coin"
//               className="object-contain mx-auto ml-40 w-full max-w-[500px]"
//             />

//             {/* Arrow */}
//             <button className="flex items-center">
//   <span className="w-[90px] h-[2px] bg-white"></span>

//   <span
//     className="w-[20px] h-[20px] border-t-[2px] border-r-[2px] border-white rotate-45 -ml-[10px]"
//   />
// </button>
//           </div>

//           {/* Right Content */}
//           <div>

//             <h2
//               className="text-white font-[Gilroy] font-light leading-tight text-[38px] md:text-[25px] lg:text-[48px]"
//             >
//               Why the World Needs
//             </h2>

//             <h2
//              className="font-[Gilroy] font-light leading-tight text-[38px] text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text md:text-[25px] lg:text-[45px]"
//             >
//               SS Coin
//             </h2>

//             <p
//               className="mt-6 max-w-[700px] font-[Poppins] text-[#D8D8D8] leading-[1.8] text-[16px] md:text-[18px] lg:text-[14px]"
//             >
//               The global digital payments market is projected to exceed
//               $20 trillion by 2030. Yet, billions <br></br> remain underserved by
//               legacy banking, burdened by high fees, settlement delays,
//               and <br></br> geographic restrictions. SS Coin is built to solve this.
//             </p>

//             {/* Features */}
//             <div className="grid gap-x-16 gap-y-12 mt-12 md:grid-cols-2">

//               {/* Item */}
//               <div>
//                 <div className="flex items-center gap-4">
//                   <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

//                   <h3 className="text-[#FFFFFF] text-[20px] font-[Inter] font-semibold md:text-[15px] lg:text-[20px]">
//                     Lightning Fast
//                   </h3>
//                 </div>

//                 <p className="mt-5 pl-9 font-[Inter] text-[#99A1AF] text-[14px] leading-[1.8] lg:text-[16px]">
//                   Sub-second transaction finality on Binance Smart Chain
//                   ensures your payments never wait.
//                 </p>
//               </div>

//               {/* Item */}
//               <div>
//                 <div className="flex items-center gap-4">
//                   <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

//                   <h3 className="text-[#FFFFFF] text-[20px] font-[Inter]font-semibold md:text-[15px] lg:text-[20px]">
//                     Secure by Design
//                   </h3>
//                 </div>

//                 <p className="mt-5 pl-9 text-[#99A1AF] font-[Inter] text-[16px] leading-[1.8] lg:text-[16px]">
//                   Military-grade encryption and decentralized
//                   architecture protect every transaction.
//                 </p>
//               </div>

//               {/* Item */}
//               <div className="md:col-span-2">
//                 <div className="flex items-center gap-4">
//                   <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

//                   <h3 className="text-[#FFFFFF] text-[20px] font-[Inter] font-semibold md:text-[15px] lg:text-[20px]">
//                     Globally Accessible
//                   </h3>
//                 </div>

//                 <p className="mt-5 pl-9 text-[#99A1AF] font-[Inter] text-[18px] leading-[1.8] lg:text-[16px]">
//                   Send and receive SSC from anywhere in the world, 24/7,
//                   with no banking intermediary.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhySSCoin;