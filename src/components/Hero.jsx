import heroVideo from "../assets/newhero/bg-hero.mp4";
import heroCoin from "../assets/newhero/hero-right.png";
// import coinIcon from "../assets/newhero/icon.png";
import Header from "./Navbar";
import icon1 from "../assets/newhero/Audited.png";
import icon2 from "../assets/newhero/secure.png";
// import icon3 from "../assets/newhero/kyc.png";


import img1 from "../assets/newhero/img1.png";
// import img2 from "../assets/newhero/img2.png";
// import img3 from "../assets/newhero/img3.png";
// import img4 from "../assets/newhero/img4.png";
import img5 from "../assets/newhero/img5.png";
import img6 from "../assets/newhero/img6.png";


const features = [
  {
    icon: icon1,
    title: "Audited",
    subtitle: "Smart Contract",
  },
  {
    icon: icon2,
    title: "100 % Secure",
    subtitle: "Decentralized",
  },
];


// const features = [
//   {
//     icon: icon1,
//     title: "Audited",
//     subtitle: "Smart Contract",
//   },
//   {
//     icon: icon2,
//     title: "100 % Secure",
//     subtitle: "Decentralized",
//   },
//   {
//     icon: icon3,
//     title: "KYC Verified",
//     subtitle: "Trusted Project",
//   },
// ];

const stats = [
  {
    img: img1,
    value: "24M",
    label: "Total Supply",
    desc: "Fixed and Transparent",
  },
  {
    img: img5,
    value: "1M+",
    label: "Transactions",
    desc: "On Chain",
  },
  {
    img: img6,
    value: "24/7",
    label: "Support",
    desc: "Always Here",
  },
];

// const stats = [
//   {
//     img: img1,
//     value: "24M",
//     label: "Total Supply",
//     desc: "Fixed and Transparent",
//   },
//   {
//     img: img2,
//     value: "500k+",
//     label: "Global Community",
//     desc: "Growing Everyday",
//   },
//   {
//     img: img3,
//     value: "10k+",
//     label: "Merchants",
//     desc: "Accepting SSC",
//   },
//   {
//     img: img4,
//     value: "100k+",
//     label: "Wallet Users",
//     desc: "Worldwide",
//   },
//   {
//     img: img5,
//     value: "1M+",
//     label: "Transactions",
//     desc: "On Chain",
//   },
//   {
//     img: img6,
//     value: "24/7",
//     label: "Support",
//     desc: "Always Here",
//   },
// ];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black font-['Poppins']">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 z-[1]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(240,177,0,0.15),transparent_45%)] z-[2]" />

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-12 lg:pt-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 xl:gap-12 items-center">

          {/* Left */}
          <div className="max-w-[700px]">

            <div className="inline-flex items-center gap-3 mb-3 lg:mb-5">

              <span className="border border-[#F0B100] rounded-md px-3 py-1 text-xs font-semibold bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent">
                BEP 20
              </span>

              <span className="text-[#D8D8D8]">
                Binance Smart Coin
              </span>

            </div>

            <h2 className="text-white text-4xl md:text-6xl lg:text-5xl xl:text-7xl leading-[1.05] font-light">

              <span className="block bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text text-transparent">
                One Transaction
              </span>

              Infinite Possibilities

            </h2>

            <p className="text-[#D8D8D8] text-base lg:text-lg max-w-[450px] leading-8 mt-4 lg:mt-6">
              SS Coin (SSC) is a BEP-20 utility token enabling secure,
              instant e-commerce and global payments.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-5 lg:mt-8">

              <a
                href="/presale"
                className="group relative w-[170px] h-[52px]"
              >
                <svg
                  className="absolute inset-0"
                  width="170"
                  height="52"
                  viewBox="0 0 170 52"
                >
                  <defs>
                    <linearGradient id="buyGrad">
                      <stop offset="0%" stopColor="#F0B100" />
                      <stop offset="100%" stopColor="#D08700" />
                    </linearGradient>
                  </defs>

                  <path
                    d="M15 0H170V40L152 52H0V12L15 0Z"
                    fill="url(#buyGrad)"
                    className="group-hover:fill-[#D08700] transition-all duration-300"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  Buy SSC Now
                </span>

              </a>

              <a
                href="https://sscoin.gitbook.io/sscoin-docs/"
                className="group relative w-[170px] h-[52px]" target="_blank"
  rel="noopener noreferrer" 
              >
                <svg
                  className="absolute inset-0"
                  width="170"
                  height="52"
                  viewBox="0 0 170 52"
                >
                  <path
                    d="M15 0H170V40L152 52H0V12L15 0Z"
                    fill="transparent"
                    stroke="#F0B100"
                    strokeWidth="1.5"
                    className="group-hover:fill-[#F0B100]"
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-[#F0B100] group-hover:text-black font-medium transition">
                  Whitepaper
                </span>

              </a>

            </div>

            {/* Features */}

            <div className="flex flex-wrap gap-2 xl:gap-4 mt-6 lg:mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="rounded-xl p-[1px] bg-gradient-to-r from-[#F0B100] to-[#D08700]"
                >

                  <div className="bg-black rounded-xl px-2 xl:px-4 py-[5px] xl:py-3">

                    <div className="flex items-center gap-3">

                      <img
                        src={item.icon}
                        className="w-10 h-10"
                        alt=""
                      />

                      <div>

                        <h4 className="text-white text-sm">
                          {item.title}
                        </h4>

                        <p className="text-[#BFBFBF] text-xs">
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
              alt=""
              className="w-full max-w-[700px] object-contain animate-pulse"
            />

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="mt-14 mb-6 p-[1px] max-w-[800px] mx-auto rounded-2xl bg-gradient-to-r from-[#F0B100] to-[#D08700]">

          <div className="rounded-2xl overflow-hidden bg-black">

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[1px] bg-[rgba(240,177,0,0.25)]">

              {stats.map((item, index) => (



                <div
                  key={index}
                  className="
    relative
    bg-black
    px-4 py-6
    flex items-center
    gap-3
    shadow-[inset_0px_0px_60px_0px_#F0B1002E]

    after:content-['']
    after:absolute
    after:top-0
    after:right-0
    after:w-[1px]
    after:h-full
    after:bg-[linear-gradient(180deg,#000000_0%,rgba(253,199,0,0.44)_45.68%,#000000_100%)]

    before:content-['']
    before:absolute
    before:left-0
    before:bottom-0
    before:w-full
    before:h-[1px]
    before:bg-[linear-gradient(90deg,#000000_0%,rgba(253,199,0,0.44)_45.68%,#000000_100%)]
  "
                >
                  {/* Image - 60% */}
                  <div className="w-[32%] flex justify-center">
                    {/* <img
                      src={coinIcon}
                      className="w-14 h-14 object-contain"
                      alt=""
                    /> */}
                     <img
                      src={item.img}
                      className="w-14 h-14 object-contain"
                      alt=""
                    />
                  </div>

                  {/* Content - 40% */}
                  <div className="w-[68%] text-right">
                    <h2
                      className="
      text-2xl
      font-semibold
      bg-gradient-to-r
      from-[#F0B100]
      to-[#D08700]
      bg-clip-text
      text-transparent
      "
                    >
                      {item.value}
                    </h2>

                    <p className="text-[#D8D8D8] text-[9px] xl:text-[10px] mb-0 leading-[16px]">
                      {item.label}
                    </p>

                    <span className="text-[#999] text-[9px] xl:text-[10px] leading-[16px] block">
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


