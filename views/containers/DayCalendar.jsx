import React from 'react';
import Event from '../components/Event';
import Divisors from '../components/Divisors';

class DayCalendar extends React.Component {
  events = (totalMinutes) => {
    if (!this.props.events) {
      return false;
    }

    return this.props.events.map((event, key) => {
      return (
        <Event
          start={event.start}
          end={event.end}
          widthDivisor={event.widthDivisor}
          position={event.position}
          key={key}
        />
      );
    });
  };

  render = () => {
    const totalMinutesPerDivisor = 60;
    const totalMinutes = (this.props.to - this.props.from) * totalMinutesPerDivisor;
    const calendarStyle = {
      height: `${totalMinutes}px`,
    };

    return (
      <div style={calendarStyle} className="calendar__container">
        { this.events(totalMinutes) }
        <Divisors
          totalMinutes={totalMinutes}
          totalMinutesPerDivisor={totalMinutesPerDivisor}
        />
      </div>
    );
  }
}

DayCalendar.propTypes = {
  events: React.PropTypes.array,
  from: React.PropTypes.number,
  to: React.PropTypes.number,
};

export default DayCalendar;
