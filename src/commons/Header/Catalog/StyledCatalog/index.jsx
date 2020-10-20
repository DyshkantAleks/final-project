import styled from 'styled-components';
import {device} from '../../../../styles/breakpoints/breakpoints';

export const Container = styled.div`
width: 100%;
@media ${device.desktop}{
    background-color: #e6e9ef;
    }
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
    //padding: 1rem 0;
    }
`;

export const NewItem = styled.li`
//display: flex;
//align-items: center;
cursor: pointer;
border-bottom: .1rem solid #aecfd9;
padding: 1rem 0;
text-align: left;
@media ${device.desktop}{
position: relative;
//margin: 0 40px;
padding: 1rem 4rem;
border-bottom: none;
border:1px solid transparent;
&:hover {
background-color: #aecfd9;
//border:1px solid #aecfd9;
transition: all .5s;
}
}
`;

export const IconContainer = styled.div`
width: 20px;
margin-right: 10px;
display: inline-block;
vertical-align: middle;
`;
export const ItemText = styled.span`
font-size: 16px;
vertical-align: middle;

`;
// export const Item = styled.li`
// font-size: 1.6rem;
// font-weight: 500;
// line-height: 3.5rem;
// border-bottom: 1px solid;
// text-align: left;
//
// @media ${device.desktop}{
// position: relative;
// border-bottom: 0;
// margin: 0 5rem;
// text-align: center;
// }
// `;

export const SubItem = styled.li`
font-size: 1.6rem;
line-height: 3.5rem;
font-weight: normal;
padding-left: 4.5rem;
&:not(:last-child) {

border-bottom: .1rem solid #aecfd9;
}
//background-color: #e6e9ef;
@media ${device.desktop}{
padding-left: 1rem;
&:hover {
background-color: #aecfd9;
}

}

`;
export const SubList = styled.ul`
list-style: none;
    padding: 1rem 0 0 0;
    margin: 0;
    width: 100%;
    @media ${device.desktop}{
    position: absolute;
    top:4.4rem;
    left: -.1rem;
    width: 25rem;
    padding: 0;
    border: .1rem solid #aecfd9;
    text-align: left;
    z-index: 1000;
    background-color: white;
    
    }
`;