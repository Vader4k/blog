import React from "react";
import Pagination from "./Pagination";
import Image from "next/image";
import { recentPosts } from "@/lib/recentposts";

const Card = async ({params} : {params?:string}) => {

  const filtered = await recentPosts.filter((post) => post.category === params);
  const post = params ? filtered : recentPosts

  return (
    <div className="flex-1 md:flex-[5]">
      <h1 className="font-semibold text-3xl mb-5">Recent Posts</h1>
      <CardContainer posts={post}/>
      <div className="w-full">
      <Pagination />
      </div>
    </div>
  );
};

export default Card;

const CardContainer = ({posts}: {posts: typeof recentPosts}) => {
  return (
    <div className="py-5 flex flex-col gap-10">
      {posts.map((post) => (
        <div className="flex justify-center lg:justify-start flex-wrap xl:flex-nowrap gap-10" key={post.id}>
          <Image className="max-w-[500px] w-full" width={400} height={300} alt={post.title} src={post.image} />
          <div className="flex flex-col justify-between items-start">
            <div className="flex gap-1 items-center">
              <span className="text-gray-600 text-sm">{post.date}</span>
              -
              <span className="uppercase text-red-700 font-medium">{post.category}</span>
            </div>
            <h1 className="font-bold text-2xl max-w-[500px]">{post.title}</h1>
            <p className="text-gray-500 max-w-[500px]">{truncateDescription(post.desc)}</p>
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
