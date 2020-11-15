import React from 'react'
import { Header } from '../../commons/Header/Header'
import { Footer } from '../../commons/Footer'
import { ContainerPage, Text, TextContainer } from '../About/StyledAboutPage'
import { Map, MapContainer } from './StyledStoresPage'
import { ContentContainer } from '../../styles/GeneralStyledComponents';

export const StoresPage = () => {
  return (
    <>
      <Header />
      <ContentContainer>
        <ContainerPage>
          <TextContainer>
            <Text>Для вашего удобства мы создали современный шоу-рум.</Text>
            <Text>В нашем шоу-руме представлены экспозиции современных брендов Италии, где вы можете посмотреть все
              товары, представленные у нас на сайте
            </Text>
            <Text>График работы: с понедельника по воскресенье с 10:00 до 20:00</Text>

          </TextContainer>
          <MapContainer>
            <Map
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.651640662533!2d30.59143871518244!3d50.42896179679486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN.IT!5e0!3m2!1sru!2sua!4v1603998516813!5m2!1sru!2sua'
            />
          </MapContainer>

        </ContainerPage>
      </ContentContainer>
      <Footer />
    </>
  )
}
