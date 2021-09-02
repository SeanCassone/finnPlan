import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";
import finnPlan from "../../images/FinnPlan.svg";
const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Avatar alt="Remy Sharp" src={finnPlan} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fin Plan
          </Typography>
          <Button color="inherit">Register</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
