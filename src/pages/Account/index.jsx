import React from 'react'
import { Header } from '../../commons/Header/Header'
import { Footer } from '../../commons/Footer'



export const AccountPage = props => {
const { handleChange, checked } = props
  return (
    <>
      <Header />
      <h1>Account page</h1>
      <Footer />
    </>
  )
}
