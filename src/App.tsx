import React, { useState } from "react";
import "./App.css";
import {
  AppBar,
  Box,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import PostOpDiet from "./components/PostOpDiet/PostOpDiet";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BmiCalculator from "./components/BmiCalculator";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
function App() {
  const pages = {
    postOpDiet: "Post-op Diet",
    bmiCalculator: "BMI Calculator",
  };
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openPage, setOpenPage] = useState(pages.postOpDiet);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {openPage}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography>Navigation</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[pages.postOpDiet, pages.bmiCalculator].map((text, index) => (
              <ListItem
                  button
                  key={text}
                  onClick={() => {
                    setOpenPage(text);
                    setOpen(false);
                  }}
              >
                <ListItemText primary={text}/>
              </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{marginTop: 5}}>
        {openPage === pages.postOpDiet && <PostOpDiet/>}
        {openPage === pages.bmiCalculator && <BmiCalculator/>}
      </div>
    </Box>
  );
}

export default App;
