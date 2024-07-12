import "./App.css";
import { Home } from "./pages/home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./pages/history/History";
import { VideoPage } from "./pages/videopage/VideoPage";
import { WatchLater } from "./pages/watchlater/WatchLater";
import { LikedVideos } from "./pages/likedvideos/LikeVideosPage";
import { PlayList } from "./pages/playlist/PlayList";
import { SignUp } from "./pages/signup/SignUp";
import { LogIn } from "./pages/login/LogIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/later" element={<WatchLater />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
