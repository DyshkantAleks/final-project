import React from 'react';
import { shallow } from 'enzyme';
import { StaticCategoryItem } from './StaticCategoryItem';
import { StaticImageContainer, StaticSubtitle, StaticTitle } from '../../StyledPopularCategory';

const setUp = (props = {}) => {
  const component = shallow(<StaticCategoryItem {...props} />);
  return component;
};

describe('StaticCategoryItem component', () => {
  describe('render component with props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        textForTitle: 'testTitle',
        textForSubtitle: 'testSubtitle',
      };
      wrapper = setUp(props);
    });
    it('should be render with image container', () => {
      const imgContainer = wrapper.find(StaticImageContainer);
      expect(imgContainer.length).toEqual(1);
    });
    it('should be render with title', () => {
      const title = wrapper.find(StaticTitle);
      expect(title.text()).toEqual('testTitle');
    });
    it('should be render with subtitle', () => {
      const subtitle = wrapper.find(StaticSubtitle);
      expect(subtitle.text()).toEqual('testSubtitle');
    })
  });
});