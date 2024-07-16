import { styled } from 'styled-components';

export const ContainerCategory = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 20px;
  h1 {
    margin-left: 35px;
    text-align: left;
  }
  .category-add {
    width: 500px;
  }
  .category-add h2 {
    font-size: 22px;
  }
  .category-add > * {
    font-size: 18px;
  }
  .category-management {
    width: 850px;
  }
  .ant-table-cell span {
    display: flex;
  }
  .ant-form .ant-flex .ant-form-item {
    width: 80%;
  }
`;
