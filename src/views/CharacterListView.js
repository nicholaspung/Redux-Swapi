import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getStarwarsChar } from '../actions';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getStarwarsChar();
    // call our action
  }

  render() {
    console.log(this.props.characters)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
        <div>We be loading</div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.isFetching
  }
}

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getStarwarsChar
  }
)(CharacterListView);
