import React from 'react';
import { shallow } from 'enzyme';

import { HoverCategoryItem } from './HoverCategoryItem';
import { HoverImageContainer, HoverSubtitle, HoverTitle } from '../../StyledPopularCategory';

const setUp = (props = {}) => {
  const component = shallow(<HoverCategoryItem {...props} />);
  return component;
};

describe('HoverCategoryItem component', () => {
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
      const imgContainer = wrapper.find(HoverImageContainer);
      expect(imgContainer.length).toEqual(1);
    });
    it('should be render with title', () => {
      const title = wrapper.find(HoverTitle);
      expect(title.text()).toEqual('testTitle');
    });
    it('should be render with subtitle', () => {
      const subtitle = wrapper.find(HoverSubtitle);
      expect(subtitle.text()).toEqual('testSubtitle');
    })
  });
});