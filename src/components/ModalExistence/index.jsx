import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalWrapper, ContentWrapper, ModalTitle, StyledLink, ItemInnerWrapper, ActionsWrapper } from './StyledModalExistence';
import { Button } from '../Button';
import { closeModal } from '../../store/modal/actions-creators.jsx';

export const ModalExistence = (props) => {
    const { name, quantity, route} = props;
    const history = useHistory();
    const dispatch = useDispatch();
    const closeModalHandler = () => {
        dispatch(closeModal())
    }
    return (
        <ModalWrapper>
            <ContentWrapper>
                <ModalTitle>Товара
                <StyledLink to={`/products/${route}`} onClick={closeModalHandler}>
                        {' '}{name}{' '}</StyledLink>
                не хватает на складе &#9785;. Доступно в количестве
                <ItemInnerWrapper>{' '}{quantity}{' '}шт</ItemInnerWrapper>. Вы можете &laquo;Продолжить покупки&raquo; или же &laquo;Оставте заявку&raquo; и наш менеджер свяжеться с Вами, как только товар появиться на складе.
                </ModalTitle>
            </ContentWrapper>
            <ActionsWrapper>
                <Button
                    color='true' text={'Продолжить покупки'} onClick={() => {
                        history.push('/catalog/all');
                        closeModalHandler()
                    }} />
                <Button color='true' text={'Оставить заявку'} />
            </ActionsWrapper>
        </ModalWrapper>
    )
};

ModalExistence.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    route: PropTypes.string
};