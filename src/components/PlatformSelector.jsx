import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useTheme } from "@emotion/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector({ onSelectPlatform, selectedPlatform }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          backgroundColor: theme.palette.button.primary,
          marginLeft: "10px",
        }}
        variant="contained"
      >
        {selectedPlatform?.name || "Platforms"}
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ mt: 1 }}
      >
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              onSelectPlatform(platform);
              setAnchorEl(null);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default PlatformSelector;
