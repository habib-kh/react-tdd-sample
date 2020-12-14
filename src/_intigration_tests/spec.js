import moxios, { requests } from 'moxios';
import { fetchPosts } from '../store/actions';
import testStore from '../utils';
describe('fetch post Actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('should update state correctly', () => {
    const epxectedState = {
      posts: [{ title: 'post1' }],
    };
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: epxectedState,
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState).toEqual(epxectedState);
    });
  });
});
