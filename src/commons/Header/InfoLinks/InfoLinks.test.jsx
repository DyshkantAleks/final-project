import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import { InfoLinks } from './InfoLinkList';
import { List, Item } from '../InfoLinks/StyledInfoLinks';

const setUp = (props) => shallow(<InfoLinks {...props} />);

describe('InfoLinks component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(List);
    expect(wrapper.length).toEqual(1);
  });
  it('shoud be render with <li>', () => {
    const li = component.find(Item);
    expect(li.length).toEqual(3);
  });
  it('every <li> should be includes <Link />', () => {
    const link = component.find(Item).find(Link);
    expect(link.length).toEqual(3);
    expect(link.at(0).prop('to')).toEqual('/stores');
    expect(link.at(0).text()).toEqual('Наш шоу-рум');
    expect(link.at(1).prop('to')).toEqual('/promotions');
    expect(link.at(1).text()).toEqual('Акции');
    expect(link.at(2).prop('to')).toEqual('/about');
    expect(link.at(2).text()).toEqual('О нас');
  });
});