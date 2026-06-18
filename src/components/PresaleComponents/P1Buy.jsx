import usdt from "../../assets/usdt.png";
import ss from "../../assets/logo.png";
import bgImage from "../../assets/bgbuy.png";
import { Link } from "react-router-dom";
export default function TokenSaleSection() {



  return (
    <section id="joinpresale"
      className="relative py-8 md:py-12 lg:py-16 xl:py-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-full mt-24 px-3 font-['Poppins'] sm:px-4 md:px-6 lg:px-8 xl:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* LEFT */}
          <div className=" order-1 lg:order-1 flex flex-col items-center text-center lg:items-start lg:text-left">

            <div
              className="inline-block px-3 py-1 text-[#FFCC66] text-sm md:text-base rounded-full mb-2 md:mb-4"
            >
              SS COIN Presale
            </div>

            <h2 className="text-lg md:text-3xl lg:text-5xl max-w-full lg:max-w-[640px] font-[400] leading-tight">
              Swift, intelligent Web3 trading with <br />
SS COIN: Presale is Live.
              
            </h2>

            <p className="text-[#FFFFFF80] text-sm md:text-base xl:text-xl mt-3 md:mt-6 max-w-full lg:max-w-[580px]">
              Become an early supporter of SS Coin and secure your SSC tokens before exchange listings. Participate in a utility-driven ecosystem designed for digital payments, merchant adoption, and global commerce.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-5">
           

             <a href="/presale/?=joinpresale" className="group relative w-[160px] h-[48px]">

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

              <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                Purchse  Now
              </span>

            </a>
            </div>

          </div>

          {/* RIGHT */}
          <div className=" order-2 lg:order-2 relative w-full max-w-[580px] mx-auto">



            {/* Border SVG */}
            <svg
                viewBox="0 0 541 517"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full"
                fill="none"
              >
                <defs>
                  <linearGradient
                    id="borderGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="541"
                    y1="260"
                    x2="0"
                    y2="260"
                  >
                    <stop offset="0.001" stopColor="#F0B100" />
                    <stop offset="0.479" stopColor="#F0B100" />
                    <stop offset="1" stopColor="#D08700" />
                  </linearGradient>
                </defs>
                <path
                  d="M494.886 1.5L539.5 57.3506V515.5H46.1143L1.5 459.648V1.5H494.886Z"
                  fill="#000"
                  stroke="url(#borderGradient)"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

            <div className="relative z-10 px-4 py-8 lg:px-12 lg:py-12 min-h-[480px] lg:min-h-[550px]">

              <h2 className="text-center text-xl sm:text-2xl lg:text-3xl mb-4 lg:mb-8">
                You Can Buy With
              </h2>

              <div className="flex justify-center mb-4 md:mb-8">
              <Link to="/presale/?=joinpresale"
                
              >
                <button
                  className="
    rounded-full
    p-[1px]
    overflow-hidden
  "
                  style={{
                    background:
                      "linear-gradient(180deg, #363636 0%, #D4AF37 100%)",
                  }}
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      px-8
                      py-[10px]
                      rounded-full
                    "
                    style={{
                      background:
                        "linear-gradient(180deg, #363636 0%, #000000 100%)",
                    }}
                  >
                    {/* Icon */}
                    <img
                      src={usdt}
                      alt="USDT"
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />

                    {/* Text */}
                    <span
                      className="
                          text-sm
                          lg:text-lg
                          text-white
                          leading-none
                        "
                    >
                      USDT
                    </span>
                  </div>
                </button>
                </Link>
              </div>

              <div className="space-y-6 ">

                {/* USDT */}
                <div>

                  <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                    Amount You Pay
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]">
                      {" "} (Balance = 0.00 USDT)
                    </span>
                  </label>

                  <div
                    className="relative p-[0.8px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    }}
                  >
                    <div
                      className="h-[56px] flex items-center bg-black"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      {/* Icon */}
                      <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                        <img
                          src={usdt}
                          alt=""
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                      </div>

                      {/* Divider */}
                      <div className="w-[1px] h-[100%] bg-[#F0B100]  shrink-0" />

                      <input
                        type="text"
                        placeholder="Enter USDT Amount"
                        className="
                          flex-1
                            min-w-0
                            h-full
                            bg-transparent
                            px-3 md:px-5 text-[10px]
                            min-[330px]:text-sm md:text-base
                            outline-none
                            text-white
                            placeholder:text-[#fff]
                                "
                      />
                    </div>
                  </div>

                </div>

                {/* SS Coin */}
                <div>

                  <label className="block mb-3 text-white text-xs min-[395px]:text-sm lg:text-lg font-medium">
                    Amount You Get
                    <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]">
                      {" "} (Balance = 0.00 SS Coin)
                    </span>
                  </label>

                  <div
                    className="relative p-[0.8px]"
                    style={{
                      background:
                        "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
                      clipPath:
                        "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    }}
                  >
                    <div
                      className="h-[56px] flex items-center bg-black"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                      }}
                    >
                      {/* Icon */}
                      <div className="w-[52px] md:w-[62px] h-full flex items-center justify-center shrink-0">
                        <img
                          src={ss}
                          alt=""
                          className="w-5 h-5 md:w-6 md:h-6 object-contain"
                        />
                      </div>

                      {/* Divider */}
                      <div className="w-[1px] h-[100%] bg-[#F0B100]  shrink-0 " />

                      <input
                        type="text"
                        placeholder="Enter SS Coin Amount"
                        className="
    flex-1
    min-w-0
    h-full
    bg-transparent
    px-3 md:px-5 text-[10px]
    min-[330px]:text-sm md:text-base
    outline-none
    text-[#fff]
    placeholder:text-[#ffff]
  "
                      />
                    </div>
                  </div>

                </div>

                <div className="flex flex-wrap justify-center  gap-3 md:gap-4">

                 <a href="/" className="group relative w-[160px] h-[48px]">

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

              <span className="absolute inset-0 flex items-center justify-center text-white font-medium">
                Connect Wallet
              </span>

            </a>



            {/* Whitepaper */}

            <a
              href="/"
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
                Buy SSC Now
              </span>
            </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
