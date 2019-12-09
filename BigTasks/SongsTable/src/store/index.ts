import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import songs, { SongsState } from "../reducers/Songs";

export interface RootState {
  songs: SongsState;
}

export default createStore(
  combineReducers<RootState>({
    songs
  }),
  applyMiddleware(thunk)
);
