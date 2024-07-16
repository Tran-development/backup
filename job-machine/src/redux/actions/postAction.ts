import { PostActionTypes } from '@/interfaces';
import { InforPost, FormFilterPost } from '@/interfaces/interfaces';

export const getAllPostRequest = (post: InforPost) => ({
  type: PostActionTypes.FETCH_POSTS_REQUEST,
  payload: post
});
