import { Carousel } from 'antd';
import { styled } from 'styled-components';

export const StyledCarousel = styled(Carousel)`
  .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: red;
    overflow: hidden;
  }

  .slick-slide img {
    width: 100%;
  }
`;
