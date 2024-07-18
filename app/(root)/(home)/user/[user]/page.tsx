import Link from "next/link";
import Image from "next/image";
import Topsongs from "@/components/Topsongs";
import { getTracks } from "@/data/datatrack";
import { currentUser } from "@clerk/nextjs/server";


const Page = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const user = await currentUser();
  

  const songa = await getTracks(user?.username || username);

  return (
    <>
      
      <div className="mx-40 grid grid-cols-8 gap-20">
        <div className="col-span-6">
          <h1 className="text-2xl font-bold my-6">Top Tracks</h1>
          <div className="flex flex-col">
            {songa?.map((songa, index) => (
              <div key={songa.id}>
                <div className="">
                
                  <Topsongs id={songa.id} url={songa.youtubeurl} title={songa.title} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-1 relative">
          
        </div>
      </div>
      
      
    </>
  );
};

export default Page;
