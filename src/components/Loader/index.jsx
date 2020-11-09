import React from 'react'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <LoaderContainer>
      <Preloader />
      <LoaderText>Загрузка...</LoaderText>
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  margin: 0 auto;
`

const Preloader = styled.div`
    margin: 100px auto 0;
    width: 30px;
    height: 30px;
    border: 7px solid #000;
    border-left-color: #333;
    border-right-color: transparent;
    border-bottom-color: #555;
    border-radius: 100%;
    animation: spin 600ms infinite linear;
`

const LoaderText = styled.p`
  text-align: center;
  font-family: Open Sans;
  font-size: 1rem;
`
