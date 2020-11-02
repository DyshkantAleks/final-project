import styled from 'styled-components';

export const StyledButton = styled.button`
border: .1rem solid #7191A6;
color: ${props => props.color ? '#fff' : '#7191A6'};
background-color: ${props => props.color ? '#7191A6' : '#fff'};
width: ${props => props.width ? '12rem' : '20rem'};
padding: 10px 20px;
border-radius: 5px;
font-weight: bold;
transition: all .3s linear;
  &:hover{
    cursor: pointer;
    color: ${props => props.color ? '#7191A6' : '#fff'};
    background-color: ${props => props.color ? '#fff' : '#7191A6'};
    border: 1px solid #7191A6;
};
  &:focus{
    outline: none;
};
  &:disabled{
    background-color:#e6e9ef;
    color: #6F7281;
    border: 1px solid #e6e9ef;
    cursor: default;
        &:hover{
            color: #6F7281;
        }
  }
`;