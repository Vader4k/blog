import React from "react";
import { bgColor } from "@/utils/getBgColor";
import Card from "@/components/Card";
import Menu from "@/components/Menu";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const query = (await searchParams).category;
  const params = { search: query || null };

  return (
    <div className="py-5">
      <div
        className="w-full"
        style={{ backgroundColor: bgColor(params.search || "red") }}
      >
        {params.search ? (
          <h1 className="capitalize text-center text-white font-medium text-3xl py-2">
            {params.search} Blog
          </h1>
        ) : (
          <h1 className="capitalize text-center text-white font-medium text-3xl py-2">
            Blog
          </h1>
        )}
      </div>
      <div className="flex py-10 md:flex-row flex-col justify-between w-full gap-10 lg:gap-20">
        <Card params={params.search || ""} />
        <Menu />
      </div>
    </div>
  );
};

export default page;
