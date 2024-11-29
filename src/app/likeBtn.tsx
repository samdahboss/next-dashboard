"use client";
import { useState } from "react";

type Props = {};

const LikeBtn: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);

  function handleClick() {
    setLikes(likes + 1);
  }
  return <button onClick={handleClick}>Like ({likes})</button>;
};

export default LikeBtn;
