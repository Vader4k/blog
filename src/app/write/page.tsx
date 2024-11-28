"use client";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const WritePage = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  return (
    <div className="py-10">
      <input
        className=" text-5xl pb-5 outline-none capitalize"
        type="text"
        placeholder="Title"
      />
      <div className="relative">
        <button onClick={() => setIsOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"></path>
          </svg>
        </button>
        {open && (
          <div className="absolute flex items-center gap-4 top-0 left-12">
            <button className="border-black border p-1 rounded-full">
              <Image src={"/image.png"} alt="image" width={20} height={20} />
            </button>
            <button className="border-black border p-1 rounded-full">
              <Image src={"/upload.png"} alt="upload" width={20} height={20} />
            </button>
            <button className="border-black border p-1 rounded-full">
              <Image src={"/video.png"} alt="video" width={20} height={20} />
            </button>
          </div>
        )}
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
          className="my-10"
        />
      </div>
      <button className="absolute top-10 right-20 py-1 px-5 bg-green-400 text-white rounded-2xl text-sm">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
