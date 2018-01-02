import React from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Color from "color";

import SquareButton from "../../Common/SquareButton";
import InfoOutline from "material-ui-icons/InfoOutline";

const styles = theme => ({
  root: {
    background: theme.palette.background.blue,
    position: "absolute",
    left: 0,
    "&:hover": {
      background: Color(theme.palette.background.blue)
        .darken(0.1)
        .string()
    }
  }
});

const InfoLink = props => {
  const { classes, onClick } = props;

  return (
    <SquareButton
      to="/info"
      component={Link}
      classes={{ root: classes.root }}
      onClick={onClick}
    >
      <InfoOutline />
    </SquareButton>
  );
};

export default withStyles(styles)(InfoLink);
