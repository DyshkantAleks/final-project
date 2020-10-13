import React from "react";
import styled from "styled-components";
import {CatalogSubitem} from "./CatalogSubitem";
import {device} from "../../../styles/breakpoints/breakpoints";

export const CatalogSublist = () => {
    return (

                    <SubList>
                        <CatalogSubitem/>
                    </SubList>

    )
};

const SubList = styled.ul`
list-style: none;
    padding-left: 2.5rem;
    margin: 0;
    width: 100%;
    @media ${device.desktop}{
    position: absolute;
    width: 200px;
    padding: 1rem;
    border: 1px solid black;
    }
`;
