import React from 'react';
import { shallow } from 'enzyme';

import { Homepage } from './index';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { PopularCategoryList } from '../../components/PopularCategory/PopularCategoryList';
import { SliderMainPage } from '../../components/SliderMainPage/SliderMainPage';
import { TopRatedProductsList } from '../../components/TopRatedProducts/TopRatedProductsList';
import { ScrollOnTop } from '../../components/ScrollOnTop';

const setUp = (props = {}) => shallow(<Homepage {...props} />);

describe('DeliveryPage component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with general wrapper', () => {
    const generalWrapper = component.find(ContentContainer);
    expect(generalWrapper.length).toEqual(1);
  });
  it('should render without crushing and should have scroll on top', () => {
    const scrollTop = component.find(ScrollOnTop);
    expect(scrollTop.length).toEqual(1);
  });
  it('should render with slider', () => {
    const slider = component.find(SliderMainPage);
    expect(slider.length).toEqual(1);
  });
  it('should render with list of top rated products', () => {
    const topRated = component.find(TopRatedProductsList);
    expect(topRated.length).toEqual(1);
  });
  it('should render with list of popular categories', () => {
    const popularCategories = component.find(PopularCategoryList);
    expect(popularCategories.length).toEqual(1);
  });
});
