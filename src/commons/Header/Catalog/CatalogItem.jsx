import React, {useState} from "react";
import styled from "styled-components";
import {CatalogSublist} from "./CatalogSublist";

export const CatalogItem = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Item onClick={() => {
                setIsOpen(!isOpen);
            }}>Стулья
                {isOpen && (
                    <CatalogSublist/>

                )}
            </Item>
            <Item>Не стулья</Item>
        </>
    )
};

const Item = styled.li`
font-size: 1.6rem;
font-weight: 500;
line-height: 3.5rem;
border-bottom: 1px solid;

`;

