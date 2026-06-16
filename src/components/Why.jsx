import whyCoin from "../assets/hero/whyCoin.png";
import { ArrowRight, ArrowLeft } from "lucide-react";

const WhySSCoin = () => {
  return (
    <section className="overflow-hidden py-16 bg-black lg:py-15">
      <div className="mx-auto px-4 max-w-[1600px] md:px-8">

        <div className="grid items-center gap-12 gap-20 lg:grid-cols-2">

          {/* Left Image */}
          <div className="relative">

            <img
              src={whyCoin}
              alt="SS Coin"
              className="object-contain mx-auto ml-40 w-full max-w-[500px]"
            />

            {/* Arrow */}
            <button className="flex items-center">
  <span className="w-[90px] h-[2px] bg-white"></span>

  <span
    className="w-[20px] h-[20px] border-t-[2px] border-r-[2px] border-white rotate-45 -ml-[10px]"
  />
</button>
          </div>

          {/* Right Content */}
          <div>

            <h2
              className="text-white font-[Gilroy] font-light leading-tight text-[38px] md:text-[25px] lg:text-[48px]"
            >
              Why the World Needs
            </h2>

            <h2
             className="font-[Gilroy] font-light leading-tight text-[38px] text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text md:text-[25px] lg:text-[45px]"
            >
              SS Coin
            </h2>

            <p
              className="mt-6 max-w-[700px] font-[Poppins] text-[#D8D8D8] leading-[1.8] text-[16px] md:text-[18px] lg:text-[14px]"
            >
              The global digital payments market is projected to exceed
              $20 trillion by 2030. Yet, billions <br></br> remain underserved by
              legacy banking, burdened by high fees, settlement delays,
              and <br></br> geographic restrictions. SS Coin is built to solve this.
            </p>

            {/* Features */}
            <div className="grid gap-x-16 gap-y-12 mt-12 md:grid-cols-2">

              {/* Item */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

                  <h3 className="text-[#FFFFFF] text-[20px] font-[Inter] font-semibold md:text-[15px] lg:text-[20px]">
                    Lightning Fast
                  </h3>
                </div>

                <p className="mt-5 pl-9 font-[Inter] text-[#99A1AF] text-[14px] leading-[1.8] lg:text-[16px]">
                  Sub-second transaction finality on Binance Smart Chain
                  ensures your payments never wait.
                </p>
              </div>

              {/* Item */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

                  <h3 className="text-[#FFFFFF] text-[20px] font-[Inter]font-semibold md:text-[15px] lg:text-[20px]">
                    Secure by Design
                  </h3>
                </div>

                <p className="mt-5 pl-9 text-[#99A1AF] font-[Inter] text-[16px] leading-[1.8] lg:text-[16px]">
                  Military-grade encryption and decentralized
                  architecture protect every transaction.
                </p>
              </div>

              {/* Item */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-4">
                  <span className="w-4 h-4 bg-gradient-to-r from-[#F0B100] to-[#D08700] rounded-full"></span>

                  <h3 className="text-[#FFFFFF] text-[20px] font-[Inter] font-semibold md:text-[15px] lg:text-[20px]">
                    Globally Accessible
                  </h3>
                </div>

                <p className="mt-5 pl-9 text-[#99A1AF] font-[Inter] text-[18px] leading-[1.8] lg:text-[16px]">
                  Send and receive SSC from anywhere in the world, 24/7,
                  with no banking intermediary.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySSCoin;