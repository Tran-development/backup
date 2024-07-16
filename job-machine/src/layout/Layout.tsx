import { Outlet, useMatch, useMatches } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderComponent from './Header';
import SliderComponent from './Slider';
import './Layout.css';
import { ContainerContent } from './Content.styled';

const LayoutApp = () => {
  const match = useMatch('/:childPath/*');
  const childPath = match?.params.childPath ?? '/';

  return (
    <Layout style={{ background: '#fafafa' }}>
      <HeaderComponent />
      <Layout>
        <SliderComponent />
        <ContainerContent className="content">
          <Outlet />
        </ContainerContent>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;
