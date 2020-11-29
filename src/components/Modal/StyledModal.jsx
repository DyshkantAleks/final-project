import styled from 'styled-components';

export const ModalOwerlay = styled.div`
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

export const ModalWindow = styled.div` 
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  max-height: 100vh;
  overflow: auto;
`

export const ModalHeader = styled.div`
  margin: 1rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between; 
`

export const ModalText = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 20px;
  font-size: 20px;  
`

export const CloseBtn = styled.div`
width: 1.5rem;
height: 1.5rem;
fill: #A0A9AF;
  &:hover{
    fill: #c91212;
    cursor: pointer;
  }
`;

export const ModalTittle = styled.div`
font-size: 1.6rem;
font-weight: bold;
`