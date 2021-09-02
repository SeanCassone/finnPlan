import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 700,
    marginTop: 20,
    margin: "auto",
    flexDirection: "column",
  },
  media: {
    height: 50,
    // width: 350,
    paddingTop: "56.25%", // 16:9
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardstyle: {
    margin: "auto",
    flexDirection: "column",
  },
  centertext: {
    textAlign: "center",
  },
}));
