import React from 'react';
import { shallow } from 'enzyme';

import { StoresPage } from './index';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { ContainerPage, Text, TextContainer } from '../About/StyledAboutPage';
import { Map, MapContainer } from './StyledStoresPage';

const setUp = (props = {}) => shallow(<StoresPage {...props} />);

describe('StoresPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with general wrapper', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.length).toBe(1);
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(ContainerPage);
    expect(wrapper.length).toEqual(1);
  });
  it('should be render with text container', () => {
    const textContainer = component.find(TextContainer);
    expect(textContainer.length).toEqual(1);
  });
  it('should be render with text', () => {
    const text = component.find(TextContainer).find(Text);
    expect(text.length).toBe(3);
    expect(text.at(0).text()).toEqual('Для вашего удобства мы создали современный шоу-рум.');
    expect(text.at(1).text()).toEqual('В нашем шоу-руме представлены экспозиции современных брендов Италии, где вы можете посмотреть все товары, представленные у нас на сайте');
    expect(text.at(2).text()).toEqual('График работы: с понедельника по воскресенье с 10:00 до 20:00');
  });
  it('should render with map container', () => {
    const mapContainer = component.find(MapContainer);
    expect(mapContainer.length).toEqual(1);
  });
  it('should render with <Map />', () => {
    const map = component.find(Map);
    expect(map.prop('src')).toEqual('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.651640662533!2d30.59143871518244!3d50.42896179679486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN.IT!5e0!3m2!1sru!2sua!4v1603998516813!5m2!1sru!2sua');
  });
  it('snapshot <StoragePage />', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.debug()).toMatchSnapshot();
  });
});