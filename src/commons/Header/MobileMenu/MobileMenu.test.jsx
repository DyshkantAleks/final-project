import React from 'react';
import { shallow } from 'enzyme';

import { MobileMenu } from './MobileMenu';
import { slide as Menu } from 'react-burger-menu';
import { CatalogList } from '../Catalog/CatalogList';
import Search from 'antd/lib/input/Search';
import { InfoLinks } from '../InfoLinks/InfoLinkList';

const setUp = (props) => shallow(<MobileMenu {...props} />);
describe('MobileMenu component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should be render with <Menu /> from "react-burger-menu"', () => {
    const menu = component.find(Menu);
    expect(menu.length).toEqual(1);
  });
  it('should be render with <CatalogList />', () => {
    const catalog = component.find(CatalogList);
    expect(catalog.length).toEqual(1);
  });
  it('should be render with <Search />', () => {
    const search = component.find(Search);
    expect(search.length).toEqual(1);
    expect(search.prop('enterbutton')).toEqual('true');
    expect(search.prop('placeholder')).toEqual('Найти товар по названию');
  });
  it('should be render with <InfoLinks />', () => {
    const info = component.find(InfoLinks);
    expect(info.length).toEqual(1);
  });
});
