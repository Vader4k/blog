/* eslint-disable @next/next/no-img-element */
import { categories } from "@/lib/categories";
import Link from "next/link";
import { colorMap } from "@/utils/getBgColor";

const CategoryList = () => {

  return (
    <div className="py-10">
      <h1 className="font-semibold text-2xl md:text-4xl">Popular Categories</h1>
      <div className="flex flex-wrap md:flex-nowrap justify-between py-5 md:py-10 mt-5 gap-10">
        {categories.map((category) => (
          <Link
            href={category.url}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-lg"
            key={category.id}
            style={{ backgroundColor: colorMap[category.color] }}
          >
            <img
              src={category.image}
              className="rounded-full size-[40px] object-cover"
              alt={category.name + " icon"}
            />
            <p className="capitalize text-sm">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
