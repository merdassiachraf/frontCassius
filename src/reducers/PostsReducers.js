import { Posts } from "../data/Posts"

export default function Posts (state = Posts, action) {
    switch (action.type) {
      case 'ADD_POSTS':
        return state.concat([action.text])
      default:
        return state
    }
  }