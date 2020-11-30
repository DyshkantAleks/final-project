import React from 'react';
import { shallow } from 'enzyme';

import { PopularCategoryItem } from './PopularCategoryItem';
import { Item } from '../StyledPopularCategory';

const setUp = (props) => shallow(<PopularCategoryItem {...props} />)

describe('PopularCategoryItem component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  });
  it('should be render without crushing', () => {
      const wrapper = component.find(Item);
      expect(wrapper.length).toEqual(1);
  });
  it('snaphot of <PopularCategoryItem />', () => {
    const wrapper = component.find(Item);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
