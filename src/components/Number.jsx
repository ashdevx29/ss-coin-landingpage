const stats = [
  {
    value: "24M",
    label: "Total Supply",
  },
  {
    value: "$0.12",
    label: "Token Price",
  },
  {
    value: "BEP-20",
    label: "Blockchain Standard",
  },
  {
    value: "10+",
    label: "Real-World Use Cases",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-black py-6 font-['Inter'] md:py-12">

      <div className="max-w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 ">

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="
              relative
              h-[126px]
              rounded-[16px]
              border
              border-[#AF810021]
              bg-[#1A1A1A]
              flex
              flex-col
              justify-center
              items-center

              shadow-[0px_0px_2px_0px_#F0B10040]
              "
            >

              {/* Glow */}

              <div className="
              absolute
              -inset-[1px]
              rounded-[24px]
              opacity-40
              blur-[16px]
              bg-[#F0B100]
              -z-10
              "></div>


              {/* Number */}

              <h2
                className="
                text-2xl sm:text-3xl lg:text-4xl
                font-semibold
                leading-none

                bg-gradient-to-r
                from-[#F0B100]
                to-[#D08700]

                bg-clip-text
                text-transparent
              "
              >
                {item.value}
              </h2>


              {/* Label */}

              <p
                className="
                mt-4
                text-[#99A1AF]
                text-sm
                font-[400]
              "
              >
                {item.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}