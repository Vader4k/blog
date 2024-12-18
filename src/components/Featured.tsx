import Image from "next/image";

const Featured = () => {
  return (
    <div className="py-5 md:py-10">
      <h1 className="text-3xl md:text-5xl lg:text-7xl">
        <b>Hey, Vader here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-8 md:mt-16 flex-col md:flex-row flex gap-10 items-center">
        <div className="flex-1 relative min-h-[500px]">
          <Image className="h-[500px] w-full" src={'/44775.jpg'} width={500} height={500} alt="venice"/>
        </div>
        <div className="flex-1 items-start flex flex-col gap-5">
          <h1 className="text-2xl md:text-4xl font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, quas.
          </h1>
          <p className="text-softTextColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            exercitationem corrupti dolorem eveniet blanditiis amet in tenetur
            architecto atque recusandae, maxime libero excepturi debitis
            similique voluptatem, iusto unde at omnis!
          </p>
          <button className="px-4 py-3 w-fit bg-gray-300 text-sm font-thin rounded-md">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
