import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvent component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });
  test('render NumberOfEvent input form', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvent')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('#numberInput')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('.numberSubmit')).toHaveLength(1);
  });
  test('enter and submitting number change numberOfEvents state', () => {
    NumberOfEventsWrapper.find('.numberSubmit').at(0).simulate('click');
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(1);
  });
});
