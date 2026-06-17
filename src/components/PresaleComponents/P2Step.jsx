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
    <section className="bg-black py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5">

        {/* Heading */}
        <h2 className="text-center text-[34px] md:text-[48px] font-semibold mb-20">
          <span className="text-white">How To Buy </span>

          <span className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)] bg-clip-text text-transparent">
            SS Coin
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-20 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={buyImg}
              alt=""
              className="w-full max-w-[520px] object-contain"
            />
          </div>

          {/* RIGHT STEPS */}
          <div className="relative">

            {/* Main Vertical Line */}
            <div className="absolute left-[23px] top-[20px] bottom-[20px] w-[2px] bg-[#F0B100]/40"></div>

            <div className="space-y-14">

              {steps.map((item, index) => (
                <div key={index} className="flex gap-8 relative">

                  {/* Circle */}
                  <div className="relative z-10">

                    <div className="w-[48px] h-[48px] rounded-full border-[5px] border-[#F0B100] bg-black flex items-center justify-center">

                      <span className="text-[10px] font-bold text-white">
                        {item.step}
                      </span>

                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-1">

                    <h3 className="text-[#F0B100] text-[28px] font-semibold leading-none">
                      {item.title}
                    </h3>

                    {/* Horizontal Line */}
                    <div className="w-[90px] h-[2px] bg-[#F0B100] mt-4 mb-5"></div>

                    <p className="text-[#BDBDBD] text-[17px] leading-[30px] max-w-[470px]">
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