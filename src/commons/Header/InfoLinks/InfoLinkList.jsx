import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {ROUTES} from "../../../pages/navigation/routes";
import {device} from "../../../styles/breakpoints/breakpoints";

export const InfoLinks = () => {
    return (
        <List>
            <Item>
                <Link to={ROUTES.STORES}>Наши магазины</Link>
            </Item>
            <Item>
                <Link to={ROUTES.PROMOTIONS}>Акции</Link>
            </Item>
            <Item>
                <Link to={ROUTES.ABOUT}>О нас</Link>
            </Item>

        </List>
    )
};

const List = styled.ul`
    
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    
    @media ${device.desktop}{
    flex-direction: row;
    flex-basis: 40%;
    }
`;

const Item = styled.li`
    text-align: left;
    font-size: 1.4rem;
    line-height: 2.5rem;
        @media ${device.tabletL}{
          font-size: 1.6rem;
          }
        @media ${device.desktop}{
          //margin: 0 15px;
          text-align: center;
          font-size: 1.8rem;
          margin: 0 1.5rem
          }
      a {
        color: black;
        text-decoration: none;
        display: block;
          }
          
          

`