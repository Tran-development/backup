import { Layout, Slider } from 'antd';
import { styled } from 'styled-components';

const { Content } = Layout;

export const ContainerContent = styled(Content)`
  max-height: 500px;
`;

export const ContainerSlider = styled.div`
  min-height: 1500px;
  max-height: 1500px;
  .ant-layout-sider
    .ant-layout-sider-light
    .sider-primary
    .ant-layout-sider-primary {
    background: transparent;
    flex: 0 0 250px;

    position: fixed;
    left: 0;
    z-index: 99;
    overflow: auto;
  }
  .ant-layout-sider.sider-primary .ant-layout-sider-children {
    width: auto;
  }

  .ant-menu {
    font-feature-settings: 'tnum', 'tnum';
    font-variant: tabular-nums;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 0;
    text-align: left;
    list-style: none;
    outline: none;
  }

  .ant-layout-sider-children {
    height: 100%;
    margin-top: -0.1px;
    padding-top: 0.1px;
  }

  .ant-layout * {
    box-sizing: border-box;
  }

  .layout-dashboard .ant-layout-sider.sider-primary .ant-menu-inline {
    border: none;
    background: 0 0;
    box-shadow: none;
  }

  .ant-menu-light {
    width: 100%;
  }

  .ant-menu-item a:hover {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
    content: '';
  }
`;

export const ContainerSider = styled.div`
  background-color: #f2f0f5;
  max-height: 630px;
  ul.ant-menu.ant-menu-root.ant-menu-inline.ant-menu-light.menu.css-dev-only-do-not-override-1kuana8 {
    background: #f2f0f5;
    padding: 10px;
  }
  .li .ant-menu-item {
    padding: 30px;
  }
  .anticon .anticon-calendar .ant-menu-item-icon {
    background-color: transparent;
  }
  span.anticon {
    height: 20px;
    padding: 10px 0;
  }
  span.icon {
    padding: 10px;
    margin: 5px 5px 0 0;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
  }

  span.anticon > svg {
    font-size: 22px;
  }
  li.ant-menu-item {
    margin-bottom: 20px;
  }
`;
