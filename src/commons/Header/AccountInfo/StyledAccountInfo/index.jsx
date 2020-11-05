import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints/breakpoints'

export const AccountName = styled.p`
font-size: 1.2rem;
position: absolute;
width: 15rem;
text-align: center;
left: 5rem;
margin: 0;
text-decoration: none;
color: initial;
transform: translate(-75%);

`

export const Item = styled.div`
position:relative;
width: 2rem;
height: 2rem;
//color: #595959;
margin: 0 .5rem;
@media ${device.tabletM}{
        width: 2.5rem;
        height: 2.5rem;
        margin: 0 1rem;
        }
        @media ${device.tabletL}{
        //width: 3rem;
        //height: 3rem;
        //margin: 0 1rem;
}
`

export const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    //flex-basis: 40%;
    //order: 0;
    @media ${device.desktop}{
    margin-bottom: 0;
    }
`;
export const CartCounter = styled.div`
  position:absolute;  
  top:-0.5rem;
  right:-0.5rem;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: #7191A6;
  color: #ffffff;
  font-weight: bold; 
  display: flex;
  align-items: center;
  justify-content: center;
`
