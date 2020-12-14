import axios from 'axios';

export const fetchPosts = async (dispatch) => {
  await axios
    .get('http://jsonplaceholder.typicode.com/?posts_limit=10')
    .then((res) => {
      dispatch({
        type: 'GET_POSTS',
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
