import styled from 'styled-components';

export const Body = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 820px;
  max-width: 100%;
  min-height: 550px;

  div.ant-typography {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
  }

  .sub-title {
    font-size: 12px;
  }

  a {
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
  }

  .ant-btn {
    font-size: 12px;
    padding: 10px 45px;

    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
  }

  .ant-btn .hidden {
    background-color: transparent;
    border-color: #fff;
  }

  form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
  }

  .ant-form-item-control-input-content {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
  }

  .ant-input {
    padding: 5px 15px;
  }

  .ant-input-affix-wrapper {
    padding: 5px 7px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
  }
  .sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .active.sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
  }

  @keyframes move {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }
    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }

  .social-icons {
    margin: 20px 0;
  }
  .toggle.active {
    transform: translateX(50%);
  }

  .social-icons a {
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0px 3px;
    width: 40px;
    height: 40px;
  }
  .toogle-left.active {
    transform: translateX(0);
  }

  .toogle-right.active {
    transform: translateX(200%);
  }
`;
