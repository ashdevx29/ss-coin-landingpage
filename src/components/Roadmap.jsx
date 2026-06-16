const roadmapData = [
  {
    phase: "PHASE 1",
    title: "Foundation & Development",
    side: "left",
    points: [
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
    points: [
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
    points: [
      "Payment Gateway Development",
      "Merchant Onboarding",
      "E-Commerce Integration",
      "QR Payment System",
      "Reward & Loyalty Program",
      "Strategic Business Partnerships",
    ],
  },
  {
    phase: "PHASE 4",
    title: "Exchange Expansion",
    side: "right",
    points: [
      "DEX Listing",
      "CEX Listing Applications",
      "Liquidity Pool Expansion",
      "Trading Campaigns Release",
      "Global Community Growth",
      "Market Making Partnerships",
    ],
  },
  {
    phase: "PHASE 5",
    title: "Mobile & Global Adoption",
    side: "left",
    points: [
      "SSC Mobile Wallet Launch",
      "Advanced Payment Solutions",
      "International Merchant Network",
      "API Integration Services",
      "Enterprise Partnerships",
      "Global Expansion Strategy",
    ],
  },
];

const Roadmap = () => {
  return (
    <section className="overflow-hidden py-24 bg-black">
      <div className="mx-auto px-4 max-w-[1440px] lg:px-8">

        {/* Heading */}
        <div className="mb-24 text-center">
          <h2 className="text-white text-[34px] font-light font-[Gilroy] md:text-[30px] lg:text-[48px]">
            Strategic Development{" "}
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0B100] to-[#D08700]">
  Roadmap
</span>
          </h2>

          <p className="mt-6 mx-auto max-w-[700px] text-[#D8D8D8] text-sm font-[Poppins] md:text-base lg:text-[14px]">
            Our roadmap reflects a disciplined, milestone-driven approach
            to building a sustainable and globally scalable payment ecosystem.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[4px] bg-[#D9A11D] -translate-x-1/2"></div>

          <div className="space-y-[-200px]">

            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.side === "left"
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                <div className="relative w-[540px]">

                  {/* Connector */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      item.side === "left"
                        ? "right-[-130px]"
                        : "left-[-130px]"
                    }`}
                  >
                    <div className="w-[130px] border-t border-dashed border-[#D9A11D]" />
                  </div>

                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#F0B100]
                    shadow-[0_0_25px_rgba(240,177,0,0.9)]
                    ${
                      item.side === "left"
                        ? "right-[-145px]"
                        : "left-[-145px]"
                    }`}
                  />

                  {/* Gold Outer Frame */}
                  <div
                    className={`absolute w-full h-full border-[8px] border-[#D9A11D] rounded-[22px]
                    ${
                      item.side === "left"
                        ? "-top-4 left-4"
                        : "-top-4 -left-4"  
                    }`}
                  />

                  {/* Main Card */}
                  <div className="z-10 relative p-12 min-h-[340px] bg-black border-[#D9A11D] rounded-[18px] border lg:min-h-[260px]">

                    <h4 className="text-white text-[22px] font-bold uppercase">
                      {item.phase}
                    </h4>

                    <h3 className="mt-5 text-white text-[24px] font-semibold">
                      {item.title}
                    </h3>

                    <ul className="mt-8 space-y-4">
                      {item.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[#9CA3AF] text-[18px]"
                        >
                          <span className="mt-[2px] text-[#F0B100]">
                            •
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Mobile Version */}
        <div className="relative lg:hidden">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[3px] bg-[#D9A11D]" />

          <div className="space-y-10">

            {roadmapData.map((item, index) => (
              <div key={index} className="relative pl-12">

                {/* Dot */}
                <div className="absolute left-0 top-7 w-8 h-8 bg-[#F0B100] rounded-full" />

                <div className="p-6 bg-black border-[#D9A11D] rounded-2xl border">

                  <h4 className="text-white text-lg font-bold">
                    {item.phase}
                  </h4>

                  <h3 className="mt-3 text-white text-2xl font-semibold">
                    {item.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[#9CA3AF] text-sm"
                      >
                        <span className="text-[#F0B100]">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Roadmap;