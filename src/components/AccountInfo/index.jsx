import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PersonalDataContainer, PersonalDataItem, PersonalDataList, PersonalDataValue, PersonalSection, PersonalSectionHeader, PersonalSectionHeading, Label, Icon, PersonalSectionActive, PersonalSectionFooter } from './StyledAccountInfo';
import { selectCustomer } from '../../store/customer/slectors';
import { logOut } from '../../store/auth/middlware';
import { Button } from '../../components/Button';
import { icon } from '../../commons/Header/AccountInfo/icons';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Modal } from '../Modal';
import { selectModalContent, selectModalIsOpen } from '../../store/modal/selectors';
import { closeModal, openModal } from '../../store/modal/actions-creators';
import { ChangePassForm } from '../forms/ChangeAccountForms/ChangePassForm';
import { ChangePersonalDataForm } from '../forms/ChangeAccountForms/ChangePersonDataForm';

export const AccountInfo = () => {
  const { screenWidth } = useWindowDimensions();
  const isOpenModal = useSelector(selectModalIsOpen);
  const contentModal = useSelector(selectModalContent);
  const { name, surname, gender, email, login } = useSelector(selectCustomer);
  const dispatch = useDispatch()

  const userInfoList = [
    { label: 'Имя:', userData: name },
    { label: 'Фамилия:', userData: surname },
    { label: 'Пол', userData: gender },
    { label: 'Электронная почта:', userData: email },
    { label: 'Телефон:', userData: 'Телефон не указан' },
    { label: 'Логин:', userData: login }
  ];

  const userInfoTitle = [
    { title: 'Личные данные', icon: icon.account },
    { title: 'Контакты', icon: icon.contact },
    { title: 'Логин', icon: icon.login }
  ];

  const userData = () => userInfoList.map(({ label, userData }, index) => {
    return (
      <PersonalDataItem key={index + 1}>
        <Label >{label}</Label>
        <PersonalDataValue>{userData}</PersonalDataValue>
      </PersonalDataItem>
    )
  });

  const personalData = () => (
    <PersonalDataContainer>
      <PersonalDataList>
        {userData().slice(0, 3)}
      </PersonalDataList>
    </PersonalDataContainer>
  );

  const contactData = () => (
    <PersonalDataContainer>
      <PersonalDataList>
        {userData().slice(3, 5)}
      </PersonalDataList>
    </PersonalDataContainer>
  );

  const loginData = () => (
    <PersonalDataContainer>
      <PersonalDataList>
        {userData().slice(5)}
      </PersonalDataList>
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
          {screenWidth >= 481 ? <Button text={'Редактировать'} onClick={() => dispatch(openModal({content: <ChangePersonalDataForm/>}))}/> : null}
        </PersonalSectionHeader>
        {(index === 0) && personalData()}
        {(index === 1) && contactData()}
        {(index === 2) && loginData()}
        {screenWidth < 481
          ? <PersonalSectionActive>
            <Button text={'Редактировать'} />
          </PersonalSectionActive> : null}
      </PersonalSection>
    )
  });

  return (
    <>
      {/* {isOpenModal && <Modal content={contentModal} closeModalHandler={() => dispatch(closeModal())}/>} */}
      {customerData()}
      <PersonalSectionFooter>
        <Button color={'#7191A6'} text={'Изменить пароль'} onClick={() => dispatch(openModal({content: <ChangePassForm/>, title: 'Введите старый и новый пароли'}))}/>
        <Button color={'#7191A6'} text={'Удалить аккаунт'} />
        <Button color={'#7191A6'} text={'Выйти'} onClick={() => dispatch(logOut())}/>
      </PersonalSectionFooter>
    </>
  )
};