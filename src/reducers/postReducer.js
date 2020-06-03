import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  GET_POST,
  EDIT_POST,
  GET_USER_POSTS,
  GET_AGENCY_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
  agency_posts: [],
  my_posts: [],
  post: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case EDIT_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case GET_USER_POSTS:
      return {
        ...state,
        my_posts: action.payload,
        loading: false,
      };
    case GET_AGENCY_POSTS:
      return {
        ...state,
        agency_posts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
