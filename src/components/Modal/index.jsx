import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLockBodyScroll } from 'react-use';

import { icon } from '../../commons/Header/AccountInfo/icons.jsx';
import { closeModal } from '../../store/modal/actions.jsx';
import { selectModalContent, selectModalTitle, selectModalActions } from '../../store/modal/selectors.jsx';
import { ModalOwerlay, ModalWindow, ModalHeader, ModalText, ModalTittle, CloseBtn } from './StyledModal';

export const Modal = ({ closeButton = true }) => {
  useLockBodyScroll();
  const dispatch = useDispatch();
  const content = useSelector(selectModalContent);
  const title = useSelector(selectModalTitle);
  const actions = useSelector(selectModalActions)

  const closeModalHandler = () => {
    dispatch(closeModal())
  }
  return ReactDOM.createPortal(
    <ModalOwerlay onClick={(e) => e.currentTarget === e.target ? closeModalHandler() : null}>
      <ModalWindow>
        <ModalHeader>
          <ModalTittle>{title}</ModalTittle>
          {closeButton && <CloseBtn onClick={closeModalHandler}>{icon.close}</CloseBtn>}
        </ModalHeader>
        <ModalText>
          {content}
        </ModalText>
        {actions && <>{actions}</>}
      </ModalWindow>
    </ModalOwerlay>,
    document.getElementById('modal-root')
  )
};