import tokenomicsImg from "../assets/tokenomics.png"; // Apni image path yaha lagao

export default function TokenomicsSection() {
  return (
    <section className="bg-black max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 md:py-14 overflow-hidden">
     <h2 className="text-center text-2xl sm:text-4xl md:text-5xl text-[#ffffff] font-[400]">
          <span className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]
              bg-clip-text
              text-transparent">SSC Tokenomics {" "}</span>— Built for Long-Term Value
        </h2>

        <p className="text-center text-[#D8D8D8] font-['Poppins'] text-sm font-[400] mt-3 md:mt-5 max-w-2xl mx-auto">
          The SS Coin token distribution model is engineered to balance ecosystem growth, investor confidence, liquidity depth, and community incentives.
        </p>
      <div className=" mt-10">

        {/* Top Image */}
        <div className="flex justify-center">
          <img
            src={tokenomicsImg}
            alt="Tokenomics"
            className="w-full max-w-6xl object-contain"
          />
        </div>

        {/* Bottom Cards */}
        <div className="mt-14 max-w-7xl mx-auto">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Token Name"
              value="SS Coin"
            />

            <InfoCard
              title="Symbols"
              value="SSC"
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <InfoCard
              title="Network"
              value="BEP-20"
            />

            <InfoCard
              title="Total Supply"
              value="24,000,000 SSC"
            />
          </div>

          {/* Row 3 */}
          <div className="flex justify-center mt-6">
            <div className="w-full md:w-[48%]">
              <InfoCard
                title="Decimals"
                value="18"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


function InfoCard({ title, value }) {
  return (
    <div className="relative overflow-hidden rounded-xl ">

      {/* Golden Background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(240,177,0,0.15)_0%,rgba(240,177,0,0)_100%)]" />

      {/* Glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#f5b10033,transparent_70%)]" /> */}

      {/* Content */}
      <div className="relative flex h-[60px] sm:h-[90px]">

        {/* Left */}
        <div className="relative w-1/2 flex items-center justify-center">

  {/* Gradient Divider */}
  <div className="absolute right-0 top-0 h-full w-[1px]
    bg-[linear-gradient(180deg,#23201C_0%,#FFA200_48.89%,#23201C_94.48%)]" />

  <h3 className="text-white font-semibold text-sm sm:text-lg">
    {title}
  </h3>
</div>

        {/* Right */}
        <div className="w-1/2 flex items-center justify-center">
          <p className="text-[#F6B318] font-semibold text-sm sm:text-lg">
            {value}
          </p>
        </div>

      </div>
    </div>
  );
}