import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { NotFoundPage } from './index';
import { Button404, ContainerFor404, ContainerImage404, Image404, Text404 } from './StyledNotFoundPage';

const setUp = (props = {}) => shallow(<NotFoundPage {...props} />);

describe('NotFoundPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(ContainerFor404);
    expect(wrapper.length).toEqual(1);
  });
  it('should be render with container for image', () => {
    const containerImg = component.find(ContainerImage404);
    expect(containerImg.length).toEqual(1);
  });
  it('should be render with image', () => {
    const image = component.find(Image404);
    expect(image.length).toEqual(1);
    expect(image.prop('src')).toEqual('https://res.cloudinary.com/dg-home/image/upload/v1604486670/General/404_f3bscz.gif');
  });
  it('should be render with text', () => {
    const text = component.find(Text404);
    expect(text.length).toEqual(1);
    expect(text.text()).toEqual('Упс.... Кажется мы потеряли эту страницу :(');
  });
  it('should be redirect on homepage', () => {
    const link = component.find(Link);
    expect(link.prop('to')).toEqual('/');
  })
  it('should be render with button', () => {
    const button = component.find(Button404);
    expect(button.text()).toEqual('Вернуться на главную');
  });
  it('snapshot <NotFoundPage />', () => {
    const wrapper = component.find(ContainerFor404);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});