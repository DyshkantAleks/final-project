import React from 'react';

import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import { Button } from '../Button';
import { ROUTES } from "../../pages/navigation/routes";
import { ProductActivity } from '../../commons/Header/Catalog/CatalogIcons'
import {
    ConteinerItem,
    PhotoBox,
    Photo,
    TitleBox,
    Name,
    Price,
    StyledFontAwesomeIcon,
    StyledLink,
    ProductActivityContainer,
    IconContainer,
    SaleIcon,
    NewIcon,
    TopRatedIcon
} from './StyledProductItem';

export const ProductItem = (props) => {
    const {
        price = 4899,
        name = 'Стул полубарный NATA',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
        image = './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo_main.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo6.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo_Auto/sofa_Arketipo_Auto4.jpeg',
        // image = './img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft1.jpg',
        isDiscount = false,
        isNew = false,
        isTopRated = false
    } = props;

    const [inFavorite, toggleInFavorite] = useToggle();

    return (

        <ConteinerItem>
            <PhotoBox>
                <StyledLink to={ROUTES.PRODUCT}>
                    <Photo alt='our product' src={image} />
                    {isDiscount &&
                        <ProductActivityContainer>
                            <IconContainer>
                                <SaleIcon>
                                    {ProductActivity.sale}
                                </SaleIcon>
                            </IconContainer>
                        </ProductActivityContainer>}
                    {isNew && <ProductActivityContainer>
                        <IconContainer>
                            <NewIcon>
                                {ProductActivity.new}
                            </NewIcon>
                        </IconContainer>
                    </ProductActivityContainer>}
                    {isTopRated && <ProductActivityContainer>
                        <IconContainer>
                            <TopRatedIcon>
                                {ProductActivity.topMain}
                            </TopRatedIcon>
                        </IconContainer>
                    </ProductActivityContainer>}
                </StyledLink>
            </PhotoBox>
            <TitleBox>
                <StyledLink to={ROUTES.PRODUCT}>
                    <Name>{name}</Name>
                </StyledLink>
                {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
                {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
                <Price>{price.toLocaleString()}</Price>
                <Button text={'Купить'} />
            </TitleBox>
        </ConteinerItem>
    )
}
