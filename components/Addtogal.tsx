"use client";
import React from "react";
import Addtrack from "@/components/Addtrack";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@radix-ui/react-dialog";
import { createNewTrack } from "@/data/datatrack";
import { useUser } from "@clerk/nextjs";

const Addtogal = () => {

  const { user } = useUser();
  
  return (
    <>
      <section className="">
        <div className="">
          <Dialog >
            <DialogTrigger>Add New</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <CardHeader>
                  <CardTitle>Create New Track</CardTitle>
                </CardHeader>
                <form action={createNewTrack}>
                  <CardContent>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Track Title</Label>
                        <Input id="title" name="title" placeholder="Name of your track" required />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">description</Label>
                        <Textarea
                          id="description" name="description"
                          placeholder="description of your track"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="Tag">Tag</Label>
                        <Input id="Tag" name="Tag" placeholder="" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="SpotyfyUrl">Spotify Url</Label>
                        <Input
                          id="SpotyfyUrl" name="SpotyfyUrl"
                          placeholder="Spotify Url of your track"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="youTube">YouTube Url</Label>
                        <Input
                          id="youtubeUrl"   name="youtubeUrl"
                          placeholder="youTube Url of your track" required
                        />
                      </div>
                      <div className="hidden">
                        <Label htmlFor="username">username</Label>
                        <Input
                          id="username"   name="username"
                          placeholder="" value={user?.username || ''}
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button>Create</Button>
                  </CardFooter>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
};

export default Addtogal;
