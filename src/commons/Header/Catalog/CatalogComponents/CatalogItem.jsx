import React, {useState} from 'react';


import useWindowDimensions from "../../../../utils/useWindowDimensions";
import {NewItem, IconContainer, ItemText, SubList, SubItem, ImageIcon, StyledLink, TextContainer} from "../StyledCatalog";
import {useSelector} from "react-redux";
import {selectByParentCategory} from "../../../../store/categories/selectors";




export const CatalogItem = (props) => {
  const {category, icon} = props;
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const {screenWidth} = useWindowDimensions();
  const subCategory = useSelector(selectByParentCategory(category));


  return (
    <>

      { screenWidth < 1200 && (
        <NewItem>
          <TextContainer onClick={() => {
            setIsOpen(!isOpen);
          }}>
            <IconContainer>
              <ImageIcon src={icon}/>
            </IconContainer>
            <ItemText>{category}</ItemText>
          </TextContainer>
          {isOpen &&
          <SubList>
            {subCategory.map((e) => (
              <StyledLink to={`/catalog/${e.route}`}>
                <SubItem>{e.category}</SubItem>
              </StyledLink>
            ))}
          </SubList>
          }

        </NewItem>
      )}
      {screenWidth >= 1200 && (
        <NewItem onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
          <TextContainer>
            <IconContainer>
              <ImageIcon src={icon}/>
            </IconContainer>
            <ItemText>{category}</ItemText>
          </TextContainer>
          {hover &&

            <SubList>
              {subCategory.map((e) => (
                <StyledLink to={`/catalog/${e.route}`}>
                  <SubItem>{e.category}</SubItem>
                </StyledLink>
                ))}
            </SubList>

          }
        </NewItem>
      )}
    </>
  )
};






