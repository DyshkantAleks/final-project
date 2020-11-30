import React from 'react';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ContainerPage, Text, TextContainer, TextList, TextListItem } from '../About/StyledAboutPage';
import { ContactsForm } from '../About/AboutPageComponents/ContactForm';

export const DeliveryPage = () => {
  return (
    <ContentContainer>
      <ContainerPage>
        <TextContainer>
          <h2>ОБЩИЕ УСЛОВИЯ</h2>
          <Text>Мы доставляем заказы во все регионы Украины, Белоруссию, Россию.
            Кроме этого мы доставляем товар в Европу, США.
          </Text>
          <TextList>
            <TextListItem>Стоимость доставки складывается из курьерской доставки заказа и подъема на
              этаж.
            </TextListItem>
            <TextListItem>Доставка крупных заказов (несколько позиций мебели) может осуществляться партиями, в
              зависимости от сроков готовности товара к отгрузке.
            </TextListItem>
            <TextListItem>Занести мебель в квартиру (офис) можно только, если ширина дверного проема составляет не
              менее 75 см, а ширина коридора и других помещений - не менее 120 см. Несоответствие ширины дверных
              проемов, коридоров и других помещений указанным размерам не является основанием для отказа от товара.
              Съем дверей и перестановка предметов при заносе мебели оплачивается отдельно.
            </TextListItem>
            <TextListItem>Если вы решили отказаться от товара, вы можете вернуть его в течение семи дней, однако вам
              нужно будет организовать доставку до нашего склада в Москве или оплатить обратную
              доставку.
            </TextListItem>
          </TextList>
          <Text>Бесплатная доставка собственной курьерской службой для всех заказов стоимостью более 20000 руб. по
            Киеву в течении 2-5 дней.
          </Text>

          <Text>Бесплатная доставка собственной курьерской службой для всех заказов стоимостью более 15000 гривен.
            по Киевской области в течение 2-5 дней.
          </Text>
          <Text>КУРЬЕРСКАЯ ДОСТАВКА</Text>
          <TextList>
            <TextListItem>В течение 2-5 рабочих дней после подтверждения заказа.
            </TextListItem>
            <TextListItem>Оплата наличными или картой курьеру, безналичная оплата на сайте при
              заказе.
            </TextListItem>
            <TextListItem>С 10:00 до 21:00 ежедневно (укажите удобное время в комментариях к заказу).
            </TextListItem>
            <TextListItem>Доступные интервалы: с 12:00 до 17:00 или с 17:00 до 21:00.
            </TextListItem>
          </TextList>
        </TextContainer>
        <ContactsForm />
      </ContainerPage>
    </ContentContainer>
  )
};