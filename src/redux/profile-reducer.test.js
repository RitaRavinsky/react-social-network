import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi guys!", likeCount: 18 },
    { id: 2, message: "Fisrt Post Ever!", likeCount: 33 },
  ],
};

it("new post length should increment", () => {
  // 1. test data
  let action = addPostActionCreator("Hello World");

  // 2. perform action
  let newState = profileReducer(state, action);
  // 3. check expectation
  expect(newState.posts.length).toBe(3);
});

it("new post message should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("Hello World");

  // 2. perform action
  let newState = profileReducer(state, action);
  // 3. check expectation
  expect(newState.posts[2].message).toBe("Hello World");
});

it("new post likeCount should be 0", () => {
  // 1. test data
  let action = addPostActionCreator("Hello World");

  // 2. perform action
  let newState = profileReducer(state, action);
  // 3. check expectation
  expect(newState.posts[2].likeCount).toBe(0);
});

it("after deleting length of posts should decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. perform action
  let newState = profileReducer(state, action);
  // 3. check expectation
  expect(newState.posts.length).toBe(1);
});

it("after deleting post with incorect id length of posts shouldn't decrement", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. perform action
  let newState = profileReducer(state, action);
  // 3. check expectation
  expect(newState.posts.length).toBe(2);
});
