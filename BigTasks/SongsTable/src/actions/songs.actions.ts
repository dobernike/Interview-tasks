import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { SongsMock } from "../mock/songs.mock";
import { GET_SONGS, SET_FAVORITE } from "../constants/songs";

export const fetchSongs = (): ThunkAction<
  Promise<void>,
  {},
  {},
  AnyAction
> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      dispatch({ type: GET_SONGS, payload: SongsMock });
      resolve();
    }, 1000);
  });

export const setFavSong = (
  id: number
): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>,
  getState: Function
) =>
  new Promise<void>(resolve => {
    setTimeout(() => {
      const {
        songs: { fav }
      } = getState();

      dispatch({
        type: SET_FAVORITE,
        payload: Array.from(new Set([...fav, id]))
      });
      resolve();
    }, 1000);
  });
