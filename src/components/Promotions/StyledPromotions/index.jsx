import styled from "styled-components";
import {device} from "../../../styles/breakpoints/breakpoints";

export const List = styled.div`
     display: grid;
    grid-template-columns: 1fr;
    gap: 3rem 2rem;
   
@media ${device.tabletM} {
 grid-template-columns: 1fr 1fr;
}

`;