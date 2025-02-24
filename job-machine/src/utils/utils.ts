import { axiosApi } from '@/interfaces/index';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

export const getTokenAsync = async () => {
  try {
    const token = await getCookie('token');

    if (token) {
      return token;
    } else {
      throw new Error('Token not found');
    }
  } catch (error) {
    handleErrorShow(error);
  }
};

export const getCookie = (str: string) => {
  switch (str) {
    case 'roles':
      return JSON.parse(Cookies.get('roles') || '[]');
    case 'token':
      return Cookies.get('token');
    case 'refreshToken':
      return Cookies.get('refreshToken');
    default:
      throw new Error('Not Found Cookies');
  }
};

export const handleSuccess = (response: AxiosResponse<axiosApi>) => {
  const { data } = response;

  const status = data.status;
  const message = data.message;

  return { status, message };
};

export const handleError = (error: any) => {
  if (typeof error.message === 'object' && error?.message) {
    const { message } = error;
    return { message };
  }

  const { response } = error;

  if (response?.data) {
    const { data } = response;
    const { message, status } = data;

    if (typeof data === 'object' && data !== null) {
      const { errors } = data;

      if (Array.isArray(errors)) {
        if (errors?.length > 0) {
          const { error } = errors[0];
          return { status, message, error };
        }
      } else if (typeof errors === 'object' && errors !== null) {
        const { error } = errors;
        return { status, message, error };
      } else if (typeof errors === 'string') {
        return { status: status, message: errors, error: null };
      }
    }
  }

  return { status: '', message: '', error: null };
};

export const handleErrorShow = (error: any) => {
  const { message, error: errorDetails }: any = handleError(error);
  let errorMessage = '';

  if (message) {
    errorMessage += message;
  }

  if (errorDetails) {
    if (errorMessage) {
      errorMessage += ' - ';
    }
    errorMessage += errorDetails;
  }
};

export const handleSuccessShow = (response: AxiosResponse<axiosApi>) => {
  const { message } = handleSuccess(response);
};
