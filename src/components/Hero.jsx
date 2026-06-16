import heroImage from "../assets/hero/heroImage.png";
import user1 from "../assets/hero/user1.png"
import user2 from "../assets/hero/user2.png"
import user3 from "../assets/hero/user3.png"

const Hero = () => {
  return (
    <section className="overflow-hidden pt-[140px] min-h-screen bg-black">
      <div className="mx-auto px-8 max-w-[1470px]">

        {/* Hero Top */}
        <div className="">

<div className="w-full">
  {/* Mobile & Tablet */}
  <div className="flex flex-col items-center text-center lg:hidden">
    <h1 className="leading-none font-[Gilroy] text-transparent font-medium text-[42px] bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text">
      One Transaction at a Time
    </h1>

    <div className="mt-4 font-[Poppins]">
      <h3 className="text-[#F0F0F0] text-[20px] font-light leading-[1.3]">
        BEP-20 Binance Smart Chain
      </h3>
    </div>

    <h2 className="mt-4 text-white font-[Gilroy] font-light leading-none text-[42px]">
      Powering Digital Commerce
    </h2>

    <div className="mt-4 max-w-[320px] font-[Poppins] font-light">
      <p className="text-[#D8D8D8] text-[14px] leading-[1.5]">
        SS Coin (SSC) is a BEP-20 utility token enabling secure, instant
        e-commerce and global payments.
      </p>
    </div>
  </div>

  {/* Desktop */}
  <div className="hidden lg:block">
    {/* Top Row */}
    <div className="flex items-start justify-center gap-12">
      <div className="w-[230px] text-right font-[Poppins]">
        <h3 className="text-[#F0F0F0] text-[20px] font-light leading-[1.3]">
          BEP-20 Binance Smart Chain
        </h3>
      </div>

      <h1 className="leading-none font-[Gilroy] text-transparent font-medium bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text lg:text-[55px] xl:text-[70px]">
        One Transaction at a Time
      </h1>
    </div>

    {/* Bottom Row */}
    <div className="flex items-center gap-10 mt-4 lg:justify-between xl:justify-center">
      <h2 className="text-white font-[Gilroy] font-light leading-none lg:text-[50px] xl:text-[70px]">
        Powering Digital Commerce
      </h2>

      <div className="relative top-9 max-w-[260px] font-[Poppins] font-light lg:left-1 xl:left-10">
        <p className="text-[#D8D8D8] text-[14px] leading-[1.5]">
          SS Coin (SSC) is a BEP-20 utility token enabling secure, instant
          e-commerce and global payments.
        </p>
      </div>
    </div>
  </div>
</div>

  {/* Buttons */}
  <div className="flex justify-center gap-6 mt-20">

   <button
  className="w-[150px] h-[43px] text-white text-[16px] font-medium inter [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]"
  style={{
    background: "linear-gradient(90deg, #F0B100 0%, #D08700 100%)",
  }}
>
  Buy SSC Now
</button>

    <button className="w-[150px] h-[43px] text-[#D9A11D] bg-transparent border-[#D9A11D] border [clip-path:polygon(10%_0%,100%_0%,100%_75%,90%_100%,0%_100%,0%_25%)]">
      Whitepaper
    </button>

  </div>

</div>

        {/* Hero Image */}
        <div className="relative mt-[-20]">

          <img
            src={heroImage}
            alt="SS Coin"
            className="object-contain mx-auto w-full max-w-[1350px]"
          />

          <div className="absolute left-28 bottom-[-10px] flex items-center gap-8">

  <div>
    <p className="text-white text-[12px] font-[Poppins]">
      Rating
    </p>

    <div className="flex items-center gap-2 mt-2">
      <h3 className="text-white text-[20px] font-[Poppins]">
        4.9
      </h3>

      <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full">
        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0B100] to-[#D08700]">
          ↑
        </span>
      </div>
    </div>
  </div>

  <div className="flex -space-x-3">
    <img src={user1} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
    <img src={user2} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
    <img src={user3} alt="" className="object-cover w-11 h-11 rounded-full border-white border" />
  </div>

</div>

          {/* Slider */}
          <div className="absolute right-10 bottom-10 flex items-center gap-6">

            <h3 className="text-white text-5xl font-light">
              01<span className="text-xl">/03</span>
            </h3>

            <div className="flex gap-3">
              <div className="flex gap-3">
  <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
  <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
  <span className="w-5 h-5 bg-amber-50 rounded-full border-2 border-white"></span>
  <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
  <span className="w-3 h-3 bg-[#FFFFFF21] rounded-full"></span>
</div>
            </div>

          </div>

        </div>

      </div>
      <div className="mt-12 pb-16 mt-30 ml-20 md:mt-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">

    <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
<h2
  className="text-[35px] font-semibold text-transparent bg-gradient-to-r from-[#F0B100] to-[#D08700] bg-clip-text"
>
  24M
</h2>
      <p className="mt-3 text-[#8E929B] text-[15px]">Total Supply</p>
    </div>

    <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
      <h2 className="text-[#D9A11D] text-[35px] font-semibold">$0.12</h2>
      <p className="mt-3 text-[#8E929B] text-[15px]">Token Price</p>
    </div>

    <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
      <h2 className="text-[#D9A11D] text-[35px] font-semibold">BEP-20</h2>
      <p className="mt-3 text-[#8E929B] text-[15px]">Blockchain Standard</p>
    </div>

    <div className="flex flex-col justify-center items-center w-65 h-[130px] bg-[#1A1A1A] border-[#3B2C08] rounded-[24px] shadow-[0_0_40px_rgba(217,161,29,0.15)] border">
      <h2 className="text-[#D9A11D] text-[35px] font-semibold">10+</h2>
      <p className="mt-3 text-[#8E929B] text-[15px]">Real-World Use Cases</p>
    </div>

  </div>
</div>
    </section>
  );
};

export default Hero;