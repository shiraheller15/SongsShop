import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddSong from "../Components/Pages/addSong/AddSong";
import EditSong from "../Components/Pages/editSong/EditSong";
import SongsLandingPage from "../Components/Pages/songsLandingPage/SongsLandingPage";
import Song from "../Components/Song";

export default function RouterConnections() {
    const [songsArr, setSongsArr] = useState<Song[]>();
    return (
      <div>
          <Routes>
            <Route path="/" element={<SongsLandingPage songsArr = {songsArr} setArraySongs = {setSongsArr}/>} />
            <Route path="/songs/toAdd" element={<AddSong songsArr = {songsArr} setArraySongs = {setSongsArr}/>} />
            <Route path="/songs/toEdit/:id" element={<EditSong songsArr = {songsArr} setArraySongs = {setSongsArr}/>}/>
          </Routes>
      </div>
    );
  }