import Topsongs from "@/components/Topsongs";
import { getTracks } from "@/data/datatrack";
import { getTrackid } from "@/data/defination";
import React from "react";





  export default async function Page() {


    const customers = await getTracks("nitinkhare");
  return(
      <>
      
      <h1>hi1</h1>

      {customers?.map((customer) => (
        <div>
               <Topsongs url={customer.youtubeurl} title={customer.title} />
                </div>
              ))}
      
      
      </>




 );

}