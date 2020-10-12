import React from "react";
import styled from "styled-components";

export const CatalogSubitem = () => {
    return (
        <>
            <SubItem>Офисные</SubItem>
            <SubItem>Не офисные</SubItem>
        </>

    )
};

const SubItem = styled.li`
font-size: 1.6rem;
line-height: 3.5rem;
font-weight: normal;

`