import styled from 'styled-components';

export const ContainerForm = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  .sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }

  .social-icons {
    margin: 20px 0;
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
  .social-icons a:hover {
    background-color: #ccc;
  }
`;
