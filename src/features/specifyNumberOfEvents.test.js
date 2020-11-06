import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('If user hasn’t specified a number, 32 is the default number.', ({
    given,
    when,
    then,
  }) => {
    given('the user did not specify a number of events being shown', () => {});
    let Appwrapper;
    let NumberOfEventsWrapper;
    when('app loaded', () => {
      Appwrapper = mount(<App />);
      NumberOfEventsWrapper = mount(<NumberOfEvents numberOfEvents={32} />);
    });
    then(/^the default number of shown events is (\d+)$/, (arg0) => {
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
    });
  });

  test('User can change the number of events they want to see.', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      'the list of elements has been loaded and the user did not specify a number of events he wants to see',
      () => {
        AppWrapper = mount(<App />);
      }
    );

    when('the user specified a number', () => {
      const numberOfEvents = {
        target: { value: 0 },
      };
      AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
    });

    then('the maximum of events listed should be the specified number', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 0 });
      expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(0);
    });
  });
});
