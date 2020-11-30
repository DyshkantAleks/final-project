import React from 'react';
import { shallow } from 'enzyme';

import { HeaderAccount } from './HeaderAccount';
import { AccountContainer, AccountName } from '../../StyledAccountInfo';

const setUp = (props = {}) => {
  const component = shallow(<HeaderAccount {...props} />);
  return component;
};

describe('HeaderAccount component', () => {
  describe('render <HeaderAccoun with props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        clickHandler: jest.fn(),
        customerName: 'testName'
      }
      wrapper = setUp(props)
    })
    it('should be render with wrapper', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('should be have <svg> icon', () => {
      const svgIcon = wrapper.find(AccountContainer);
      expect(svgIcon.length).toEqual(1);
    });
    it('should be render with name of account', () => {
      const name = wrapper.find(AccountName);
      expect(name.text()).toEqual('testName');
    });
  });
});