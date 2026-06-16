import aboutBg from "../assets/images/aboutBg.png";
import aboutCoin from "../assets/images/aboutCoin.png";

const About = () => {
  return (
    <section
      className="overflow-hidden relative py-20 bg-black lg:py-5"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto px-4 max-w-[1600px] md:px-8" >

        {/* Heading */}
        <div className="mx-auto max-w-[1000px] text-center">

          <h2 className="text-[42px] font-light md:text-[30px] lg:text-[48px]">
            <span className="text-white font-[Gilroy]">About </span>
            <span className="font-[Gilroy] text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text">
  SS Coin
</span>
          </h2>

          <p
            className="mt-6 text-[#D8D8D8] text-[16px] leading-[1.8] md:text-[15px] lg:text-[16px]"
          >
            SS Coin (SSC) is a BEP-20 utility token on Binance Smart Chain,
            created to deliver fast, secure,<br></br> and decentralized digital
            payments for businesses and consumers worldwide.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 gap-24 mt-16 mt-24 lg:grid-cols-2">

          {/* Left Content */}
          <div className="order-2 lg:order-1">

            {/* Vision */}
            <div className="flex gap-6 ml-30 mt-[-0px]" >

              <div className="w-[2px] min-h-[120px] bg-[#FDC700]" />

              <div>
                <h3 className="text-[#FDC700] font-[Gilroy] text-[26px] md:text-[15px] lg:text-[18px]">
                  Our Vision
                </h3>

                <p
                  className="mt-5 max-w-[700px] text-[#99A1AF] text-[18px] font-[Inter] font-[400] leading-[1.8] md:text-[15px] lg:text-[16px]">
                  To become the world's most widely adopted utility token
                  for digital commerce — a payment layer that bridges the
                  gap between blockchain innovation and everyday economic
                  activity.
                </p>
              </div>

            </div>

            {/* Mission */}
            <div className="flex gap-6 mt-16 ml-30">

              <div className="w-[2px] min-h-[160px] font-[Gilroy] bg-[#FDC700]" />

              <div>
                <h3 className="text-[#FDC700] text-[26px] md:text-[16px] lg:text-[18px]">
                  Our Mission
                </h3>

                <p
                  className="mt-5 max-w-[750px] font-[Inter] text-[#99A1AF] text-[18px] leading-[1.8] md:text-[15px] lg:text-[16px]"
                >
                  To build a fast, secure, low-cost, and globally accessible
                  digital payment ecosystem powered by blockchain technology —
                  enabling seamless transactions for consumers, merchants,
                  and businesses without geographic or financial barriers.
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex order-1 justify-center lg:order-2">

            <img
              src={aboutCoin}
              alt="SS Coin"
              className="object-contain w-full max-w-[430px]"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;