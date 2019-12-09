import { propOr, sortBy, prop, pipe } from "ramda";
import { Song } from "../reducers/Songs";

interface Props {
  songsArray: Song[];
  fav: number[];
  fetchSongs: () => void;
  setFavSong: (id: number) => void;
}

export const getSongsArray: (props: Props) => Song[] = propOr([], "songsArray");

export const sortById = sortBy(prop("id"));

export const getSongsSorted = pipe(
  getSongsArray,
  sortById
);
