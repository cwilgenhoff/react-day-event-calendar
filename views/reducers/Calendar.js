import ACTIONS from '../actions';
import IntervalSearchTree from '../structures/intervalST';

const InitialState = {
  events: [],
  error: null,
};

const findEventsById = (events, interval) => {
  return events.find(e => e.id === interval.id);
};

const computeWidthDivisor = (events) => {
  const intervalSearchTree = new IntervalSearchTree(events);
  events.forEach((e) => {
    const intersections = intervalSearchTree.searchIntersections(e);
    intersections.forEach((intersection, intersectionOrder) => {
      const eventIntersected = findEventsById(events, intersection.interval);
      if (intersections.length > eventIntersected.widthDivisor) {
        eventIntersected.position = intersectionOrder;
        eventIntersected.widthDivisor = intersections.length;
      }
    });
  });
};

const mergeEvents = (previousEvents, newEvent) => {
  const newEvents = [
    ...previousEvents,
    {
      id: previousEvents.reduce((maxId, int) => Math.max(int.id, maxId), -1) + 1,
      ...newEvent,
      widthDivisor: 1,
      position: 0,
    },
  ];

  computeWidthDivisor(newEvents);

  return {
    events: newEvents,
  };
};

const CalendarReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.CALENDAR.ADD_EVENT:
      return mergeEvents(state.events, action.event);
    case ACTIONS.CALENDAR.INVALID_EVENT:
      return {
        events: [...state.events],
        error: `${action.error}`,
      };
    default:
      return state;
  }
};

export default CalendarReducer;
