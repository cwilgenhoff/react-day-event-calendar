import React from 'react';

const Event = ({ start, end, title, location, widthDivisor, position }) => {
  const eventStyle = {
    height: `${end - start}px`,
    top: `${start}px`,
    left: `${(100 / widthDivisor) * position}%`,
    width: `calc(${100 / widthDivisor}% - 8px`,
  };

  return (
    <div style={eventStyle} className="calendar__event">
      <div className="calendar__event__content">
        <div className="calendar__event__content__title">
          { title || 'Sample Event' }
        </div>
        <div className="calendar__event__content__location">
          { location || 'Sample Location' }
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  start: React.PropTypes.number.isRequired,
  end: React.PropTypes.number.isRequired,
  title: React.PropTypes.string,
  location: React.PropTypes.string,
  widthDivisor: React.PropTypes.number,
  position: React.PropTypes.number,
};

export default Event;
