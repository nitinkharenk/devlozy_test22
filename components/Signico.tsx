"use client";

import {
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MyComponentProps {
  imageUrl?: string;
  profileUrl?: string;
}

export default function Signico() {
  const { isLoaded, userId } = useAuth();
  const { user } = useUser();

  const validImageUrl = user?.imageUrl || "/path/to/default-image.jpg";
  const validprofileUrl = user?.username || "/path/to/default-profile.jpg";

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return (
      <div>
        <div className="flex space-x-2 items-center">
          <Link
            className="group hover:-translate-y-0.5 active:scale-[0.98] relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center"
            href="/sign-up"
          >
            Sign Up
          </Link>
          <Link
            href={"/sign-in"}
            className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]"
          >
            Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Image
            src={validImageUrl}
            alt={""}
            width={30}
            height={30}
            className="rounded-full"
          />
        </PopoverTrigger>

        <PopoverContent className="w-full bg-black">
          <div className="flex flex-col text-white  gap-y-2">
            <Link
              className="hover:border-b-2 hover:border-solid hover:border-b-white flex flex-col"
              href={`/user/${validprofileUrl}`}
            >
              View Profile
            </Link>
            <Link
              className="hover:border-b-2 hover:border-solid hover:border-b-white"
              href={`/user/${validprofileUrl}`}
            >
              Settings
            </Link>
            <div className="hover:border-2 hover:border-solid hover:border-white mt-2 py-1 px-10 rounded-md text-center">
              <SignOutButton />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
