import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';
import { Pagination } from 'antd';

export const StyledChackboxName = styled.span`
  padding-left: 1rem;
`
export const StyledLabel = styled.label`
  padding: 0.7rem 0;
  display: flex;
  align-items: center;

  & input {
    display: none;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid #A0A9AF;
    border-radius: 15%;
  }

  &:hover .checkbox {
    border: 1px solid #7191A6;
  }

  & input[type='checkbox']:checked + .checkbox {
    border: 1px solid #7191A6;
  }

  & input[type='checkbox']:checked + .checkbox::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 15%;
    background: #7191A6;
  }
`
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

export const StyledCheckboxGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 1rem;
`;

export const ProductList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  @media ${device.tabletM}{
    display: grid;
    grid-template-columns: repeat(3, 22rem);
    justify-items: center;
    gap: 2rem;
  };
  @media ${device.tabletL}{
    grid-template-columns: repeat(3, 29rem);
  };
  @media ${device.desktop}{
    align-items: baseline;
  }; 
`;

export const StyledPagination = styled(Pagination)`
margin-top: 2rem;
text-align: center;

.ant-pagination-next:hover,
.ant-pagination-prev:hover {
  .ant-pagination-item-link {
    border-color: #7191a6;
    color: #7191a6;
  }
}

.ant-pagination-item:hover {
  border-color: #7191a6;
}

.ant-pagination-jump-next-custom-icon:hover,
.ant-pagination-jump-prev-custom-icon:hover {
  .ant-pagination-item-link-icon {
    color: #7191a6;
  }
}

.ant-pagination-item-active {
  border-color: #7191a6;

  a {
    color: #7191a6;
  }
}
`;