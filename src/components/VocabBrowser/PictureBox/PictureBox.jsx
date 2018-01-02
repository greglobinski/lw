import React from "react";
import injectSheet from "react-jss";

import PictureCredits from "../PictureCredits/";
import SpotArea from "../SpotArea/";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%"
  },
  picture: {
    width: "100%"
  }
});

class PictureBox extends React.Component {
  constructor(props) {
    super(props);
    this.togglePictureCredits = this.togglePictureCredits.bind(this);
    this.state = {
      creditsOpened: false
    };
  }

  getPictureSrc(combo) {
    return `https://d3nstmfkiycslv.cloudfront.net/${combo.picture.arangoKey}_${
      combo.picture.hash
    }_800.jpeg`;
  }

  togglePictureCredits() {
    this.setState(prevState => ({
      creditsOpened: !prevState.creditsOpened
    }));
  }

  render() {
    const combo = this.props.comboQuery.Combo;
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        {combo && (
          <React.Fragment>
            <img
              src={this.getPictureSrc(combo)}
              className={classes.picture}
              alt=""
              onLoad={() => console.log("load")}
            />
            <SpotArea spot={combo.spot} />
            <PictureCredits
              picture={combo.picture}
              creditsOpened={this.state.creditsOpened}
              onClick={this.togglePictureCredits}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default injectSheet(styles)(PictureBox);
