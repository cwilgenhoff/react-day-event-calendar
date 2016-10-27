import ACTIONS from '../actions';

export const invalidCalendarEvent = () => ({
  type: ACTIONS.CALENDAR.INVALID_EVENT,
  error: 'The event attempted to add is not valid.',
});

export const addCalendarEvent = event => {
  if (event.start < 0 || event.end < 0 || event.start >= event.end) {
    return invalidCalendarEvent();
  }

  return {
    type: ACTIONS.CALENDAR.ADD_EVENT,
    event: event,
  };
};
