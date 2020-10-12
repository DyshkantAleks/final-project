import React from "react";
import styled from "styled-components";
import {CatalogSubitem} from "./CatalogSubitem";

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

`;
