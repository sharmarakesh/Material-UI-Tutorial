import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKey from "@material-ui/icons/VpnKey";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // top: "auto",
    // bottom: 0,
    [theme.breakpoints.up("md")]: {
      background: theme.palette.primary.dark,
    },

    [theme.breakpoints.down("sm")]: {
      background: theme.palette.secondary.dark,
    },
    marginBottom: 10,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const AppBarExample = () => {
  const classes = useStyles();
  return (
    <AppBar square elevation={1} position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          App Bar Example
        </Typography>
        <Button color="inherit" startIcon={<VpnKey />}>
          Login
        </Button>
        <Button color="inherit" startIcon={<AccountCircle />}>
          Profile
        </Button>
      </Toolbar>
    </AppBar>
  );
};
