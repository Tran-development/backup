import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCookie } from '@/utils/utils';
import { PATH_URL_ROUTER } from '@/constants/constants';

const NotAuth = () => {
  const token = getCookie('token');
  const refreshToken = getCookie('refreshToken');

  const navigate = useNavigate();
  useEffect(() => {
    if (!(token && refreshToken)) {
      navigate(PATH_URL_ROUTER.login);
    }
  }, []);
  return <Outlet />;
};

export default NotAuth;
