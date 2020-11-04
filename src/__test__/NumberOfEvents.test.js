import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('NumberOfEvent component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });
  test('render NumberOfEvent input form', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('.numberInput')).toHaveLength(1);
  });
  test('enter and submitting number change numberOfEvents state', () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.numberInput')
      .at(0)
      .simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });
});
