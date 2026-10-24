import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <h1>This is my home page where all songs been listen</h1>

      <button onClick={() => navigate(`/main/songs/samjho_na`)}>
        Samjho Na
      </button>
      <button onClick={() => navigate(`/main/songs/bheege`)}>
        Bheege honth
      </button>
      <button onClick={() => navigate(`/main/songs/blinding_lights`)}>
        Blinding lights
      </button>
      <button onClick={() => navigate(`/main/songs/starboy`)}>Starboy</button>
    </div>
  );
};

export default HomePage;
