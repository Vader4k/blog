import { categories } from "@/lib/categories";
import { recentPosts } from "@/lib/recentposts";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  const bgColor = (category: string) => {
    switch (category) {
      case "anime":
        return "#D81B60";
      case "food":
        return "#F57F17";
      case "travel":
        return "#A1887F";
      case "music":
        return "#FBC02D";
      case "coding":
        return "#1E88E5";
      default:
        return "#A0A0A0";
    }
  };

  const colorMap: { [key: string]: string } = {
    "pink-300": "#FBBFCA",
    "yellow-300": "#FCE",
    "brown-200": "#D9CBA0",
    "yellow-200": "#FCE68A",
    "blue-300": "#93C5FD",
  };

  return (
    <div className="flex-[2]">
      <span className="text-sm text-gray-500">What{"'"}s hot</span>
      <h1 className="text-2xl font-bold">Most Popular</h1>
      <div className="py-8 flex flex-col gap-5 items-start">
        {recentPosts.map((post) => (
          <Link
            className="flex flex-col items-start gap-2"
            key={post.id}
            href={"/"}
          >
            <span
              style={{ backgroundColor: bgColor(post.category) }}
              className="px-2 py-1 rounded-full text-xs text-white capitalize"
            >
              {post.category}
            </span>
            <h2 className="font-medium tracking-tighter text-black/70">{post.title}</h2>
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
        <div className="py-8 flex flex-col gap-8">
          {recentPosts.slice(0,3).map((post) => (
            <Link
              className="flex gap-3 items-center"
              key={post.id}
              href={"/"}
            >
              <div className="relative flex items-center justify-center w-[100px] border-[3px] border-gray-300 rounded-full ">
                <Image
                  width={100}
                  height={100}
                  src={post.image}
                  alt={post.title}
                  className="rounded-full size-[60px] object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-2">
                <span
                  style={{ backgroundColor: bgColor(post.category) }}
                  className="px-2 py-1 rounded-full text-xs text-white capitalize"
                >
                  {post.category}
                </span>
                <h2 className="font-medium tracking-tighter text-black/70">{post.title}</h2>
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
