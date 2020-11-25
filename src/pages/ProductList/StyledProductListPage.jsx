import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { Checkbox } from 'antd';

export const Content = styled.main`
  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 23% auto;
}
`;

export const Wrapper = styled.div`
  margin: 1rem;

  .bm-icon {
    font-size: 2rem;
  }

  .bm-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
  }

  .bm-burger-button {
    position: static;
    margin-left: 5rem;
    & button {
      outline: none;
      border: none;
    }
  }

  &:first-child {
    .ant-slider {
      margin-top: 25px;
    }
  }

  .ant-collapse-content-box h4 {
    height: 0;
  }
`;

export const FiltersWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
  @media ${device.desktop} {
    display: block;
  }; 
`;

export const Title = styled.h1`
font-size: 3rem;
`;

export const FilterName = styled.h3`
font-size: 2.4rem;
text-align: left;
`;

export const StyledCheckboxGroupe = styled(Checkbox.Group)`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const ProductList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  @media ${device.tabletS} {
    display: grid;
    grid-template-columns: repeat(2, 49%);
    justify-items: center;
    gap: 1rem;
  };
  @media ${device.tabletM}{
    grid-template-columns: repeat(3, 22rem);
    gap: 2rem;
  };
  @media ${device.tabletL}{
    grid-template-columns: repeat(3, 29rem);
  };
  @media ${device.desktop}{
    align-items: baseline;
  }; 
`;
