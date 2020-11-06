import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('Event component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test('render event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render show detail button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  test('show/hide detail info when clicked show details button', () => {
    EventWrapper.find('.showDetails').at(0).simulate('click');
    expect(EventWrapper.find('.detailInfo')).toHaveLength(1);
    EventWrapper.find('.showDetails').at(0).simulate('click');
    expect(EventWrapper.find('.detailInfo')).toHaveLength(0);
  });
});
