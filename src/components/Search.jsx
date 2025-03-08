import React, { useRef } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

// Rename the styled component to avoid name conflicts with the component
const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  borderRadius: "40px",
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // Note: The color "danger" is used as provided, but you may want to change it
  color: "danger",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from search icon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const Search = ({onSearch}) => {
  const theme = useTheme();
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: theme.palette.text.primary }} />
        </SearchIconWrapper>
        <StyledInputBase
          inputRef={ref}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchWrapper>
    </form>
  );
};

export default Search;
