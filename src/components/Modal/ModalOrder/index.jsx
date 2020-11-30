import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ModalTitle, ItemInnerWrapper } from '../ModalExistence/StyledModalExistence';
import { Button } from '../../Button';
import { closeModal } from '../../../store/modal/actions.jsx';
import { ActionsWrap, ContentOrder, ModalOrderWrapper } from './StyledModalOrder';
import { LiqPaySheckout } from '../../LiqPay/LiqPaySheckout';

export const ModalOrder = (props) => {
  const { data } = props;
  const payCredit = data.order.payMethod === 'creditCard'
  return (
    <ModalOrderWrapper>
      <ContentOrder>
        {payCredit && <LiqPaySheckout totalSum={data.order.totalSum} id={data.order.orderNo}/>}
        <ModalTitle>Ваш заказ № <ItemInnerWrapper>{data.order.orderNo}{' '}</ItemInnerWrapper>успешно принят.</ModalTitle>
      </ContentOrder>
    </ModalOrderWrapper>
  )
};

export const ModalOrderActions = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModalHandler = () => dispatch(closeModal());
  return (
    <ActionsWrap>
      <Button color='true' text={'Продолжить покупки'}
        onClick={() => {
          history.push('/catalog/all');
          closeModalHandler();
        }} />
    </ActionsWrap>
  )
};

ModalOrder.propTypes = {
  data: PropTypes.object
};