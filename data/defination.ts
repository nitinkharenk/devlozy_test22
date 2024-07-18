export type CreateNewTrack = {
  title: string;
  discription: string;
  tag: string;
  SpotyfyUrl: string;
  youtubeUrl: string;
};

export type getTrackid = {
  index: number;
  id: number;
  title: string;
  youtubeurl: string;
};

export type getplay_count = {
  play_count: number;
}

export type Mostpopular = {
  id: number;
  title: string;
  youtubeurl: string;
  play_count: number;
}

export type Latest01 = {
  id: number;
  title: string;
  youtubeurl: string;
  date: Date;
}
export type CheckUser01 = {
    description : string;
    born : Date;
    bornin : string;
    tag : string;
    username : string;
    website : string;
    facebook : string;
    instagram : string;
    soundcloud : string;
    twitter : string;
    date : Date;
  }