import {
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
  MessageOutlined,
} from '@ant-design/icons';
import { PATH_URL_ROUTER } from '@/constants/constants';
import { Avatar, Button, Dropdown, Menu, MenuProps, Modal, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
 
const HeaderComponent = () => {
  const navigator = useNavigate();
 
  const handleNavigate = (key: string) => {
    if (key === 'logout') {
      handleLogout();
    } else {
      navigator(key);
    }
  };
 
  const handleLogout = () => {
    const cookies = Cookies.get();
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    for (const cookie in cookies) {
      Cookies.remove(cookie);
    }
    navigator(PATH_URL_ROUTER.login);
  };
  const items: MenuProps['items'] = [
    {
      label: 'Infomaiton account',
      icon: <UserOutlined />,
      key: 'informationaccount',
    },
    {
      label: 'Change password',
      icon: <UserOutlined />,
      key: 'changepassword',
    },
    {
      label: ' Logout',
      icon: <LogoutOutlined />,
      key: 'logout',
    },
    {
      label: 'Messenger',
      icon: <MessageOutlined />,
      key: 'messenger',
    },
  ];
  return (
    <>
      <Header className='header-layout'>
        <h1>ADMIN SITE</h1>
 
        <div style={{ display: 'flex' }}>
          <Dropdown
            overlay={
              <Menu
                onClick={({ key }) => {
                  handleNavigate(key);
                }}
                selectable
                items={items}
              />
            }
            trigger={['click']}
            arrow
          >
            <Button className='btn-account'>
              <Space style={{ columnGap: 30 }}>
                <Avatar
                  style={{ marginLeft: 0 }}
                  src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=1'
                />
                ADMIN
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};
 
export default HeaderComponent;
