import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  PersonalDataContainer,
  PersonalDataItem,
  PersonalDataList,
  PersonalDataValue,
  PersonalSection,
  PersonalSectionHeader,
  PersonalSectionHeading,
  Label,
  Icon,
  PersonalSectionActive,
  PersonalSectionFooter,
} from './StyledAccountInfo';
import { selectCustomer } from '../../store/customer/slectors';
import { logOut } from '../../store/auth/middlware';
import { Button } from '../../components/Button';
import { icon } from '../../commons/Header/AccountInfo/icons';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { params } from '../LiqPay/liqpay';
import { liqPayServer } from '../../API';
import {liqpay} from '../../components/LiqPay/liqpay';
import { LiqpayV } from './comp';

export const AccountInfo = () => {
  const { screenWidth } = useWindowDimensions();
  console.log(params)
  const { name, surname, gender, email, login } = useSelector(selectCustomer);
  const dispatch = useDispatch();
  const userInfoList = [
    { label: 'Имя:', userData: name },
    { label: 'Фамилия:', userData: surname },
    { label: 'Пол', userData: gender },
    { label: 'Электронная почта:', userData: email },
    { label: 'Телефон:', userData: 'Телефон не указан' },
    { label: 'Логин:', userData: login },
  ];
  
  const userInfoTitle = [
    { title: 'Личные данные', icon: icon.account },
    { title: 'Контакты', icon: icon.contact },
    { title: 'Логин', icon: icon.login },
  ];

  const userData = () =>
    userInfoList.map(({ label, userData }, index) => {
      return (
        <PersonalDataItem key={index + 1}>
          <Label>{label}</Label>
          <PersonalDataValue>{userData}</PersonalDataValue>
        </PersonalDataItem>
      );
    });

  const personalData = () => (
    <PersonalDataContainer>
      <PersonalDataList>{userData().slice(0, 3)}</PersonalDataList>
    </PersonalDataContainer>
  );

  const contactData = () => (
    <PersonalDataContainer>
      <PersonalDataList>{userData().slice(3, 5)}</PersonalDataList>
    </PersonalDataContainer>
  );

  const loginData = () => (
    <PersonalDataContainer>
      <PersonalDataList>{userData().slice(5)}</PersonalDataList>
    </PersonalDataContainer>
  );

  const customerData = () =>
    userInfoTitle.map(({ title, icon }, index) => {
      return (
        <PersonalSection key={index}>
          <PersonalSectionHeader>
            <PersonalSectionHeading>
              <Icon>{icon}</Icon>
              {title}
            </PersonalSectionHeading>
            {screenWidth >= 481 ? <Button text={'Редактировать'} /> : null}
          </PersonalSectionHeader>
          {index === 0 && personalData()}
          {index === 1 && contactData()}
          {index === 2 && loginData()}
          {screenWidth < 481 ? (
            <PersonalSectionActive>
              <Button text={'Редактировать'} />
            </PersonalSectionActive>
          ) : null}
        </PersonalSection>
      );
    });
   
  return (
    <>
      {customerData()}
      <PersonalSectionFooter>
        <div><LiqpayV params={params}/></div>
        <Button
          onClick={() => liqPayServer.post('/3/checkout', params)}color={'#7191A6'} text={'Изменить пароль'} />
        <Button color={'#7191A6'} text={'Удалить аккаунт'} />
        <Button
          onClick={() => dispatch(logOut())}
          color={'#7191A6'}
          text={'Выйти'}
        />
      </PersonalSectionFooter>
    </>
  );
};
