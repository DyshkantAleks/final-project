import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export const Modal = ({ closeButton = true, closeModalHandler, content, actions }) => {
  return ReactDOM.createPortal(
    <ModalOwerlay onClick={(e) => e.currentTarget === e.target ? closeModalHandler() : null}>
      <ModalWindow>
        <ModalHeader>
          {closeButton && <StyledFontAwesomeIcon icon={faTimes} onClick={closeModalHandler} />}
        </ModalHeader>
        <ModalText>
          {content}
        </ModalText>
        <ModalActions>
          {actions}
        </ModalActions>
      </ModalWindow>
    </ModalOwerlay>,
    document.getElementById('modal-root')
  )
}

const ModalOwerlay = styled.div`
  position: fixed;
  background-color: #312e2e83;
 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const ModalWindow = styled.div` 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 30%;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; 
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 1.2em;
    color: #A0A9AF;
    padding: 5px 7px 0 0;
    &:hover{
      cursor: pointer;
      color: #007042;
    }
`
const ModalText = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 20px;
  font-size: 20px;  
`

const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 25px 0;
`
