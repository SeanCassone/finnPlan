import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import finnPlan from "../../images/FinnPlan.svg";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";
const LandingPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <CardMedia
          className={classes.media}
          image={finnPlan}
          title="Finn Plan"
        />
        <Typography
          className={classes.centertext}
          variant="body1"
          color="textPrimary"
          component="p"
        >
          This app will guide young adults on the right track to prepare for and
          make informed decisions about their finances.
        </Typography>
        <Typography
          className={classes.centertext}
          variant="body2"
          color="textPrimary"
          component="p"
        >
          Would you please play our interactive game where you can make
          different choices that will affect your financial stability throughout
          life? You can watch your net worth, and credit score either increase
          or decrease based on the life decisions you make. The goal of this
          game is to help you prepare for your future.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
