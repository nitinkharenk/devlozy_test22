import Topsongs from "@/components/Topsongs";
import { getTracks } from "@/data/datatrack";
import { getTrackid } from "@/data/defination";
import React from "react";





  export default async function Page({
    
  }: {
    page: getTrackid[];
  }) {


    const songa = await getTracks("nitinkhare");
  return(
      <>
      
      <h1>hi</h1>

      {songa?.map((songa, index) => (
        <div>
               <Topsongs url={songa.youtubeurl} title={songa.title} id={songa.id} index={ songa.index} />
                </div>
              ))}
      
      
      </>




 );

}