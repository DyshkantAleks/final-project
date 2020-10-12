import React from "react";
import styled from "styled-components";
import {CatalogSublist} from "./CatalogSublist";
import {CatalogSubitem} from "./CatalogSubitem";
import {CatalogItem} from "./CatalogItem";

export const CatalogList = () => {
    return (

            <List>
                <CatalogItem/>
            </List>

    )
};
// const Container = styled.nav`
// width: 100%;
// `;
const List = styled.ul`
list-style: none;
    padding-left: 0;
    margin: 0;
    width: 100%;
`;

