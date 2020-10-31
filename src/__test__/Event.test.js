import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';

describe('Event component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render event's info", () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
    expect(EventWrapper.find('.startDateTime')).toHaveLength(1);
    expect(EventWrapper.find('.location')).toHaveLength(1);
    expect(EventWrapper.find('.detailInfo')).toHaveLength(1);
    expect(EventWrapper.find('.eventLink')).toHaveLength(1);
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('render show detail button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('show/hide detail info when clicked show details button', () => {
    EventWrapper.find('.showDetails').at(0).simulate('click');
    expect(EventWrapper.find('.detailInfo').hasClass('show')).toEqual(true);
    EventWrapper.find('.showDetails').at(0).simulate('click');
    expect(EventWrapper.find('.detailInfo').hasClass('hide')).toEqual(true);
  });
});
