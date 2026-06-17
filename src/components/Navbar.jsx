import { useState } from "react";
import { Menu, X } from "lucide-react";
import SSlogo from "../assets/hero/SSlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 const navLinks = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/?=about" },
  { name: "Use Cases", link: "/?=usecase" },
  { name: "Roadmap", link: "/?=roadmap" },
  { name: "Tokenomics", link: "/?=tokenomics" },
  { name: "FAQ", link: "/?=faq" },
];

  return (
   <header className="absolute top-0 left-0 w-full z-50">
  <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
    <div className="h-[80px] md:h-[90px] lg:h-[100px] flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
           <img
  src={SSlogo}
  alt="SS Coin"
  className="
    w-[70px]
    h-auto
    md:w-[85px]
    lg:w-[99px]
    xl:w-[110px]
  "
/>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
  {navLinks.map((item) => (
    <a
      key={item.name}
      href={item.link}
      className="
      text-[#D1D5DC]
      text-[14px]
      md:text-[15px]
      lg:text-[16px]
      font-normal
      transition-all
      duration-300
      hover:text-[#D9A11D]
      "
    >
      {item.name}
    </a>
  ))}
</nav>

          {/* Buy Button */}
          <div className="hidden md:block">
  {/* <button
    className="
      h-[45px]
      md:w-[120px]
      lg:w-[130px]
      xl:w-[140px]
      bg-gradient-to-r from-[#F0B100] to-[#D08700]
      text-white
      text-[14px]
      lg:text-[16px]
      font-medium
      [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]
    "
  >
    Buy SSC Now
  </button> */}
  <a
  href="/presale"
  className="
    flex
    items-center
    justify-center
    h-[45px]
    md:w-[120px]
    lg:w-[130px]
    xl:w-[140px]
    bg-gradient-to-r from-[#F0B100] to-[#D08700]
    text-white
    text-[14px]
    lg:text-[16px]
    font-medium
    [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]
  "
>
  Buy SSC Now
</a>
</div>
          {/* Mobile Menu Button */}
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white"
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
  className={`
    md:
    absolute
    top-full
    left-0
    w-full
    bg-black/95
    backdrop-blur-md
    overflow-hidden
    transition-all
    duration-300
    ${menuOpen ? "max-h-[500px]" : "max-h-0"}
  `}
>
        <div className="flex flex-col items-center py-6 gap-6">
  {navLinks.map((item) => (
    <a
      key={item.name}
      href={item.link}
      onClick={() => setMenuOpen(false)}
      className="text-white text-lg hover:text-[#D9A11D]"
    >
      {item.name}
    </a>
  ))}
         {/* <button
  className="
    h-[50px]
    w-[180px]
    bg-gradient-to-r from-[#F0B100] to-[#D08700]
    text-white
    text-lg
    font-medium
    flex
    items-center
    justify-center
    [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]
    hover:scale-105
    transition-all
    duration-300
  "
>
  Buy SSC Now
</button> */}
<a
  href="/presale"
  className="
    h-[50px]
    w-[180px]
    bg-gradient-to-r from-[#F0B100] to-[#D08700]
    text-white
    text-lg
    font-medium
    flex
    items-center
    justify-center
    [clip-path:polygon(12%_0%,100%_0%,100%_75%,88%_100%,0%_100%,0%_30%)]
    hover:scale-105
    transition-all
    duration-300
  "
>
  Buy SSC Now
</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;