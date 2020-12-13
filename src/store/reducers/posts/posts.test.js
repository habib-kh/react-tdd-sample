const { default: postsReducer } = require('./posts');

describe('posts Reducer', () => {
  it('should return default state', () => {
    const newState = postsReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('should return new State with get action', () => {
    const posts = [{ title: 'post 1' }];
    const newState = postsReducer(undefined, {
      type: 'GET_POSTS',
      payload: posts,
    });
    expect(newState).toEqual({
      posts,
    });
  });
});
