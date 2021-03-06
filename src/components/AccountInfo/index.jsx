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
  ActiveContainer,
  PersonalSectionFooter,
} from './StyledAccountInfo';
import { selectCustomer } from '../../store/customer/slectors';
import { ChangePersonalDataForm } from '../../forms/ChangeAccountForms/ChangePersonDataForm';
import { ChangePassForm } from '../../forms/ChangeAccountForms/ChangePassForm';
import { logOut } from '../../store/auth/operations';
import { Button } from '../../components/Button';
import { icon } from '../../commons/Header/AccountInfo/icons';
import { openModal } from '../../store/modal/actions';
import { ChangeContactForm } from '../../forms/ChangeAccountForms/ChangeContactsForm';
import { ChangeLoginForm } from '../../forms/ChangeAccountForms/ChangeLoginForm';

export const AccountInfo = () => {
  const { name, surname, gender, email, login, telephone } = useSelector(selectCustomer);
  const dispatch = useDispatch();
  const userInfoList = [
    { label: 'Имя:', userData: name },
    { label: 'Фамилия:', userData: surname },
    { label: 'Пол', userData: gender },
    { label: 'Электронная почта:', userData: email },
    { label: 'Телефон:', userData: telephone || 'Телефон не указан' },
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
      <ActiveContainer>
        <Button text={'Редактировать'} onClick={() => dispatch(openModal({content: <ChangePersonalDataForm/>}))} />
      </ActiveContainer>
    </PersonalDataContainer>
  );

  const contactData = () => (
    <PersonalDataContainer>
      <PersonalDataList>{userData().slice(3, 5)}</PersonalDataList>
      <ActiveContainer>
        <Button text={'Редактировать'} onClick={() => dispatch(openModal({content: <ChangeContactForm/>}))} />
      </ActiveContainer>
    </PersonalDataContainer>
  );

  const loginData = () => (
    <PersonalDataContainer>
      <PersonalDataList>{userData().slice(5)}</PersonalDataList>
      <ActiveContainer>
        <Button text={'Редактировать'} onClick={() => dispatch(openModal({content: <ChangeLoginForm/>}))} />
      </ActiveContainer>
    </PersonalDataContainer>
  );

  const customerData = () => userInfoTitle.map(({ title, icon }, index) => {
    return (
      <PersonalSection key={index}>
        <PersonalSectionHeader>
          <PersonalSectionHeading>
            <Icon>
              {icon}
            </Icon>
            {title}
          </PersonalSectionHeading>
        </PersonalSectionHeader>
        {(index === 0) && personalData()}
        {(index === 1) && contactData()}
        {(index === 2) && loginData()}
      </PersonalSection>
    )
  });

  return (
    <>
      {customerData()}
      <PersonalSectionFooter>
        <Button color={'#7191A6'} text={'Изменить пароль'} onClick={() => dispatch(openModal({content: <ChangePassForm/>, title: 'Введите старый и новый пароли'}))}/>
        <Button
          onClick={() => dispatch(logOut())}
          color={'#7191A6'}
          text={'Выйти'}
        />
      </PersonalSectionFooter>
    </>
  );
};