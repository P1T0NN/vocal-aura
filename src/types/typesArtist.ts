export interface typesArtist {
  name: string;
  artistName: string;
  urlValue: string;
  niche: string;
  image: string;
  imageArtistPage: string;
  bio: string[];
  latestRelease?: {
    title: string;
    collaborators?: string;
  }
  activeSince: string;
  origin: string;
  style?: string;
  genre: string;
  bpmRange?: string;
  format?: string;
  topGigs?: string[];
  instagramLink?: string;
  spotifyLink?: string;
  soundcloudLink?: string;
  youtubeLink?: string;
  tiktokLink?: string;
  facebookLink?: string;

  twitterLink?: string;
}
  