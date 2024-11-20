import { categories } from "@/lib/categories";
import { recentPosts } from "@/lib/recentposts";
import Image from "next/image";
import Link from "next/link";
import { bgColor, colorMap } from "@/utils/getBgColor";

const Menu = () => {

  return (
    <div className="flex-1 md:flex-[2]">
      <span className="text-sm text-gray-500">What{"'"}s hot</span>
      <h1 className="text-2xl font-bold">Most Popular</h1>
      <div className="py-8 flex flex-col gap-5 items-start">
        {recentPosts.map((post) => (
          <Link
            className="flex flex-col items-start gap-1"
            key={post.id}
            href={"/"}
          >
            <span
              style={{ backgroundColor: bgColor(post.category) }}
              className="px-2 py-1 rounded-full text-xs text-white capitalize"
            >
              {post.category}
            </span>
            <h2 className="font-medium tracking-tighter text-black/70">
              {post.title}
            </h2>
            <div className="text-xs space-x-2">
              <span>{post.author}</span>
              <span className="text-gray-500">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="py-8">
        <span className="text-sm text-gray-500">Discover by topic</span>
        <h1 className="text-2xl font-bold">Categories</h1>
        <div className="flex pt-8 flex-wrap gap-5">
          {categories.map((category) => (
            <Link
              href={category.url}
              className="flex items-center justify-center gap-3 w-full max-w-[80px] py-2 rounded-lg"
              key={category.id}
              style={{ backgroundColor: colorMap[category.color] }}
            >
              <p className="capitalize text-sm">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-8">
        <span className="text-sm text-gray-500">Choosen by the editor</span>
        <h1 className="text-2xl font-bold">Editors Pick</h1>
        <div className="py-8 flex flex-col gap-5">
          {recentPosts.slice(0, 3).map((post) => (
            <Link className="flex gap-3 items-center" key={post.id} href={"/"}>
              <Image
                width={100}
                height={100}
                src={post.image}
                alt={post.title}
                className="rounded-full size-[60px] object-cover border-2 border-gray-400"
              />

              <div className="flex flex-col items-start gap-1">
                <span
                  style={{ backgroundColor: bgColor(post.category) }}
                  className="px-2 py-1 rounded-full text-xs text-white capitalize"
                >
                  {post.category}
                </span>
                <h2 className="font-medium tracking-tighter text-black/70">
                  {post.title}
                </h2>
                <div className="text-xs space-x-2">
                  <span>{post.author}</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
