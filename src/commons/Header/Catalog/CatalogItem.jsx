import React, {useState} from "react";
import styled from "styled-components";
import {CatalogSublist} from "./CatalogSublist";
import {device} from "../../../styles/breakpoints/breakpoints";

export const CatalogItem = () => {
    //const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    return (
        <>
            {/*<Item onClick={() => {*/}
            {/*    setIsOpen(!isOpen);*/}
            {/*}}>Стулья*/}
            {/*    {isOpen && (*/}
            {/*        <CatalogSublist/>*/}

            {/*    )}*/}
            {/*</Item>*/}
            <Item onMouseEnter={() => {setHover(true)}}
                  onMouseLeave={() => {setHover(false)}}
            >
                Не стулья
                {hover && (
                <CatalogSublist/>

                )}
            </Item>
            <Item>Столы</Item>
            <Item>Не столы</Item>
            <Item>Диваны</Item>
        </>
    )
};

const Item = styled.li`
font-size: 1.6rem;
font-weight: 500;
line-height: 3.5rem;
border-bottom: 1px solid;
text-align: left;

@media ${device.desktop}{
position: relative;
border-bottom: 0;
margin: 0 5rem;
text-align: center;



}
`;

