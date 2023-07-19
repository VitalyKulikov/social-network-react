import profileReducer, {
  addPostActionCreator,
} from './profile-reducer';

it('add post', function () {
  let action = addPostActionCreator('Click');
  let state = {
    postsData: [
      {id: 1, message: `How are you?`, like: 15},
      {id: 2, message: `It's my first post!`, like: 20},
    ],
  };
  let newState = profileReducer(state, action);
  // eslint-disable-next-line no-undef
  expect(newState.postsData.length).toBe(5);
});