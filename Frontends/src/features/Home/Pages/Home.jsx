import React from "react";
import FaceExpression from "../../Expressions/components/FaceExpression";
import Player from "../../Home/Components/Player";
import { useSong } from "../Hooks/useSongs";

const Home = () => {
  const { handleGetSong } = useSong();

  return (
    <>
      <FaceExpression
        onClick={(expression) => {
          handleGetSong({ mood: expression });
        }}
      />
      <Player />
    </>
  );
};

export default Home;
