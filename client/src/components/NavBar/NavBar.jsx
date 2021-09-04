import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import Avatar from "@material-ui/core/Avatar";
import finnPlan from "../../images/FinnPlan.svg";
const NavBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();

  const menuItems = [
    {
      text: "Login",
      icon: <SubjectOutlined color="secondary" />,
      path: "/login",
    },
    {
      text: "Register",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/signup",
    },
  ];

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
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname === item.path ? classes.active : null
                }
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
