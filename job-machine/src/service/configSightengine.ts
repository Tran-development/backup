import { AxiosRequestConfig } from 'axios';
import { SIGHTENGINE } from '@/constants/constants';
 
export const config = (urlApi: string, urlImg: string): AxiosRequestConfig => {
  return {
    method: 'get',
    url: urlApi,
    params: {
      url: urlImg,
      workflow: SIGHTENGINE.workflow,
      api_user: SIGHTENGINE.api_user,
      api_secret: SIGHTENGINE.api_secret,
    },
  };
};