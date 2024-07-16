import { Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppstoreOutlined,
  HomeOutlined,
  SelectOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import Slider from 'antd/es/layout/Sider';
import { ContainerSider } from './Content.styled';
import { PATH_URL_ROUTER } from '@/constants/constants';
 
const SliderComponent = () => {
  const navigator = useNavigate();
  const { pathname } = useLocation();
  const page = pathname.replace('/', '');
 
  const getMenuStyle = (key: string) => {
    return page === key
      ? {
          background: 'linear-gradient(180deg, #C5091F 0%, #870413 100%',
          color: '#fff',
        }
      : {};
  };
 
  return (
    <ContainerSider>
      <Slider
        style={{ marginTop: 13 }}
        breakpoint='lg'
        collapsedWidth={70}
        trigger={null}
        theme='light'
        width={'200px'}
      >
        <div className='demo-logo-vertical' />
        <Menu
          className='menu'
          onClick={({ key }) => {
            navigator(key);
          }}
          theme='light'
          mode='inline'
        >
          <Menu.Item
            key={PATH_URL_ROUTER.home}
            style={page === '' ? { background: '#fff', color: 'black' } : {}}
          >
            <span className='icon' style={getMenuStyle('')}>
              {<AppstoreOutlined />}
            </span>
            <span>DashBoard</span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.category}
            style={
              page === 'category' ? { background: '#fff', color: 'black' } : {}
            }
          >
            <span className='icon' style={getMenuStyle('category')}>
              {<CalendarOutlined />}
            </span>
            <span className='label'>Category</span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.post}
            style={
              page === 'post' ? { background: '#fff', color: 'black' } : {}
            }
          >
            <span className='icon' style={getMenuStyle('post')}>
              {<HomeOutlined />}
            </span>
            <span className='label'>Post</span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.historyVideo}
            style={
              page === 'video-history'
                ? { background: '#fff', color: 'black' }
                : {}
            }
          >
            <span className='icon' style={getMenuStyle('video-history')}>
              {<UserOutlined />}
            </span>
            <span className='label'>History Video</span>
          </Menu.Item>
          <Menu.Item
            key={PATH_URL_ROUTER.historyVideo}
            style={
              page === 'history-video-delete'
                ? { background: '#fff', color: 'black' }
                : {}
            }
          >
            <span className='icon' style={getMenuStyle('history-video-delete')}>
              {<SelectOutlined />}
            </span>
            <span className='label'>History Delete Video</span>
          </Menu.Item>
        </Menu>
      </Slider>
    </ContainerSider>
  );
};
 
export default SliderComponent;
