import React from "react";
import buyImg from "../../assets/step.png";

const steps = [
  {
    step: "STEP-1",
    title: "Connect Your Wallet",
    desc: "Download and install a BEP-20 compatible wallet such as MetaMask, Trust Wallet, or SafePal. Ensure your wallet is connected to the Binance Smart Chain (BSC) network.",
  },
  {
    step: "STEP-2",
    title: "Fund Your Wallet",
    desc: "Deposit BNB or USDT (BEP-20) into your wallet. These assets will be used to purchase SSC during the presale.",
  },
  {
    step: "STEP-3",
    title: "Enter Purchase Amount",
    desc: "Choose the amount of SSC you wish to purchase. The platform will automatically calculate the number of tokens you will receive based on the current presale price.",
  },
  {
    step: "STEP-4",
    title: "Claim Your Token",
    desc: "Once the presale concludes, eligible participants can claim their SSC tokens directly into their connected wallet.",
  },
];

export default function P2Step() {
  return (
    <section className="bg-black py-6 md:py-10 overflow-hidden">
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-4xl lg:text-6xl font-[400] mb-16">
          <span className="text-white">How To Buy </span>

          <span className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)] bg-clip-text text-transparent">
            SS Coin
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-10 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex order-2 lg:order-1 justify-center">
            <img
              src={buyImg}
              alt=""
              className="w-full max-w-[700px] object-contain"
            />
          </div>

          {/* RIGHT STEPS */}
          <div className="relative  order-1 lg:order-2">

            <div className="space-y-6">
              {steps.map((item, index) => (
                <div key={index} className="flex gap-4 relative">

                  {/* Circle */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-[54px] sm:w-[80px] h-[54px] sm:h-[80px] rounded-full p-1 sm:p-[8px] bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <span className="text-[10px] sm:text-sm font-normal text-white">
                          {item.step}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 relative pt-1">

                    {/* Connected Horizontal Line */}
                    <div className="absolute left-[-26px] sm:left-[-96px] top-[35px] sm:top-[40px] w-[180px] sm:w-[330px] h-[3px] bg-[linear-gradient(89.84deg,_#F0B100_2.91%,_#000000_89.89%)]"></div>

                    <h3 className="relative z-10 bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)] bg-clip-text text-transparent text-base min-[350px]:text-lg sm:text-2xl font-medium">
                      {item.title}
                    </h3>

                    <p className="mt-3 sm:mt-5 text-xs min-[350px]:text-sm sm:text-base md:text-lg xl:text-xl text-white leading-[20px] md:leading-[30px] max-w-[480px] relative z-10">
                      {item.desc}
                    </p>

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