import React from 'react';
import { shallow } from 'enzyme';

import { ContentContainer } from '../../../styles/GeneralStyledComponents';
import { ContainerPage, Text, TextContainer, TextList, TextListItem } from '../StyledAboutPage';
import { AboutText } from './AboutText';

const setUp = (props = {}) => shallow(<AboutText {...props} />);

describe('AboutText component', () => {
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
    expect(title.text()).toEqual('МЫ - КОМАНДА МОЛОДЫХ УВЛЕЧЕННЫХ ПРОФЕССИОНАЛОВ');
  });
  it('should be render with text', () => {
    const text = component.find(TextContainer).find(Text);
    expect(text.length).toEqual(4);
    expect(text.at(0).text()).toEqual('Мы уверены, что пространство, в котором мы живем, должно отражать наши мечты и стремления, и каждый из нас в силах создать достойный восхищения интерьер, в котором приятно находиться и в который всегда хочется возвращаться.');
    expect(text.at(1).text()).toEqual('Наш опыт, стремление к комплексному подходу во всем, уважение к желаниям клиента позволяют нам помогать Вам реализовать любые ваши идеи в реальные сроки за разумные деньги.');
    expect(text.at(2).text()).toEqual('Мы работаем напрямую с лучшими фабриками Европы и Азии, производящими мебель и предметы интерьера ценового сегмента «средний+», «высокий», «премиум», что позволяет нам предлагать Вам актуальные новинки по конкурентным ценам. Большой выбор товаров в наличии и под заказ позволяют нам помочь Вам подобрать достойные варианты в рамках Вашего бюджета.');
    expect(text.at(3).text()).toEqual('Мы уже реализовали ряд проектов, основываясь на принципах:');
  });
  it('should be render with <ul>', () => {
    const textList = component.find(TextList);
    expect(textList.length).toEqual(1);
  });
  it('should render with list', () => {
    const textListItem = component.find(TextListItem);
    expect(textListItem.length).toEqual(3);
    expect(textListItem.at(0).text()).toEqual('Комплексный подход эффективен всегда.');
    expect(textListItem.at(1).text()).toEqual('Нереализуемых задач не бывает. Мы всегда готовы предложить варианты решения даже самой нетрадиционной задачи.');
    expect(textListItem.at(2).text()).toEqual('Важен баланс качества результата, сроков реализации проекта и бюджета.');
  });
  it('snapshot <AboutText />', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.debug()).toMatchSnapshot();
  });
});