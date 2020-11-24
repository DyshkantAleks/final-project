import React from 'react';
import {shallow} from 'enzyme';
import { Title} from './Title';

describe('Title component', () => {
  it('should be render without crashing', () => {
    const component = shallow(<Title text='hello'/>);
    expect(component.text()).toEqual('hello')
  })
})