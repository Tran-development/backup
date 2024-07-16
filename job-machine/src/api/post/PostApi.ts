import { IQuery, InforPost } from '@/interfaces/interfaces';
import { httpApi } from '@/service/customize_axios';
import { PATH_URL_POST_API } from '@/constants/constants';

export const PostApi = {
  apiAllPost: (query: IQuery): any => {
    const params = {
      Page: query.page || 1,
      Limit: query.limit || 8,
      status_filter: 'not_yet_approved'
    };
    if (query.title) {
      params['search_term'] = query.title;
    }
    if (query.page === undefined && query.limit === undefined) {
      params['search_term'] = query.title;
    }
    if (query.start_date) {
      params['start_date'] = query.start_date;
    }
    if (query.end_date) {
      params['end_date'] = query.end_date;
    }
    return httpApi.get(PATH_URL_POST_API.allpost, {
      params: params
    });
  },

  apiActive: (id: number): Promise<InforPost> => {
    return httpApi.put(`${PATH_URL_POST_API.active}/${id}`);
  },

  apiDelete: (id: number): Promise<InforPost> => {
    return httpApi.delete(`${PATH_URL_POST_API.delete}/${id}`);
  }
};
