import React from "react";
import Image from "next/image";
import Menu from "@/components/Menu";
import Comments from "@/components/Comments";

const page = () => {
  return (
    <div className="pt-10">
      <div className="w- md:h-[300px] gap-5 md:gap-0 flex-wrap md:flex-nowrap flex items-center justify-between">
        <div className="w-full h-full md:h-full flex flex-col gap-5 md:justify-between">
          <h1 className="text-3xl lg:text-5xl font-bold max-w-[600px] leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex gap-4 items-center">
            <div className="w-[60px] relative h-[60px]">
              <Image
                src="/44775.jpg"
                className="rounded-full"
                alt="profile-picture"
                fill
              />
            </div>
            <div className="flex flex-col">
              <span className="font-medium text-lg">John Doe</span>
              <span className="text-sm text-gray-500">01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="w-full h-full min-h-[300px] relative">
          <Image
            className="object-cover h-full rounded-lg"
            src="/44775.jpg"
            alt="image"
            fill
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col py-16 justify-between w-full gap-10 lg:gap-20">
        <div className="flex-[5] flex flex-col gap-5">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla,
            exercitationem cum earum, neque ea laboriosam, nemo facilis ad nisi
            obcaecati fugit. Excepturi, recusandae blanditiis. Magnam ut
            voluptatibus corporis illum?
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla,
            exercitationem cum earum, neque ea laboriosam, nemo facilis ad nisi
            obcaecati fugit. Excepturi, recusandae blanditiis. Magnam ut
            voluptatibus corporis illum? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque consectetur quidem fuga corporis asperiores
            eius obcaecati tenetur quos eum illum, recusandae optio, dolore
            exercitationem molestias. Laboriosam natus veritatis sint cum.
          </p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nulla,
            exercitationem cum earum, neque ea laboriosam, nemo facilis ad nisi
            obcaecati fugit. Excepturi, recusandae blanditiis. Magnam ut
            voluptatibus corporis illum? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolor quas eos est suscipit sapiente autem
            deserunt eveniet magnam saepe, pariatur rerum ullam et, nesciunt
            dolorum. Expedita, tenetur magnam ipsum numquam, non placeat soluta
            similique error repudiandae ipsa hic deleniti animi.
          </p>
          <div className="pt-10">
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default page;
