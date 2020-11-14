import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints/breakpoints'

export const List = styled.ul`
    
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding-left: 3.2rem;
    
    
    @media ${device.desktop}{
    flex-direction: row;
    flex-basis: 40%;
    padding-left: 0;
    margin-bottom: 0;
    }
`

export const Item = styled.li`
    text-align: left;
    font-size: 1.4rem;
    line-height: 2.5rem;
        @media ${device.tabletL}{
          font-size: 1.6rem;
          }
        @media ${device.desktop}{
          text-align: center;
          font-size: 1.8rem;
          margin: 0 1.5rem
          }
      a {
        color: #333333;
        text-decoration: none;
        display: block;
          }
`
