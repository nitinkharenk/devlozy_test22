"use server";
import { sql } from "@vercel/postgres";
import { CheckUsers174, Userform, LastUserID, UserName, user, NewArtist } from "./defination";
import { z } from "zod";


const FormSchema = z.object({
  
  username: z.string(),
  
});

const Checkusers = FormSchema;


export async function artistf() {
  try {
    const data = await sql<Userform>`
          SELECT *FROM users174
          
        `;

    const artist = data.rows;
    return artist;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
};




export async function artist14() {
  try {
    const data  = await sql<LastUserID>`
    SELECT MAX(UserID) as LastUserID FROM Users174`;

 
  } catch (err) {
    
   
  }
}

export async function userName( username : string) {
  
  try {
    const data  = await sql<Userform>`
    SELECT *FROM Users174 where username = ${username} `;
    const customers = data.rows;
    
    return customers;
  } catch (err) {
    
  }

}

export async function users(){

  try{
    const data = await sql<user>`
    select *from users174`;
    const users = data.rows;
    console.log(data)
    console.log(users)
    return users;
  }
catch (err) {
 
    
}

}



export async function fatchArtist(username : string) {

  try {
    const data  = await sql<NewArtist>`
    SELECT username FROM Users174 where username = ${username} `;
    const artist = data.rows;
    
    return artist;
  } catch (err) {
    console.log(err);
    return ("Error in fetching artist");
  }
}