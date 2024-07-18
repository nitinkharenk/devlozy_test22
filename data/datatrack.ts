"use server";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import { CheckUser01, Latest01, Mostpopular, getTrackid , getplay_count } from "./defination";

const FormSchema = z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    SpotifyUrl: z.string(),
    youtubeUrl: z.string(),
    username: z.string(),
});

const CreateNewTrack = FormSchema;

export async function createNewTrack(formData: FormData) {
    const currentDate: Date = new Date();
    const curDate = currentDate.toISOString();
    console.log(formData, curDate);

   
        const { title, description, tag, SpotifyUrl, youtubeUrl, username } = CreateNewTrack.parse({
            title: formData.get("title") || 'T01',
            description: formData.get("description") || 'D01',
            tag: formData.get("tag") || 'T02',
            SpotifyUrl: formData.get("SpotifyUrl") || 'S01',
            youtubeUrl: formData.get("youtubeUrl") || 'Y01',
            username: formData.get("username") || 'U01',
        });

        
        await
        console.log(title);
        sql`
            INSERT INTO CreateNewTrack174 (title, description, tag, SpotifyUrl, youtubeUrl, username, date, play_count, share_count)
            VALUES (${title}, ${description}, ${tag}, ${SpotifyUrl}, ${youtubeUrl}, ${username}, ${curDate}, NULL, NULL)
        `;
   
        
    

    console.log("success");
}



export async function getTracks(username: string) {
     try {

    const data = await sql<getTrackid>`
        SELECT id, title, youtubeUrl FROM CreateNewTrack174 WHERE username = ${username} ORDER BY 
    play_count DESC
    `;
    const tracks = data.rows;
   
    return tracks;

    } catch (error) {
        console.log(error);
    }
}


export async function Play01(id: number) {
    const getplaycount = await sql<getplay_count>`
        SELECT play_count FROM CreateNewTrack174 WHERE id = ${id}
    `;

    const playcount = getplaycount.rows[0].play_count;

     await sql`
        update CreateNewTrack174 set play_count =  ${playcount + 1}  WHERE id = ${id}
    `;
    
}

export async function MostPopular(username: any) {
    const data = await sql<Mostpopular>`
        SELECT id, play_count, title, youtubeUrl FROM CreateNewTrack174 WHERE username = ${username} ORDER BY play_count asc LIMIT 1

    `;
    const MostPopular = data.rows;
   
    return MostPopular;
}

export async function Latest(username: any) {
    const data = await sql<Latest01>`
        SELECT id, date, title, youtubeUrl FROM CreateNewTrack174 WHERE username = ${username} ORDER BY date asc LIMIT 1

    `;
    const data1 = data.rows;
   
    return data1;
}

export async function CheckUser(username: any) {
    const data = await sql<CheckUser01>`
        SELECT description, born, bornIn, tag, username, website, facebook, instagram, soundcloud, twitter, date FROM Artistdetails01 WHERE username = ${username}
        `;
    const data1 = data.rows;

   
    return data1;
}