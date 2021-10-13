import React from "react";
import { connect } from "react-redux";
import { fetchSingleStory } from "../store/singleStory";
import StoriesList from "./StoriesList";

class SingleStory extends React.Component {
  componentDidMount() {
    this.props.loadSingleStory(this.props.match.params.storyId);
  }

  render() {
    const story = this.props.story;
    const content = story.content || ""; // default to empty string
    const comments = story.comments || []; // default to empty array

    if (!comments.length) {
      return <div>loading</div>;
    } else {
      return (
        <div id='single-story' className='column'>
          <h1>{story.title}</h1>
          <p>{content}</p>
          <h3>Responses:</h3>
          <div id='comments'>
            <div className='comment row'>
              {comments.map((comment) => {
            <img src={comment.author.imageUrl} />
              <div className='column'>
                <a>
                  <h5>{comment.author.name}</h5>
                </a>
                <div>{comment.content}</div>
              </div>


              })}
  }
}

const mapStateToprops = (state) => {
  console.log(state);
  return { story: state.singleStory };
};

const mapDispatchToProps = (dispatch) => {
  return { loadSingleStory: (storyId) => dispatch(fetchSingleStory(storyId)) };
};

export default connect(mapStateToprops, mapDispatchToProps)(SingleStory);

/* <h1>{story.title}</h1>
          <p>{content}</p>
          <h3>Responses:</h3>
          <div id='comments'>
            <div className='comment row'>
              <img src={comment.author.imageUrl} />
              <div className='column'>
                <a>
                  <h5>{comment.author.name}</h5>
                </a>
                <div>{comment.content}</div>
              </div>
            </div>
            <div className='comment row'>
              <img src={comment.author.imageUrl} />
              <div className='column'>
                <a>
                  <h5>{comment.author.name}</h5>
                </a>
                <div>{comment.content}</div>
              </div>
            </div>
          </div> */
