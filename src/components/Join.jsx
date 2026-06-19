import ctaBg from "../assets/join.jpg";
import { Link } from "react-router-dom";
export default function CTASection() {
  return (
    <section className="bg-black max-w-full font-['Inter'] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-6 md:py-12">
      <div
        className="
        relative
        
        overflow-hidden
        rounded-[28px]
        min-h-[220px]
        flex
        items-center
        justify-center
        px-6 
        py-8 sm:py-14 lg:py-20
        "
      >
        {/* Background Image */}
        <img
          src={ctaBg}
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">

          <h2 className="text-center text-2xl sm:text-4xl md:text-5xl text-[#ffffff] font-[400]">
            Ready to Join the SS Coin Ecosystem?
          </h2>

          <p className="mt-5 text-[#FFFFFF] text-center  font-['Poppins'] leading-6 text-sm md:text-base font-[400] mt-3 md:mt-5 max-w-xl mx-auto">
            SS Coin is more than a token — it is the financial infrastructure
            of the decentralized economy. Whether you are an investor,
            a merchant, or a developer, there is a place for you in the SSC ecosystem.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {/* Buy Button */}
            <div className="flex flex-wrap gap-4">

  {/* Buy SSC Now */}
  <Link to="/presale">
    <button
      className="
        min-w-[180px]
        px-7
        py-3
        rounded-[8px]
        bg-white
        text-[#F0B100]
        text-sm md:text-base
        font-[500]
        hover:scale-105
        transition
      "
    >
      Buy SSC Now
    </button>
  </Link>

  {/* Visit Button */}
  <Link to="https://sscoin.gitbook.io/sscoin-docs/" target="_blank"
  rel="noopener noreferrer" >
    <button
      className="
        min-w-[180px]
        px-7
        py-3
        rounded-xl
        border
        border-white
        bg-transparent
        backdrop-blur-md
        text-white
        font-medium
        hover:bg-black
        transition
      "
    >
      Whitepaper
    </button>
  </Link>

</div>
</div>
        </div>
      </div>
    </section>
  );
}