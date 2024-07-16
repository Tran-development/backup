import { RouterProvider } from 'react-router-dom';
import { router } from './routers/route';
import { GlobalStyle } from '@/style/RootStyle.styled';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
