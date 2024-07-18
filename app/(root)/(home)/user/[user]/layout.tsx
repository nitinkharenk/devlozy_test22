import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Userlay from "@/components/Userlay";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {

  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;
  
  return (
    <>
      <Userlay />
      {children}
    </>
  );
};

export default layout;
