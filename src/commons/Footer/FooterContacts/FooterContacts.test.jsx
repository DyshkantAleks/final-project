import React from 'react';
import { shallow } from 'enzyme';

import { FooterContacts } from '.';
import { ContactsItem, FooterContactsContainer } from '../StyledFooter';
import { ContactLink } from '../../../pages/About/StyledAboutPage';

const setUp = (props) => shallow(<FooterContacts {...props} />)

describe('FooterContacts component', () => {
  let component;
  beforeEach(() => {
    component = setUp()
  });
  it('should be render with wrapper', () => {
    const wrapper = component.find(FooterContactsContainer);
    expect(wrapper.length).toEqual(1)
  });

  it('should be render with contacts', () => {
    const contacts = component.find(ContactsItem);
    expect(contacts.length).toBe(2);
    expect(contacts.first().text()).toEqual('+38 (044) 290 22 44');
    expect(contacts.last().text()).toEqual('office@dan-it.com.ua');
  });

  it('should be render with contactLink', () => {
    const contactLink = component.find(ContactLink);
    expect(contactLink.length).toEqual(1);
  })
});