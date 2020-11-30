import React from 'react';
import { shallow } from 'enzyme';

import { DeliveryPage } from './index';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ContainerPage, Text, TextContainer, TextList, TextListItem } from '../About/StyledAboutPage';
import { ContactsForm } from '../About/AboutPageComponents/ContactForm';

const setUp = (props = {}) => shallow(<DeliveryPage {...props} />);

describe('DeliveryPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with general wrapper', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.length).toEqual(1);
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(ContainerPage);
    expect(wrapper.length).toEqual(1);
  });
  it('should be render with text container', () => {
    const textContainer = component.find(TextContainer);
    expect(textContainer.length).toEqual(1);
  });
  it('should be render with <h2>', () => {
    const title = component.find('h2');
    expect(title.length).toEqual(1);
    expect(title.text()).toEqual('ОБЩИЕ УСЛОВИЯ');
  });
  it('should be render with text', () => {
    const text = component.find(TextContainer).find(Text);
    expect(text.length).toEqual(4);
    expect(text.at(0).text()).toEqual('Мы доставляем заказы во все регионы Украины, Белоруссию, Россию. Кроме этого мы доставляем товар в Европу, США.');
    expect(text.at(1).text()).toEqual('Бесплатная доставка собственной курьерской службой для всех заказов стоимостью более 20000 руб. по Киеву в течении 2-5 дней.');
    expect(text.at(2).text()).toEqual('Бесплатная доставка собственной курьерской службой для всех заказов стоимостью более 15000 гривен. по Киевской области в течение 2-5 дней.');
    expect(text.at(3).text()).toEqual('КУРЬЕРСКАЯ ДОСТАВКА');
  });
  it('should be render with <ul>', () => {
    const textList = component.find(TextList);
    expect(textList.length).toEqual(2);
  });
  it('should render with list', () => {
    const textListItem = component.find(TextListItem);
    expect(textListItem.length).toEqual(8);
    expect(textListItem.at(0).text()).toEqual('Стоимость доставки складывается из курьерской доставки заказа и подъема на этаж.');
    expect(textListItem.at(1).text()).toEqual('Доставка крупных заказов (несколько позиций мебели) может осуществляться партиями, в зависимости от сроков готовности товара к отгрузке.');
    expect(textListItem.at(2).text()).toEqual('Занести мебель в квартиру (офис) можно только, если ширина дверного проема составляет не менее 75 см, а ширина коридора и других помещений - не менее 120 см. Несоответствие ширины дверных проемов, коридоров и других помещений указанным размерам не является основанием для отказа от товара. Съем дверей и перестановка предметов при заносе мебели оплачивается отдельно.');
    expect(textListItem.at(3).text()).toEqual('Если вы решили отказаться от товара, вы можете вернуть его в течение семи дней, однако вам нужно будет организовать доставку до нашего склада в Москве или оплатить обратную доставку.');
    expect(textListItem.at(4).text()).toEqual('В течение 2-5 рабочих дней после подтверждения заказа.');
    expect(textListItem.at(5).text()).toEqual('Оплата наличными или картой курьеру, безналичная оплата на сайте при заказе.');
    expect(textListItem.at(6).text()).toEqual('С 10:00 до 21:00 ежедневно (укажите удобное время в комментариях к заказу).');
    expect(textListItem.at(7).text()).toEqual('Доступные интервалы: с 12:00 до 17:00 или с 17:00 до 21:00.');
  });
  it('should render with form of contacts', () => {
    const contacts = component.find(ContactsForm);
    expect(contacts.length).toEqual(1);
  })
  it('snapshot <DeliveryPage />', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.debug()).toMatchSnapshot();
  });
});