import { getCookie } from '@/utils/utils';
import { PATH_URL_ROUTER } from '@/constants/constants';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const AdminRoute = () => {
  const token = getCookie('token');
  return token ? <Outlet /> : <Navigate to={PATH_URL_ROUTER.login} />;
};

export default AdminRoute;
