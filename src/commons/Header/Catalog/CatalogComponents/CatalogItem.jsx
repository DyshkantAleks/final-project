import React, {useState} from 'react';

import {CatalogSublist} from "./CatalogSublist";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import {CatalogIcons} from "../CatalogIcons";
import {NewItem, IconContainer, ItemText} from "../StyledCatalog";
import styled from "styled-components";
import {device} from "../../../../styles/breakpoints/breakpoints";


export const CatalogItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const {width} = useWindowDimensions();


  return (
    <>
      <NewItem>
        <TextContainer>
          <IconContainer>
            {CatalogIcons.chair}
          </IconContainer>
          <ItemText>Chair</ItemText>
        </TextContainer>
      </NewItem>
      <NewItem>
        <TextContainer>
          <IconContainer>
            {CatalogIcons.table}
          </IconContainer>
          <ItemText>Tables</ItemText>
        </TextContainer>
      </NewItem>
      <NewItem>
        <TextContainer>
          <IconContainer>
            {CatalogIcons.sofa}
          </IconContainer>
          <ItemText>Sofas</ItemText>
        </TextContainer>
      </NewItem>
      <NewItem>
        <TextContainer>
          <IconContainer>
            {CatalogIcons.storage}
          </IconContainer>
          <ItemText>Storage</ItemText>
        </TextContainer>
      </NewItem>
      <NewItem>
        <TextContainer>
          <IconContainer>
            {CatalogIcons.accessories}
          </IconContainer>
          <ItemText>Accessories</ItemText>
        </TextContainer>
      </NewItem>
      {width < 1200 && (
        <NewItem>
          <TextContainer onClick={() => {
            setIsOpen(!isOpen);
          }}>
            <IconContainer>
              {CatalogIcons.accessories}
            </IconContainer>
            <ItemText>Accessories</ItemText>
          </TextContainer>
          {isOpen && (
            <CatalogSublist/>
          )}
        </NewItem>
      )}
      {width >= 1200 && (
        <NewItem onMouseEnter={() => {
          setHover(true)
        }}
                 onMouseLeave={() => {
                   setHover(false)
                 }}>
          <TextContainer>
            <IconContainer>
              {CatalogIcons.accessories}
            </IconContainer>
            <ItemText>Accessories</ItemText>
          </TextContainer>
          {hover && (
            <CatalogSublist/>
          )}
        </NewItem>
      )}
    </>
  )
};

export const TextContainer = styled.div`
padding: 1rem 0;
border-bottom: .1rem solid #aecfd9;
@media ${device.desktop}{
padding: 1rem 4rem;
//position: relative;
border-bottom: none;
}
`




