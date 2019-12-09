import { RootState } from "../store";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { SongsState } from "../reducers/Songs";
import Songs from "../components/songs.component";
import { fetchSongs, setFavSong } from "../actions/songs.actions";

interface DispatchProps {
  fetchSongs: () => void;
  setFavSong: (id: number) => void;
}

const mapStateToProps = (state: RootState): SongsState => ({
  songsArray: state.songs.songsArray,
  fav: state.songs.fav
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, any>
): DispatchProps =>
  bindActionCreators(
    {
      fetchSongs,
      setFavSong
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);
