import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const session = false;
  return (
    <div className="w-full">
      <h1 className="font-bold text-gray-600 text-3xl">Comments</h1>
      <div className="py-5">
        {session ? (
          <form className="flex pb-5 items-center gap-5 w-full">
            <input
              type="text"
              placeholder="write a comment..."
              className="w-full border border-gray-300 rounded-md px-4 py-7"
            />
            <button className="bg-blue-500 text-white px-4 py-4 rounded-md">
              Send
            </button>
          </form>
        ) : (
          <Link href={"/login"}>Login to write a comment</Link>
        )}
        <div className="mt-5 flex flex-col gap-8">
          <div className="">
            <div className="flex items-center gap-3">
              <Image src="/sun.png" alt="profilepic" width={50} height={50} />
              <div className="flex flex-col text-sm text-gray-600">
                <span className="font-medium">John Doe</span>
                <span>01.01.2024</span>
              </div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              fugit aliquam soluta amet delectus minus. Vitae maxime eius ex
              possimus nihil. Cum magnam iusto beatae provident unde totam non
              quas.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <Image src="/sun.png" alt="profilepic" width={50} height={50} />
              <div className="flex flex-col text-sm text-gray-600">
                <span className="font-medium">John Doe</span>
                <span>01.01.2024</span>
              </div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              fugit aliquam soluta amet delectus minus. Vitae maxime eius ex
              possimus nihil. Cum magnam iusto beatae provident unde totam non
              quas.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <Image src="/sun.png" alt="profilepic" width={50} height={50} />
              <div className="flex flex-col text-sm text-gray-600">
                <span className="font-medium">John Doe</span>
                <span>01.01.2024</span>
              </div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              fugit aliquam soluta amet delectus minus. Vitae maxime eius ex
              possimus nihil. Cum magnam iusto beatae provident unde totam non
              quas.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <Image src="/sun.png" alt="profilepic" width={50} height={50} />
              <div className="flex flex-col text-sm text-gray-600">
                <span className="font-medium">John Doe</span>
                <span>01.01.2024</span>
              </div>
            </div>
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              fugit aliquam soluta amet delectus minus. Vitae maxime eius ex
              possimus nihil. Cum magnam iusto beatae provident unde totam non
              quas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
