import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import { findByTestAttr } from '../../utils';

const setUp = (props = {}) => {
  const component = shallow(<Header />);
  return component;
};
describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });
  it('should render a logo', () => {
    const logo = findByTestAttr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
