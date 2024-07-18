"use client";
import Link from "next/link";
import Image from "next/image";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Addtogal from "@/components/Addtogal";

export default function Page() {
  const { user } = useUser();

  

  return (
    <>
      <div>
        <div className="bg-gradient-to-tr  from-purple-600 to-green-700 h-60 w-full relative">
          <img
            src="/userhero.jpg"
            className="w-full h-full  object-cover absolute mix-blend-lighten"
          />
          <div className="p-24">
            <div className="absolute flex">
              <Image
                src={user?.imageUrl || "/userhero.jpg"}
                alt={""}
                width={200}
                height={200}
                className="rounded-full border-b border-black"
              />
              <div className="ml-10 ">
                <div>
                  <h1 className="text-5xl mt-6 font-bold text-white">
                    {user?.firstName}
                  </h1>
                </div>

                <div className="text-white text-lg flex gap-6 mt-10  ">
                  <Link
                    className=" hover:border-red-700 hover:border-solid hover:border-b-4"
                    href={`/user/${user?.username}`}
                  >
                    Owerview
                  </Link>
                  <Link
                    className=" hover:border-red-700 hover:border-solid hover:border-b-4"
                    href={`/user/${user?.username}/albums`}
                  >
                    {" "}
                    Albums
                  </Link>
                  <Link
                    className=" hover:border-red-700 hover:border-solid hover:border-b-4"
                    href={`/user/${user?.username}/followers`}
                  >
                    Followers
                  </Link>
                  <Link
                    className=" hover:border-red-700 hover:border-solid hover:border-b-4"
                    href={`/user/${user?.username}/following`}
                  >
                    Following
                  </Link>
                  <Link
                    className=" hover:border-red-700 hover:border-solid hover:border-b-4"
                    href={`/user/${user?.username}/favorites`}
                  >
                    Favorites
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center border-t mt-4 border-black">
          <div className=" w-96 bg-black rounded-md px-4 py-2 my-6 text-white text-center">
            <Addtogal />
            
          </div>
          <SignOutButton />
        </div>
      </div>
    </>
  );
}
