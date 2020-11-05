import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Header } from '../../commons/Header/Header';
import { Footer } from '../../commons/Footer';
import { selectCustomer } from '../../store/customer/slectors';
import { ContentContairer } from '../../components/Content/Content';
import { Button } from '../../components/Button';
import { icon } from '../../commons/Header/AccountInfo/icons';
import {ScrollToTop} from '../../components/ScrollToTop';


export const AccountPage = (props) => {
  const user = useSelector(selectCustomer);
  console.log(user);

  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContairer>
        {user && <>
          <TitleHeading>Личные данные</TitleHeading>
          <PersonalSection>
            <PersonalSectionHeader>
              <PersonalSectionHeading>
                <Icon>
                  {icon.account}
                </Icon>
                Личные данные
                </PersonalSectionHeading>
              <Button text={'Редактировать'} />
            </PersonalSectionHeader>
            <PersonalDataContainer>
              <PersonalDataList>
                <PersonalDataItem>
                  <Label>Имя: </Label>
                  <PersonalDataValue>{user.name}</PersonalDataValue>
                </PersonalDataItem>
                <PersonalDataItem>
                  <Label>Фамилия: </Label>
                  <PersonalDataValue>{user.surname}</PersonalDataValue>
                </PersonalDataItem>
                <PersonalDataItem>
                  <Label>Пол: </Label>
                  <PersonalDataValue>{user.gender}</PersonalDataValue>
                </PersonalDataItem>
              </PersonalDataList>
            </PersonalDataContainer>
          </PersonalSection>

          <PersonalSection>
            <PersonalSectionHeader>
              <PersonalSectionHeading>
                <Icon>
                  {icon.contact}
                </Icon>
                Контакты
                </PersonalSectionHeading>
              <Button text={'Редактировать'} />
            </PersonalSectionHeader>
            <PersonalDataContainer>
              <PersonalDataList>
                <PersonalDataItem>
                  <Label>Электронная почта: </Label>
                  <PersonalDataValue>{user.email}</PersonalDataValue>
                </PersonalDataItem>
                <PersonalDataItem>
                  <Label>Телефон: </Label>
                  <PersonalDataValue>{user.email}</PersonalDataValue>
                </PersonalDataItem>
              </PersonalDataList>
            </PersonalDataContainer>
          </PersonalSection>
          
          <PersonalSection>
            <PersonalSectionHeader>
              <PersonalSectionHeading>
                <Icon>
                  {icon.login}
                </Icon>
                Логин
                </PersonalSectionHeading>
              <Button text={'Редактировать'} />
            </PersonalSectionHeader>
            <PersonalDataContainer>
              <PersonalDataList>
                <PersonalDataItem>
                  <Label>Логин: </Label>
                  <PersonalDataValue>{user.login}</PersonalDataValue>
                </PersonalDataItem>
              </PersonalDataList>
            </PersonalDataContainer>
          </PersonalSection>
          <PersonalSectionHeader>
            <Button color={'#7191A6'} text={'Изменить пароль'}/>
            <Button color={'#7191A6'} text={'Удалить аккаунт'}/>
            <Button color={'#7191A6'} text={'Выйти'}/>
          </PersonalSectionHeader>
        </>}
      </ContentContairer>
      <Footer />
    </>
  )
};
export const TitleHeading = styled.h1`
margin-bottom: 2.4rem;
`;

export const PersonalSectionHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const PersonalSectionHeading = styled.h3`
display: flex;
font-size: 2rem;
align-items: center;
`;

export const Icon = styled.span`
width: 3rem;
height: 3rem;
margin-right: 2.5rem;
align-items: center;
display: flex;
`;

export const PersonalSection = styled.section`
margin-bottom: 2rem;
padding: 1.5rem;
border: .1rem solid #e6e9ef;
border-radius: .5rem;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
`;

export const PersonalDataContainer = styled.div`
padding-left: 5.5rem;
`;

export const PersonalDataList = styled.ul`
display: flex;
flex-wrap: wrap;
list-style: none;
padding: 0;
margin: 0;
`;

export const PersonalDataItem = styled.li`
width: 33.33%;
margin-bottom: 2.5rem;
padding-right: 2.5rem;
`;

export const Label = styled.label`
margin-bottom: .8rem;
font-size: 1.2rem;
color: #797878;
`;

export const PersonalDataValue = styled.p`
font-size: 1.4rem;
`;