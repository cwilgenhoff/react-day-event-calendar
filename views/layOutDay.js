import { addCalendarEvent } from './actions/Calendar';

const layOutDay = (events) => {
  const { dispatch } = window.reduxStore;
  events.forEach(
    event => dispatch(addCalendarEvent(event))
  );
};

export default layOutDay;
