import axios from "axios";
//action types
const SET_SINGLE_STORY = "SET_SINGLE_STORY";

//action creators
export const setSingleStory = (story) => {
  return {
    type: SET_SINGLE_STORY,
    story,
  };
};

//thunk
export const fetchSingleStory = (storyId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/stories/${storyId}`);
      dispatch(setSingleStory(data));
    } catch (error) {
      console.log(error);
    }
  };
};

//initial state
const initialState = {};
//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_STORY:
      return action.story;
    default:
      return state;
  }
};
