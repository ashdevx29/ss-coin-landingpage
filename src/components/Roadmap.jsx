import React from "react";

const roadmap = [
  {
    phase: "PHASE 1",
    title: "Foundation & Development",
    side: "left",
    items: [
      "Project Concept Finalization",
      "Smart Contract Development & Audit",
      "Website Launch",
      "Whitepaper Release",
      "Social Media Setup",
      "Community Building Initiatives",
    ],
  },
  {
    phase: "PHASE 2",
    title: "Presale & Community Growth",
    side: "right",
    items: [
      "SSC Token Generation Event",
      "ICO / Presale Launch",
      "Marketing Campaigns",
      "Influencer Partnerships",
      "Referral Program Launch",
      "Community Expansion",
    ],
  },
  {
    phase: "PHASE 3",
    title: "Ecosystem Development",
    side: "left",
    items: [
      "Payment Gateway Development",
      "Merchant Onboarding",
      "E-Commerce Integration",
      "QR Payment System",
      "Rewards & Loyalty Program",
      "Strategic Business Partnerships",
    ],
  },
  {
    phase: "PHASE 4",
    title: "Exchange Expansion",
    side: "right",
    items: [
      "DEX Listing",
      "CEX Listing Applications",
      "Liquidity Pool Expansion",
      "Trading Campaigns",
      "Global Community Growth",
      "Market Making Partnerships",
    ],
  },
  {
    phase: "PHASE 5",
    title: "Mobile & Global Adoption",
    side: "left",
    items: [
      "SSC Mobile Wallet Launch",
      "Advanced Payment Solutions",
      "International Merchant Network",
      "API Integration Services",
      "Enterprise Partnerships",
      "Global Expansion Strategy",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-black text-white py-8 md:py-14 overflow-hidden">
      <div className="max-w-full  px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">

        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl text-[#ffffff] font-[400]">
          Strategic Development{" "}
          <span className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]
              bg-clip-text
              text-transparent">Roadmap</span>
        </h2>

        <p className="text-center text-[#D8D8D8] font-['Poppins'] text-sm font-[400] mt-3 md:mt-5 max-w-2xl mx-auto">
          Our roadmap reflects a disciplined milestone-driven approach
          to building a sustainable and globally scalable payment ecosystem.
        </p>

        <div className="relative max-w-[1202px] hidden md:block font-['Inter'] mx-auto mt-12">

          {/* Center line */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              top-[200px] lg:top-[200px] xl:top-[180px]
              bottom-[180px] lg:bottom-[200px] xl:bottom-[180px]
              w-[4px]
              bg-[linear-gradient(122.92deg,rgba(255,216,72,0.7)_0%,rgba(240,177,0,0.7)_60.48%)]
            "
          />
          {roadmap.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center md:mb-0 mb-20 ${item.side === "left"
                ? "justify-start"
                : "justify-end"
                }`}
            >

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#F6BC00_48.08%,_#FDC700_100%)]" />

              {/* Horizontal connector */}
              <div
                className={`absolute top-1/2 h-[1px] min-w-[40px]
              ${item.side === "left"
                    ? "left-[22%] right-1/2"
                    : "left-1/2 right-[22%] "
                  }
              bg-[repeating-linear-gradient(to_right,rgba(253,199,0,0.7)_0_8px,transparent_8px_14px)]
              `}
              />

              <div
                className={`relative rounded-xl p-[3px] ${item.side === "left"
                  ? "bg-[linear-gradient(90deg,rgba(0,0,0,0)_75.19%,rgba(240,177,0,0.7)_80.61%,rgba(240,177,0,0.7)_100%)]"
                  : "bg-[linear-gradient(270deg,rgba(0,0,0,0)_75.19%,rgba(240,177,0,0.7)_80.61%,rgba(240,177,0,0.7)_100%)]"
                  }`}
              >
                <div className="bg-[#000] p-2 rounded-xl">
                  <div
                    className={`
                     w-[300px] lg:w-[360px] xl:w-[420px]
                      rounded-[8px]
                      p-[2px]
                      bg-[linear-gradient(152.14deg,rgba(253,199,0,0.7)_9.96%,rgba(240,177,0,0.406)_100%)]
                      ${item.side === "left"
                        ? "mr-auto"
                        : "ml-auto"
                      }
                    `}
                  >
                    <div className="rounded-[8px] bg-[#050505] p-5 lg:p-8">

                    
                      <h4 className="text-lg lg:text-xl font-[600] text-white mb-3">
                        {item.phase}
                      </h4>

                      <h3 className="text-xl lg:text-2xl text-[#ffffff] font-semibold mb-5">
                        {item.title}
                      </h3>

                      <ul className="space-y-3">
                        {item.items.map((list, i) => (
                          <li
                            key={i}
                            className="text-[#99A1AF] text-sm font-[400] flex items-center gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-[#F0B100]"></span>
                            {list}
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       {/* Mobile Timeline */}
<div className="md:hidden relative mt-14">

  {/* Vertical Line */}
  <div
    className="
      absolute
      left-2 
     top-[145px] sm:top-[170px]
              bottom-[145px] sm:bottom-[170px]
      w-[4px]
      bg-[linear-gradient(122.92deg,rgba(255,216,72,0.7)_0%,rgba(240,177,0,0.7)_60.48%)]
    "
  />

  {roadmap.map((item, index) => (
    <div key={index} className="relative pl-12 sm:pl-16 mb-10">

      {/* Dot */}
      <div
        className="
          absolute
          left-[-2px]
          top-1/2
          -translate-y-1/2
          w-6
          h-6
          rounded-full
          bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#F6BC00_48.08%,_#FDC700_100%)]
        "
      />

      {/* Connector */}
      <div
        className="
          absolute
          left-[26px]
          top-1/2
          -translate-y-1/2
          w-5 sm:w-8
          h-[1px]
          bg-[repeating-linear-gradient(to_right,rgba(253,199,0,0.7)_0_8px,transparent_8px_14px)]
        "
      />

      {/* Card */}
      <div className="relative rounded-xl p-[3px]
        bg-[linear-gradient(270deg,rgba(0,0,0,0)_75.19%,rgba(240,177,0,0.7)_80.61%,rgba(240,177,0,0.7)_100%)]">

        <div className="bg-[#000] p-2 rounded-xl">

          <div className="
            rounded-[8px]
            p-[2px]
            bg-[linear-gradient(152.14deg,rgba(253,199,0,0.7)_9.96%,rgba(240,177,0,0.406)_100%)]
          ">

            <div className="rounded-[8px] bg-[#050505] p-5">

              <h4 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                {item.phase}
              </h4>

              <h3 className="text-lg sm:text-xl text-white font-semibold mb-3 sm:mb-5">
                {item.title}
              </h3>

              <ul className="space-y-2 sm:space-y-3">
                {item.items.map((list, i) => (
                  <li
                    key={i}
                    className="text-[#99A1AF] text-xs sm:text-sm flex items-center gap-2 sm:gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F0B100]" />
                    {list}
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </div>
  ))}
</div>



      </div>
    </section >
  );
}


