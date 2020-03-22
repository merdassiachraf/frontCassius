import { posts } from "./PostsData";

const initialState = {
  posts
};

export const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADDPOSTS":
      return { ...state };
    case "DELETEPOST":
      return { ...state };
    case "EDITPOST":
      return { ...state };
    case "FILTREPOST":
      return { ...state, search: payload };
    default:
      return state;
  }
};
