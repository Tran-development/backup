import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
:root {
    /* color */
    --text-color: #fff;
    --text-color-dark: #050505;
    --border-color: #949499;
    --primary-color: #C5091F;
    --secondary-color: #870413;
    --container-color: #f0f1f1;
    --container-color-white: #fff;
    --hover-primary-color: #FF0000 ;
    --hover-secondary-color: #F89D13;
    --button-primary-color: #b71c1c;
    --button-secondary-color: #FFBC65;
    --text-color-btn: #4096ff;
  
    
    /* font size */
    --fs-title: 16px;
    --fs-heading: 24px;
    --fs-sub-title: 15px;
    --fs-text: 15px;
  
  }

  .ant-card-body {
    padding: 0 !important;
  }

  .YELtF :where(.css-dev-only-do-not-override-1kuana8).ant-card .ant-card-body {
    padding: 0 !important;
  }

  .middle-container-row {
    width: 70%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .icon-layout {
      padding-left: 3px
    }

    .input-search {
      max-width: 80%;
      margin-left: 38px;
    }

    .btn-find {
      margin-left: -1px;
    }

    .search-date {
      margin-left: -80px;
      width: 142%;
    }
  }

  .pagination {
    display: flex;
    margin-bottom: 24px
  }
`;
