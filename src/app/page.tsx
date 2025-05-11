import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MuiLink from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import { Stack, Toolbar } from "@mui/material";

export default function Home() {
  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          <h1>Lord of the Rings</h1>
        </Toolbar>
      </AppBar>
      <Stack padding={2} alignItems="center">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/movies">
              <MuiLink component="span" underline="none">
                Movies
              </MuiLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/characters">
              <MuiLink component="span" underline="none">
                Characters
              </MuiLink>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/quotes">
              <MuiLink component="span" underline="none">
                Quotes
              </MuiLink>
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </main>
  );
}
