import styled from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card)`
  margin-bottom: 20px;
  .ant-card-head {
    .ant-card-head-wrapper {
      .ant-card-head-title {
        color: #fff;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .ant-card-body {
    .ant-card-grid {
      padding: 5px 24px;
      min-height: 52px;
      div {
        span {
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #fff;
        }
        p {
          margin: 0 !important;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #fff;
        }
      }
    }
  }
  .item-text {
    text-align: left;
  }
  .item-img {
    display: flex;
    align-items: center;
    .custom-icon {
      font-size: 18px !important;
    }
  }

  .ant-card-head-title {
    color: #fff !important;
  }
`;

export { StyledCard };
