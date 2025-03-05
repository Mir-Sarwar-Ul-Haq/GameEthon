import React from "react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

function PlatformIconList({ platforms }) {
    const theme = useTheme()
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    psvita: FaPlaystation,
    playstation3: FaPlaystation,
    playstation4: FaPlaystation,
    xbox360: FaXbox,
    xboxOne: FaXbox,
  };
  return (
    <Stack direction="row" spacing={1}>
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return IconComponent ? (
          <IconComponent key={platform.id} size={20} color={theme.palette.secondary.main} />
        ) : null;
      })}
    </Stack>
  );
}

export default PlatformIconList;
