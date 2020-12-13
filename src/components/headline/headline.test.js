import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../utils';
import Headline from './headline';

const setUp = (props = {}) => {
  return shallow(<Headline {...props} />);
};
describe('headline Component', () => {
  describe('with props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'test header',
        desc: 'test desc',
      };
      wrapper = setUp(props);
    });

    it('should render without errors', () => {
      let component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    it('should render a header', () => {
      let header = findByTestAttr(wrapper, 'header');
      expect(header.length).toBe(1);
    });
    it('should render a description', () => {
      let description = findByTestAttr(wrapper, 'desc');
      expect(description.length).toBe(1);
    });
  });
  describe('without props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('should not render', () => {
      let component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
