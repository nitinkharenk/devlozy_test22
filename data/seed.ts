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

const CreateUser = FormSchema;

export async function createUser(formData: FormData) {
  // ...
  const currentDate: Date = new Date();
  const curDate = currentDate.toISOString();
  console.log(formData, curDate);

  try {
    const data = await sql`
    SELECT MAX(UserID) as LastUserID FROM Users174`;
    const LastUserID = data.rows[0].lastuserid + 1;

    const { name, email, username, password } = CreateUser.parse({
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await sql`
    INSERT INTO users174 (userid, name, email,  username, password, registrationdate, lastlogin)
    VALUES (${LastUserID} , ${name}, ${email}, ${username}, ${password}, ${curDate}, ${curDate})
  `;
  } catch (error) {
    console.log(error, NextResponse.json);
  }

  const pets = await sql`SELECT * FROM users174;`;
  console.log(pets);
}



const FormSchema1 = z.object({
  
  artistname: z.string(),
  genre: z.string(),
  biography: z.string(),
  
});
const CreateArtist = FormSchema1;

export async function createArtist(formData: FormData) {
  // ...
  const { artistname, genre, biography  } = CreateArtist.parse({
      
    artistname: formData.get("artsitname"),
    genre: formData.get("genre"),
    biography: formData.get("biography"),
    
  });



   
  console.log(formData);
  console.log(artistname, genre, biography);

  try {
   



   

    await sql`
    INSERT INTO artists174 (artistid, artistname, genre, biography, imageurl)
    VALUES ( 2, ${artistname}, ${genre}, ${biography}, 'neil')
  `;
  } catch (error) {
    console.log(error, NextResponse.json);
  }


 
}
