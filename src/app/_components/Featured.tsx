import Image from "next/image";
import featuredImg1 from "/public/featuredImg1.png";
import featuredImg2 from "/public/featuredImg2.png";
import featuredImg3 from "/public/featuredImg3.png";
import featuredImg4 from "/public/featuredImg4.png";

export default function Featured() {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] ">
        {/* ////////////////////////////////////// */}
        <div className="lg:order-4">
          {/* ////////////////////////////////////// */}
          <div className="flex md:basis-[23.43rem] items-center justify-center flex-col py-[2.5rem] bg-[#EDEDED]">
            <div className="w-48 flex flex-col items-center justify-center  mb-6">
              <Image src={featuredImg4} alt="featuredImg4" />
            </div>
            <h2 className="text-[2.125rem] font-light">
              Apple AirPods <strong className="font-medium">Max</strong>
            </h2>
            <p className="text-[#909090] font-base">
              Computational audio. Listen, it's powerful
            </p>
          </div>
        </div>

        {/* ////////////////////////////////////// */}
        <div className="lg:order-5">
          {/* ////////////////////////////////////// */}
          <div className="flex md:basis-[23.43rem] items-center justify-center flex-col py-[2.5rem] bg-[#353535]">
            <div className="w-[20.31rem] flex flex-col items-center justify-center  mb-6">
              <Image src={featuredImg3} alt="featuredImg3" />
            </div>
            <h2 className="text-[2.125rem] font-light text-white">
              Apple Vision <strong className="font-medium">Pro</strong>
            </h2>
            <p className="text-[#909090] font-base text-center px-4">
              An immersive way to experience entertainment
            </p>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="bg-green-300  md:col-span-2 md:-order-1">
          {/* ////////////////////////////////////// */}

          <div className="flex md:basis-[23.43rem] items-center justify-center flex-col py-[2.5rem] bg-[#fff]">
            <div className="w-[20.31rem] flex flex-col items-center justify-center  mb-6">
              <Image src={featuredImg2} alt="featuredImg3" />
            </div>
            <h2 className="text-[2.125rem] font-light text-black">
              Playstation <strong className="font-medium">5</strong>
            </h2>
            <p className="text-[#909090] font-base text-center px-4">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        {/* ////////////////////////////////////// */}
        <div className="h-full md:col-span-2 lg:col-auto lg:row-span-2 lg:order-3 ">
          {/* ////////////////////////////////////// */}

          <div className="flex items-center justify-center flex-col py-[2.5rem] bg-[#EDEDED]">
            <div className="w-[16.9375rem] flex flex-col items-center justify-center  mb-6">
              <Image src={featuredImg1} alt="featuredImg3" />
            </div>
            <h2 className="text-[2.125rem] font-light text-black">
              <strong className="font-medium">Macbook </strong>Air
            </h2>
            <p className="text-[#909090] font-base text-center px-4 mb-4  ">
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="text-base inline-block w-[21.44rem] font-medium rounded-md border-2 py-3 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all">
              Shop Now
            </button>
          </div>
          {/* ////////////////////////////////////// */}
        </div>
      </section>
    </>
  );
}
