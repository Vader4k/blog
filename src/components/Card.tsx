import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import { recentPosts } from "@/lib/recentposts";
// import { useRouter } from "next/navigation";

const Card = () => {
  return (
    <div className="flex-[5]">
      <h1 className="font-semibold text-3xl mb-5">Recent Posts</h1>
      <CardContainer />
      <div className="w-full">
      <Pagination />
      </div>
    </div>
  );
};

export default Card;

const CardContainer = () => {
  return (
    <div className="py-5 flex flex-col gap-10">
      {recentPosts.map((post) => (
        <div className="flex gap-10" key={post.id}>
          <Image width={400} height={300} alt={post.title} src={post.image} />
          <div className="flex flex-col justify-between items-start">
            <div className="flex gap-1 items-center">
              <span className="text-gray-600 text-sm">{post.date}</span>
              -
              <span className="uppercase text-red-700 font-medium">{post.category}</span>
            </div>
            <h1 className="font-bold text-2xl">{post.title}</h1>
            <p className="text-gray-500 ">{truncateDescription(post.desc)}</p>
            <button type="button" className="border-b border-black py-1">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const truncateDescription = (description: string) => {
  const words = description.split(" ");
  return words.length > 30 ? words.slice(0, 30).join(" ") + "..." : description;
};
