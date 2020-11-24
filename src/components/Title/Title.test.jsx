import React from 'react';
import {shallow} from 'enzyme';
import { Title} from './Title';

describe('Title component', () => {
  it('should be render without crashing with props', () => {
    const component = shallow(<Title text='hello'/>);
    expect(component.text()).toEqual('hello')
  });
  it('should be render without crashing without props', () => {
    const component = shallow(<Title />);
    expect(component.length).toEqual(1)
  });
})