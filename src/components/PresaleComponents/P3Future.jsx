import paymentImg from "../../assets/future.png"; 

export default function FuturePayments() {
  return (
    <section className="w-full font-['Inter'] bg-black max-w-full py-8 md:py-14  px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 font-['Inter']">
      <div className="p-[1px] rounded-[15px] bg-[linear-gradient(90deg,rgba(240,177,0,0.5)_0%,rgba(208,135,0,0.5)_100%)]">
  
        <div className="w-full bg-[#000000] rounded-[15px] overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="px-3 sm:px-8 lg:px-10 py-6 sm:py-10">

            <h2 className="text-white text-2xl sm:text-4xl xl:text-5xl font-[400] leading-[1.15] uppercase">
              Unlock The Future Of{" "}
              <span className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)] bg-clip-text text-transparent uppercase">
              Digital Payments
            </span>
            </h2>

            

            <p className="text-[#ffffff] text-sm sm:text-base md:text-lg xl:text-xl font-[400] leading-[1.8] max-w-full lg:max-w-[540px] mt-3 md:mt-5">
              SS Coin (SSC) is more than a cryptocurrency — it is a utility token built to power e-commerce transactions, merchant settlements, subscription payments, QR code payments, rewards, staking, and cross-border transfers.

            </p>

              <div className="flex flex-wrap justify-left gap-6 mt-5">
           

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
                Whitepaper
              </span>

            </a>
            </div>


          </div>

          {/* Right Image */}
          <div className="relative h-full">

            {/* Glow Effect */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,177,0,0.18),transparent_70%)] z-0"></div> */}

            <img
              src={paymentImg}
              alt="Digital Payments"
              className="relative z-10 w-full h-full object-cover"
            />

          </div>

        </div>
        </div>
      </div>
    </section>
  );
}