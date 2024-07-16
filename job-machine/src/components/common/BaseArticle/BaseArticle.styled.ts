import styled from 'styled-components';
import { Typography } from 'antd';

export const Header = styled.div`
  left: 0;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-bottom: -10px;
`;

export const AuthorWrapper = styled.div`
  left: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 21.25rem;
  position: relative;
  border-radius: 2px;
  transition: 0.3s;
  overflow: visible;
`;

export const Author = styled.div`
  font-size: var(--fs-title);
  font-weight: 500;
  color: var(--text-color-dark);
  line-height: 1.5625rem;
  width: 200px;
`;

export const InfoWrapper = styled.div`
  @media only screen and (min-width: 1200px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 1536px) {
    padding: 1.85rem;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    margin-bottom: 0.625rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: var(--fs-title);
  font-weight: 500;
  width: 100%;
  line-height: 1.375rem;
  color: var(--text-color-dark);
  margin-top: -30px;
`;

export const DateTime = styled(Typography.Text)`
  font-size: 14px;
  color: #ccc;
  line-height: 1.25rem;
  margintop: 3rem;
  padding-top: 0.5rem;
`;

export const Description = styled.div`
  font-size: var(--fs-text);
  margin-top: -20px;
  text-align: justify;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
