"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { db } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { Userform, LastUserID } from "./defination";
import { artist14 } from "./artist";


const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  username: z.string(),
  password: z.string(),
});



export async function createArtist(formData: FormData) {
  // ...
  const CreateArtist = FormSchema;
  const name = formData.name;
  console.log(name);
  try {

   

    console.log("button clicked");
    console.log(name);
 
  //  await sql`
  //  INSERT INTO users174 (userid, name, email,  username, password, registrationdate, lastlogin)
  //  VALUES (${LastUserID} , ${name}, ${email}, ${username}, ${password}, ${curDate}, ${curDate})
 // `;
  } catch (error) {
    console.log(error, NextResponse.json);
    console.log("error on create Artist");
  }



}


