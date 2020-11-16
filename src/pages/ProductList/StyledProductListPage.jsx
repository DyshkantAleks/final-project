import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { Checkbox } from 'antd';

export const Content = styled.main`
display: grid;
grid-template-columns: 15% auto;
@media (max-width: 1200px) {
  grid-template-columns: auto;
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
     @media ${device.tabletM} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    };
    @media ${device.tabletL} {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* grid-auto-flow: row dense; */
        align-items: baseline;
    };
    @media ${device.desktop} {
        gap: 2rem;
    }; 
`;
