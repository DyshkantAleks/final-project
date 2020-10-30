import React from "react";
import styled from 'styled-components';
import {ContentContairer} from "../../../components/Content/Content";
import {SocialLink, TextAdress} from "../../../commons/Footer/StyledFooter";
import {device} from "../../../styles/breakpoints/breakpoints";
import {ContainerPage, TextContainer, ContainerContactForm, ContactForm, ContactLink, Text, TextList, TextListItem} from "../StyledAboutPage";
import {ContactsForm} from "./ContactForm";


export const AboutText = () => {

  return (

      <ContentContairer>
        <ContainerPage>
          <TextContainer>
            <h2>МЫ - КОМАНДА МОЛОДЫХ УВЛЕЧЕННЫХ ПРОФЕССИОНАЛОВ</h2>
            <Text>Мы уверены, что пространство, в котором мы живем, должно отражать наши мечты и стремления, и каждый из
              нас
              в силах создать достойный восхищения интерьер, в котором приятно находиться и в который всегда хочется
              возвращаться.
            </Text>
            <Text>Наш опыт, стремление к комплексному подходу во всем, уважение к желаниям клиента позволяют нам
              помогать
              Вам реализовать любые ваши идеи в реальные сроки за разумные деньги.

            </Text>
            <Text>Мы работаем напрямую с лучшими фабриками Европы и Азии, производящими мебель и предметы интерьера
              ценового
              сегмента «средний+», «высокий», «премиум», что позволяет нам предлагать Вам актуальные новинки по
              конкурентным
              ценам. Большой выбор товаров в наличии и под заказ позволяют нам помочь Вам подобрать достойные варианты в
              рамках Вашего бюджета.
            </Text>
            <Text>Мы уже реализовали ряд проектов, основываясь на принципах:</Text>
            <TextList>
              <TextListItem>Комплексный подход эффективен всегда.</TextListItem>
              <TextListItem>Нереализуемых задач не бывает. Мы всегда готовы предложить варианты решения даже самой
                нетрадиционной задачи.</TextListItem>
              <TextListItem>Важен баланс качества результата, сроков реализации проекта и бюджета.</TextListItem>
            </TextList>

          </TextContainer>
          {/*<Map*/}
          {/*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.651640662533!2d30.59143871518244!3d50.42896179679486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN.IT!5e0!3m2!1sru!2sua!4v1603998516813!5m2!1sru!2sua"*/}
          {/*></Map>*/}

          <ContactsForm/>
        </ContainerPage>
      </ContentContairer>




  )
};



