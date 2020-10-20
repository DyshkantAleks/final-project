import React, {useState} from 'react';

import {CatalogSublist} from './CatalogSublist';
// import {Item} from "../StyledCatalog";
// import {CatalogList} from '../CatalogList';
import useWindowDimensions from '../../../../utils/useWindowDimensions';
import {CatalogIcons} from '../CatalogIcons';
// import styled from 'styled-components';
// import {device} from '../../../../styles/breakpoints/breakpoints';
import {NewItem, IconContainer, ItemText} from '../StyledCatalog';

export const CatalogItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const {width} = useWindowDimensions();
  return (
    <>
      <NewItem>
        <IconContainer>
          {CatalogIcons.chair}
        </IconContainer>
        <ItemText>Chair</ItemText>
      </NewItem>
      <NewItem>
        <IconContainer>
          {CatalogIcons.table}
        </IconContainer>
        <ItemText>Tables</ItemText>
      </NewItem>
      <NewItem>
        <IconContainer>
          {CatalogIcons.sofa}
        </IconContainer>
        <ItemText>Sofas</ItemText>
      </NewItem>
      <NewItem>
        <IconContainer>
          {CatalogIcons.storage}
        </IconContainer>
        <ItemText>Storage</ItemText>
      </NewItem>
      <NewItem>
        <IconContainer>
          {CatalogIcons.accessories}
        </IconContainer>
        <ItemText>Accessories</ItemText>
      </NewItem>
      {width < 1200 && (
        <NewItem onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <IconContainer>
            {CatalogIcons.accessories}
          </IconContainer>
          <ItemText>Accessories</ItemText>
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
        }}
        >
          <IconContainer>
            {CatalogIcons.accessories}
          </IconContainer>
          <ItemText>Accessories</ItemText>
          {hover && (
            <CatalogSublist/>

          )}
        </NewItem>
      )}
    </>
  )
};