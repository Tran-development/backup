import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';


export const SearchIcon = styled(SearchOutlined)`
  &.anticon.anticon-search {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.xl};

   
  }
`
