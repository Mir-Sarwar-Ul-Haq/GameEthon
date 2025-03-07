import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { useTheme } from "@emotion/react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function  SortSelector({onSelecSordOrder, sortOrder}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
    { value: "-created", label: "Created" },
    { value: "-updated", label: "Updated" },
  ];
  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  //   const { data, error } = usePlatforms();

  //   if (error) return null;
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
          //   marginLeft: "10px",
        }}
        variant="contained"
      >
        Order by: {currentSortOrder?.label || "Relevance"}
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
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => {
                onSelecSordOrder(order.value)
                setAnchorEl(null)
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default SortSelector;
