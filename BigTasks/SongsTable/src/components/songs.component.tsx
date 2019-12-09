import * as React from "react";
import { includes } from "ramda";
import { Song } from "../reducers/Songs";
import { getSongsSorted } from "../utils/songs.utils";
import SongsView from "./styled";

interface Props {
  songsArray: Song[];
  fav: number[];
  fetchSongs: () => void;
  setFavSong: (id: number) => void;
}

class Songs extends React.Component<Props> {
  async componentDidMount(): Promise<void> {
    const { fetchSongs } = this.props;

    await fetchSongs();
  }

  handleClickFavorite = (id: number) => () => {
    const { setFavSong } = this.props;

    setFavSong(id);
  };

  render() {
    const { fav } = this.props;

    return (
      <SongsView>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Песня</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {getSongsSorted(this.props).map(({ id, band, name }: Song) => (
              <tr
                className="tableContent"
                key={id}
                onClick={this.handleClickFavorite(id)}
              >
                <td>{id}</td>
                <td>
                  {band} - {name}
                </td>
                <td>{includes(id, fav) ? "Favorite" : "Make Favorite"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SongsView>
    );
  }
}

export default Songs;
