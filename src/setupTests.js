import Enzyme, { shallow, render, mount, toJson, matchMedia } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
// global.toJson = toJson

global.matchMedia = global.matchMedia || function () {
  return {
    matches: false,
    addListener: function () {},
    removeListener: function () {}
  }
}

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
