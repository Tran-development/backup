import axios from 'axios';
import { URL_IMG_API_SIGHTENGINE } from '@/constants/constants';
import { config } from '@/service/configSightengine';

export const SightengineApi = {
  getImg: (values: any): Promise<any> => {
    const valuesConfig = config(URL_IMG_API_SIGHTENGINE, values);
    return axios(valuesConfig);
  }
};
