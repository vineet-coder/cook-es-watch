import axios from "axios";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useReduce } from "../providers/useReducerProvider";
import { PlaylistCard } from "./PlaylistCard";
import { usePlaylist } from "./PlayListContextProvier";
export const PlayList = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  const { setIsSideNav } = useReduce();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          "https://cook-es-watch.herokuapp.com/playlists"
        );

        playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  const closeSideNav = () => {
    document.getElementById("sideNav").style.width = "0%";
    setIsSideNav(false);
  };
  return (
    <>
      <Header />
      <SideNav />

      <div className="playlist-videos-main" onClick={() => closeSideNav()}>
        <h2 className="page-heading-playlist">PLAYLISTS</h2>

        {playlistState.playlist.map((item) => (
          <PlaylistCard key={item._id} playlist={item} />
        ))}
      </div>
    </>
  );
};
