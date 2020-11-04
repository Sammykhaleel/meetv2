import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mock-data';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('render NumberOfEvent', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('get list of events after the user selects a city', async () => {
    const AppWrapper = mount(<App className='appWrapper' />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('Berlin, Germany');
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(
      'Berlin, Germany'
    );
    AppWrapper.unmount();
  });

  test('change state after getting list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents('all');
    await AppWrapper.update();
    expect(await AppWrapper.state('events')).toStrictEqual(mockData);
    AppWrapper.unmount();
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: mockData,
    });
    expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    AppWrapper.unmount();
  });
});
