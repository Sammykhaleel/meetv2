import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const locations = extractLocations(mockData);

describe('CitySearch component', () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(
      <CitySearch locations={locations} updateEvents={() => {}} />
    );
  });
  test('render text input', () => {
    expect(CitySearchWrapper.find('.citySearchInput')).toHaveLength(1);
  });

  test('render text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.citySearchInput').prop('value')).toBe(
      query
    );
  });

  test('change state when text input changes', () => {
    // Same as event.target.value
    const eventObject = { target: { value: 'Berlin' } };
    CitySearchWrapper.find('.citySearchInput').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render city of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('render list of suggestions correctly', () => {
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(
      suggestions.length + 1
    );
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(
        suggestions[i]
      );
    }
  });

  test('selecting a suggestion should change query state', () => {
    CitySearchWrapper.setState({ suggestions: locations });
    CitySearchWrapper.find('.suggestions li').at(1).simulate('click');
    expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
  });

  describe('<CitySearch /> integration', () => {
    test('get a list of cities when the user searches for Berlin', () => {
      const CitySearchWrapper = shallow(<CitySearch locations={locations} />);
      CitySearchWrapper.find('.citySearchInput').simulate('change', {
        target: { value: 'Berlin' },
      });
      expect(CitySearchWrapper.state('suggestions')).toEqual([
        'Berlin, Germany',
      ]);
    });

    test('renders a list of suggestions correctly', () => {
      const CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
      CitySearchWrapper.find('.citySearchInput').simulate('change', {
        target: {
          value: 'Berlin',
        },
      });
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(0);
    });

    test('selecting a suggestion should change query state', () => {
      const CitySearchWrapper = shallow(
        <CitySearch updateEvents={() => {}} locations={locations} />
      );
      CitySearchWrapper.setState({
        suggestions: locations,
      });
      CitySearchWrapper.find('.citySearchInput').simulate('change', {
        target: {
          value: 'London',
        },
      });
      CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
      expect(CitySearchWrapper.state('query')).toBe('London, UK');
    });
  });
});
