import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { Checkbox } from 'antd';

export const Content = styled.main`
display: grid;
grid-template-columns: 15% auto;
`;

export const Wrapper = styled.div`
  margin: 1rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const FilterName = styled.h3`
  font-size: 2.4rem;
  text-align: left;
`;

export const StyledChCheckboxGroupe = styled(Checkbox.Group)`
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
