import styled from 'styled-components';
import { Slider } from 'antd';

export const Price = styled.h4`
  margin: 0;
  text-align: left;
  font-size: 24px;
  color: #2E3438;
`;

export const Currency = styled.span`
  margin-left: 10px;
  font-size: 13px;
`;

export const StyledSlider = styled(Slider)`
  margin-top: 50px;
  
  &:hover .ant-slider-track {
      background-color: #7191A6;
  }

  & .ant-slider-rail {
  }

  & .ant-slider-handle {
    border-color: #85a9c1;
  }

  & .ant-slider-track {
    background-color: #7191A6;

    &:hover {
      background-color: #7191A6;
    }
  }
`;