import Image from "next/image";
import React from "react";

interface Props {
  image: Partial<string>;
}
const Hero = async ({ image }: Props) => {
  return (
    <React.Fragment>
      <main>
        <div className="grid md:grid-cols-2 items-center gap-8 max-w-5xl max-md:max-w-md mx-auto">
          <div className="max-md:order-1 max-md:text-center">
            <h2 className="md:text-4xl text-3xl md:leading-10 font-bold text-slate-900 mb-4">
              Savor Every Bite
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              Embark on a gastronomic journey with our curated dishes, delivered
              promptly to your doorstep. Elevate your dining experience today.
            </p>
            <div className="mt-12 flex flex-wrap max-md:justify-center gap-4">
              <a
                href="javascript:void(0);"
                className="px-6 py-3 text-base font-semibold text-white bg-[#f032e6] rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                Explore Our Menu
              </a>
              <a
                href="javascript:void(0);"
                className="px-6 py-3 text-base font-semibold text-[#f032e6] border border-[#f032e6] rounded-full hover:text-white hover:bg-[#f032e6] transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-[#f032e6] focus:outline-none focus:ring-opacity-50"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="md:h-[450px] flex justify-center items-center">
            <Image
              src={image || "https://readymadeui.com/hotel-img.webp"}
              alt="hero-img"
              className={`rounded-lg object-contain w-200 ${image && "!w-100"}`}
              width={400}
              height={200}
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Hero;
