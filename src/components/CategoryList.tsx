/* eslint-disable @next/next/no-img-element */
import { categories } from "@/lib/categories";

const colorMap: { [key: string]: string } = {
  'pink-300': '#FBBFCA',
  'yellow-300': '#FCE',
  'brown-200': '#D9CBA0',
  'yellow-200': '#FCE68A',
  'blue-300': '#93C5FD',
};

const CategoryList = () => {

  return (
    <div className="py-10">
      <h1 className="font-semibold text-4xl">Popular Categories</h1>
      <div className="flex justify-between py-14">
        {categories.map((category) => (
          <span
            className="flex items-center gap-3 px-16 py-4 rounded-lg"
            key={category.id}
            style={{ backgroundColor: colorMap[category.color] }}
          >
            <img
              src={category.image}
              className="rounded-full size-[40px] object-cover"
              alt={category.name + " icon"}
            />
            <p className="capitalize text-sm">{category.name}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
