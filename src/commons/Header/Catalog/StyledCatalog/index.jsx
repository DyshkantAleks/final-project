import styled from 'styled-components';
import { device } from '../../../../styles/breakpoints/breakpoints';
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
  @media ${device.desktop}{
    background-color: #e6e9ef;
  };
`;

export const List = styled.ul`
list-style: none;
padding-left: 0;
margin: 0;
width: 100%;
  @media ${device.desktop}{
    display: flex;
    width: fit-content;
    margin: 0 auto;
  };
`;

export const NewItem = styled.li`
cursor: pointer;
text-align: left;
  @media ${device.desktop}{
    position: relative;
    border-bottom: none;
    border:1px solid transparent;
      &:hover {
        background-color: #aecfd9;
        transition: all .5s;
      };
  };
`;

export const IconContainer = styled.div`
width: 25px;
height: 25px;
margin-right: 10px;
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
  @media ${device.desktop}{
    width: 30px;
    height: 30px;
  };
`;

export const ItemText = styled.span`
font-size: 16px;
vertical-align: middle;
`;

export const SubItem = styled.li`
font-size: 1.6rem;
line-height: 3.5rem;
font-weight: normal;
padding-left: 4.5rem;
border-bottom: .1rem solid #aecfd9;
border-right: .1rem solid #aecfd9;
border-left: .1rem solid #aecfd9;
  @media ${device.desktop}{
    padding-left: 1rem;
      &:hover {
        background-color: #aecfd9;
      }
  }
`;

export const SubList = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 100%;
  @media ${device.desktop}{
    position: absolute;
    top:5rem;
    left: -.1rem;
    width: 25rem;
    padding: 0;
    text-align: left;
    z-index: 1000;
    background-color: white;
  };
`;

export const ItemContainer = styled.div`
border-bottom: .1rem solid #aecfd9;
display: flex;
align-items: center;
padding: 1rem;
  @media ${device.desktop}{
    padding: 1rem 4rem;
    border-bottom: none;
  };
`;

export const ImageIcon = styled.img`
width: 100%;
height: auto;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: initial;
`;

export const StyledLinkMainCategory = styled(Link)`
text-decoration: none;
color: initial;
flex-basis: 60%;
`;

export const TextContainer = styled.div`
display: flex;
`;

export const ArrowContainer = styled.div`
display: flex;
justify-content: flex-end;
flex-basis: 40%;
`;

export const Arrow = styled.img`
width: 1.5rem;
`;