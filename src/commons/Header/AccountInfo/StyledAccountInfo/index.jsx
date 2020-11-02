import styled from 'styled-components'
import { device } from '../../../../styles/breakpoints/breakpoints'

export const AccountName = styled.p`
margin: 0;
text-decoration: none;
color: initial;
`

    export const Item = styled.div`
width: 2rem;
//color: #595959;
margin: 0 .5rem;
@media ${device.tabletM}{
        width: 2.5rem;
        //height: 2.5rem;
        margin: 0 1rem;
        }
        @media ${device.tabletL}{
        width: 3rem;
        //height: 3rem;
        margin: 0 1rem;
}
`

export const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    //flex-basis: 40%;
    //order: 0;
    @media ${device.desktop}{
    
    }
`
