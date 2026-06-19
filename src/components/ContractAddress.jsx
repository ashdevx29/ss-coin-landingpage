import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export default function ContractAddress() {
  const address = "0x53de3640f6256dfc00bca2cac7c7442194e06685";

  const [copied, setCopied] = useState(false);

  // Show address like: 0xA1B2C3.....12345678
  const shortenAddress = (addr) => {
    return `${addr.slice(0, 10)}.....${addr.slice(-8)}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-black w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 md:py-14 relative">

      {/* Toast */}
      {copied && (
        <div className="fixed top-5 right-5 z-50 rounded-lg border border-[#F0B100] bg-[#111] px-5 py-3 text-[#F0B100] shadow-[0_0_20px_rgba(240,177,0,0.35)]">
          Address Copied Successfully!
        </div>
      )}

      <div className="max-w-7xl mx-auto">

        {/* Outer Border */}
        <div className="relative rounded-2xl p-[3px]
        bg-[linear-gradient(270deg,rgba(0,0,0,0)_75.19%,rgba(240,177,0,0.7)_80.61%,rgba(240,177,0,0.7)_100%)]">

          <div className="bg-black rounded-2xl p-2">

            {/* Inner Border */}
            <div
              className="
              rounded-2xl
              p-[1px]
              bg-[linear-gradient(152.14deg,rgba(253,199,0,0.7)_9.96%,rgba(240,177,0,0.406)_100%)]
              "
            >
              <div className="rounded-2xl bg-black px-4 py-4 sm:py-6 sm:px-6 md:px-10 md:py-12">

                {/* Heading */}
                <h2
                  className="
                  text-center
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  font-normal
                  bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]
                  bg-clip-text
                  text-transparent
                  "
                >
                  Contract Address
                </h2>

                {/* Full Address Desktop */}
                <p
                  className="
                  hidden
                  md:block
                  text-center
                  text-white
                  text-2xl
                  lg:text-3xl
                  xl:text-4xl
                  font-normal
                  mt-3 sm:mt-5 md:mt-8
                  break-all
                  "
                >
                  {address}
                </p>

                {/* Short Address Mobile */}
                <p
                  className="
                  block
                  md:hidden
                  text-center
                  text-white
                  text-sm
                  sm:text-lg
                  mt-3 sm:mt-4 md:mt-6
                  "
                >
                  {shortenAddress(address)}
                </p>

                {/* Copy Button */}
                <div className="flex justify-center mt-3 sm:mt-5 md:mt-8">

                  <button
                    onClick={handleCopy}
                    className="
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-[#F0B100]
                    px-4
                    py-2.5
                    text-[#F0B100]
                    text-sm
                    sm:text-base
                    hover:bg-[#F0B100]/10
                    transition-all
                    duration-300
                    "
                  >
                    Copy Address

                    <MdContentCopy className="text-lg" />
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}











// import { MdContentCopy } from "react-icons/md";

// export default function ContractAddress() {
//   const address =
//     "0xA1B2C3D4E5F60718293A4B5C6D7E8F9012345678";

//   const handleCopy = () => {
//     navigator.clipboard.writeText(address);
//   };

//   return (
//     <section className="bg-black  max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 md:py-14">
//       <div className="max-w-7xl mx-auto">
//       <div className="relative rounded-xl p-[3px]
//         bg-[linear-gradient(270deg,rgba(0,0,0,0)_75.19%,rgba(240,177,0,0.7)_80.61%,rgba(240,177,0,0.7)_100%)]">

//         <div className="bg-[#000] p-2 rounded-xl">

//         <div className="relative rounded-xl p-[1px]
//           bg-[linear-gradient(152.14deg,rgba(253,199,0,0.7)_9.96%,rgba(240,177,0,0.406)_100%)]">


//           {/* Inner Box */}
//           <div className="bg-black rounded-xl py-10 px-6">

//             <h2 className="bg-[linear-gradient(90deg,#F0B100_0%,#D08700_100%)]
//                 bg-clip-text
//                 text-transparent text-2xl sm:text-3xl lg:text-5xl font-[400] text-center">
//               Contract Address
//             </h2>

//             <p className="text-white font-['Inter'] font-[400] text-sm sm:text-xl md:text-2xl xl:text-4xl text-center mt-6 tracking-wide">
//               {address}
//             </p>

//             <div className="flex justify-center mt-7">
//               <button
//                 onClick={handleCopy}
//                 className="
//                 flex items-center gap-2
//                 px-4 py-2
//                 rounded-md
//                 border border-[#F0B100]
//                 text-[#F0B100]
//                 text-sm
//                 hover:bg-[#F0B100]/10
//                 transition"
//               >
//                 Copy Address
//                 <MdContentCopy size={14} />
//               </button>
//             </div>

//           </div>

//         </div>
//         </div>
//         </div>

//       </div>
//     </section>
//   );
// }