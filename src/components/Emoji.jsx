import React from "react";
import meh from "../assets/meh.png"
import thumbsUp from "../assets/thumbs-up.png"
import bullsEye from "../assets/bulls-eye.png"
import { Box } from "@mui/material";

function Emoji({ rating }) {
  if (rating < 3) return null;
  const emojiMap = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };
  return (
    <Box
      component="img"
      width={27}
      {...emojiMap[rating]}
    />
  );
}

export default Emoji;
