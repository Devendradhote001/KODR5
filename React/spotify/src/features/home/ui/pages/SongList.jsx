import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { searchSongApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { addSong } from "../../../player/state/playerSlice";

const SongList = () => {
  let audioRef = useRef(null);
  let dispatch = useDispatch();

  let { name } = useParams();
  const [songsList, setSongsList] = useState(null);

  let getSongsList = async () => {
    let data = await searchSongApi(name);
    console.log(data);
    setSongsList(data);
  };

  useEffect(() => {
    getSongsList();
  }, [name]);

  let handlePlay = (val) => {
    audioRef.current.src = val?.stream.url;
    audioRef.current.play();
    dispatch(addSong(val));
  };

  return (
    <div className="flex flex-col gap-5">
      {songsList?.map((val) => (
        <h1
          onClick={() => handlePlay(val)}
          className="p-2 bg-gray-800"
          key={val.track_id}
        >
          {val.title}
        </h1>
      ))}

      <audio ref={audioRef}></audio>
    </div>
  );
};

export default SongList;
