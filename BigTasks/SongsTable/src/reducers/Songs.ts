import { GET_SONGS, SET_FAVORITE } from "../constants/songs";

export interface Song {
  id: number;
  band: string;
  name: string;
}

export interface SongsState {
  songsArray: Song[];
  fav: number[];
}

const DEFAULT_STATE = {
  songsArray: [],
  fav: []
};

export default (state: SongsState = DEFAULT_STATE, { type, payload }: any) => {
  switch (type) {
    case GET_SONGS:
      return { ...state, songsArray: payload };
    case SET_FAVORITE:
      return { ...state, fav: payload };
    default:
      return state;
  }
};
