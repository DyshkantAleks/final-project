import React from 'react';
import { shallow } from 'enzyme';

import { AccountPage } from './index';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { Title } from '../../components/Title/Title';
import { AccountInfo } from '../../components/AccountInfo';
import { ScrollOnTop } from '../../components/ScrollOnTop';

const setUp = (props = {}) => shallow(<AccountPage {...props} />);

describe('AccountPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(ContentContainer);
    expect(wrapper.length).toEqual(1);
  });
  it('should render without crushing and should have scroll on top', () => {
    const scrollTop = component.find(ScrollOnTop);
    expect(scrollTop.length).toEqual(1);
  });
  it('should render with <Title />', () => {
    const title = component.find(Title);
    expect(title.prop('text')).toEqual('Личные данные');
  });
  it('should render with <AccountInfo />', () => {
    const account = component.find(AccountInfo);
    expect(account.length).toEqual(1);
  });
});