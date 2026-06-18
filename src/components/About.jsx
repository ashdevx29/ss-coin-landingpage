import aboutBg from "../assets/Images/aboutBg.png";
import aboutCoin from "../assets/Images/aboutCoin.png";

const About = () => {
  return (
    <section id="about"
      className="relative overflow-hidden py-8 lg:py-14 bg-black"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ">

        {/* Heading */}

        <div className="max-w-[900px] mx-auto text-center">

          <h2 className="font-light text-3xl sm:text-4xl lg:text-[52px]">

            <span className="text-white">
              About{" "}
            </span>

            <span
              className="
              bg-gradient-to-r
              from-[#F0B100]
              to-[#D08700]
              bg-clip-text
              text-transparent
              "
            >
              SS Coin
            </span>

          </h2>


          <p
            className="
            mt-6
            text-[#D8D8D8]
            text-sm
            sm:text-base
            leading-7
            max-w-[850px]
            mx-auto
            "
          >

            SS Coin (SSC) is a BEP-20 utility token on Binance Smart Chain,
            created to deliver fast, secure, and decentralized digital
            payments for businesses and consumers worldwide.

          </p>

        </div>


        {/* Content */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-14
          lg:gap-24
          mt-16
          "
        >


          {/* Left Content */}

          <div className="order-2 lg:order-1 space-y-14">


            {/* Vision */}

            <div className="flex gap-5">

              <div className="w-[2px] bg-[#FDC700]" />

              <div>

                <h3
                  className="
                  text-[#FDC700]
                  text-xl
                  sm:text-2xl
                  font-medium
                  "
                >
                  Our Vision
                </h3>


                <p
                  className="
                  mt-4
                  text-[#99A1AF]
                  text-sm
                  sm:text-base
                  leading-8
                  "
                >

                  To become the world's most widely adopted utility token
                  for digital commerce — a payment layer that bridges the
                  gap between blockchain innovation and everyday economic
                  activity.

                </p>

              </div>

            </div>



            {/* Mission */}

            <div className="flex gap-5">

              <div className="w-[2px] bg-[#FDC700]" />

              <div>

                <h3
                  className="
                  text-[#FDC700]
                  text-xl
                  sm:text-2xl
                  font-medium
                  "
                >

                  Our Mission

                </h3>


                <p
                  className="
                  mt-4
                  text-[#99A1AF]
                  text-sm
                  sm:text-base
                  leading-8
                  "
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

          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={aboutCoin}
              alt="SS Coin"
              className="
              w-full
              max-w-[290px]
              sm:max-w-[350px]
              md:max-w-[400px]
              lg:max-w-[470px]
              object-contain
              "
            />

          </div>


        </div>

      </div>
    </section>
  );
};

export default About;




