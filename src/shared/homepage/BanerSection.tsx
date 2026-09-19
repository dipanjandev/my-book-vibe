import React from "react";
import heroImage from "@/images/baner_image.svg";
import Image from "next/image";

const BanerSection = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto items-center bg-[#131313]/5 px-20 py-10 mb-10 rounded-4xl">
      <div className="space-y-12 col-span-2">
        <h1 className="text-5xl/15 font-bold">
          Books to freshen up
          <br />
          your bookshelf
        </h1>
        <button className="bg-[#23BE0A] px-5 py-3 text-white font-bold rounded-lg">
          View The List
        </button>
      </div>
      <div className="grid justify-end">
        <Image
          src={heroImage}
          alt="The Datting Playbook For Men"
          height={500}
        />
      </div>
    </div>
  );
};

export default BanerSection;
