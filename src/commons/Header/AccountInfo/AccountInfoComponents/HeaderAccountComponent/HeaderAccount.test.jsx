import React from 'react'
import { shallow } from 'enzyme'

import { HeaderAccount } from './HeaderAccount'
import { AccountContainer } from '../../StyledAccountInfo'

const setUp = (props) => shallow(<HeaderAccount {...props} />)

describe('HeaderAccount component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  })
  it('should be render with wrapper', () => {
    const wrapper = component.find(AccountContainer)
    expect(wrapper.length).toEqual(1)
  })
})
