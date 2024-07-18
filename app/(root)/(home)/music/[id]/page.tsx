import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";
import { CheckUser, getTracks, Latest, MostPopular } from "@/data/datatrack";
import Test01 from "@/components/Test01";
import Tag01 from "@/components/Tag01";
import SimilarA01 from "@/components/SimilarA01";
import Topsongs from "@/components/Topsongs";

interface MusicIdProps {
  params: { id: string };
}

export default async function Cart({
  params,
}: MusicIdProps): Promise<JSX.Element> {
  try {
    const checkuser01 = await CheckUser(params.id);

    if (!checkuser01) {
      return <div>No ID</div>;
    }

    const mostpopular = await MostPopular(params.id);
    const latest = await Latest(params.id);
    
    const date = new Date(latest[0].date).toDateString();
    const date01 = new Date(checkuser01[0].born).toDateString();
    const songa = await getTracks(params.id);
    
    const calculateAge = (born : any) => {
      const birthDate = new Date(born);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };
    const age = calculateAge(checkuser01[0].born);

    return (
      <>
        <div className="z-10 relative overflow-hidden">
          <div className="flex justify-end">
            <div className="h-96 w-1/2">
              <Image
                src="/Sabrina.webp"
                alt="hero"
                width={770}
                height={380}
                className="bg-contain bg-center"
              />
            </div>
          </div>
          <div className="grid grid-cols-10 absolute top-0 bottom-0">
            <div className="col-span-7 pl-44  py-16 font-['Montserrat'] bg-orange-400">
              <h1 className="text-5xl font-bold">{params.id}</h1>
              <div className="flex gap-4 my-10">
                <h1 className="text-4xl">#10</h1>
                <button className="text-xl text-black px-8 py-2 bg-white rounded-sm">
                  play artist
                </button>
                <button className="text-xl text-black px-4 py-2 bg-white rounded-sm">
                  #
                </button>
                <button className="text-xl text-black px-4 py-2 bg-white rounded-sm">
                  :
                </button>
              </div>
              <div className="flex gap-4">
                <Test01
                  id={latest[0].id}
                  url={latest[0].youtubeurl}
                  title={latest[0].title}
                  page_count={date}
                  description={"LATEST RELEASE"}
                />
                <Test01
                  id={mostpopular[0].id}
                  url={mostpopular[0].youtubeurl}
                  title={mostpopular[0].title}
                  page_count={`${mostpopular[0].play_count} listeners`}
                  description={"POPULAR THIS WEEK"}
                />
              </div>
            </div>
            <div className="px-24 col-span-3 bg-gradient-to-r from-orange-400 to-150%"></div>
          </div>
        </div>
        <div className="mx-32 my-10 grid grid-cols-10 ">
          <div className="gap-10 col-span-7">
            <div className="flex justify-between">
            <p>{checkuser01[0].description}</p>
            <div className="content-start justify-items-start grid grid-cols-4 mx-6 gap-x-4">
              <div className="col-span-1">
              <h1 className="font-bold text-sm">Born</h1>
              <h1 className="font-bold text-sm">Born In</h1>
              </div>
              <div className="col-span-3">
              <h6 className="text-sm">
                {date01}
                <span>(Age{age})</span>
              </h6>
              <h6 className="text-sm">{checkuser01[0].bornin}</h6>
              </div>
            </div>
            </div>
            <Tag01 text={checkuser01[0].tag} />
          </div>
          <div className="col-span-3">
          <SimilarA01 />
          </div>
        
          <div className="w-full col-span-7 ">
        <div className="">
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
        </div>
        
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return (
      <div className="flex justify-center items-center">Error loading data</div>
    );
  }
}
