"use client";
import theme from "@/app/theme";
import { alpha, Box, InputBase } from "@mui/material";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Search = ({ name }: { name: string }) => {
  const router = useRouter();
  const [value, setValue] = useState(name);

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: "auto",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        padding={2}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        sx={{
          color: "inherit",
          "& .MuiInputBase-input": {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
              width: "20ch",
            },
          },
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push(`?name=${value}`);
          }
        }}
      />
    </Box>
  );
};
