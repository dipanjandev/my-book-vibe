import React from "react";
import Image from "next/image";
import heroImage from "@/images/baner_image.svg";

const BannerSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
      <div className="bg-[#131313]/5 rounded-3xl lg:rounded-[36px] px-6 py-10 sm:p-12 md:p-16 lg:px-24 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#131313] leading-tight sm:leading-snug lg:leading-[1.2]">
              Books to freshen up <br className="hidden sm:inline" />
              your bookshelf
            </h1>

            <p className="text-sm sm:text-base text-gray-600 max-w-md lg:max-w-none">
              Explore curated collections and top-rated reads designed to ignite
              your passion for reading.
            </p>

            <div>
              <button
                type="button"
                className="bg-[#23BE0A] hover:bg-[#1fa709] active:scale-95 transition-all duration-200 text-white font-semibold text-base sm:text-lg px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#23BE0A]/50 cursor-pointer"
              >
                View The List
              </button>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-70 sm:max-w-85 md:max-w-95 lg:max-w-none flex justify-center">
              <Image
                src={heroImage}
                alt="Featured book cover"
                priority
                className="w-auto h-auto max-h-70 sm:max-h-87.5 lg:max-h-105 object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
