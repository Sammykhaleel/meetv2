import { loadFeature, defineFeature } from 'jest-cucumber';
import EventList from '../EventList';
import App from '../App';
import Event from '../Event';
import { mount } from 'enzyme';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;
  test('An event element is collapsed by default', ({
    given,
    and,
    when,
    then,
  }) => {
    given('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });
    and('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the user did not click the Show Details yet', () => {
      expect(EventWrapper.state('show')).toBe(false);
    });

    then('the event elements are collapsed', () => {
      expect(EventWrapper.find('.detailInfo')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({
    given,
    and,
    when,
    then,
  }) => {
    given('app loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks the button Show Details', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the event element should expand and show more information', () => {
      expect(EventWrapper.find('.detailInfo')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({
    given,
    and,
    when,
    then,
  }) => {
    given('app loaded', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    and('event element is expanded and shows details', () => {
      EventWrapper.find('.detailInfo');
    });

    when('the user clicks the hide details button', () => {
      EventWrapper.find('.showDetails').simulate('click');
    });

    then('the event element details should collapse', () => {
      expect(EventWrapper.find('.detailInfo')).toHaveLength(1);
    });
  });
});
