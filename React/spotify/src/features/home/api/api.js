import axios from "axios";

export const searchSongApi = async (songName) => {
  try {
    let res = await axios.get(
      `https://api.audius.co/v1/tracks/search?query=${songName}`,
    );
    console.log("res from song->", res);
    return res.data.data;
  } catch (error) {
    console.log("error in searching songs", error);
  }
};
