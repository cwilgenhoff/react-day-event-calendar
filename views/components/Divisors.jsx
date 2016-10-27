import React from 'react';
import moment from 'moment';

const Divisors = ({ totalMinutes, totalMinutesPerDivisor }) => {
  const totalDivisors = totalMinutes / totalMinutesPerDivisor;
  const divisors = [];
  const times = [];

  for (let i = 1; i < totalDivisors; i += 1) {
    const positionStyle = {
      top: `${i * totalMinutesPerDivisor}px`,
    };

    divisors.push(
      (
        <div key={i} style={positionStyle} className="calendar__divisor" />
      )
    );
  }

  const totalMinutesPerTime = totalMinutesPerDivisor / 2;
  const totalTimes = totalMinutes / totalMinutesPerTime;
  for (let i = 0; i <= totalTimes; i += 1) {
    const positionStyle = {
      top: `${i * totalMinutesPerTime}px`,
      fontWeight: (i * totalMinutesPerTime) % totalMinutesPerDivisor === 0 ? 'bold' : 'regular',
    };

    times.push(
      (
        <div key={i} style={positionStyle} className="calendar__divisor__time" >
          { moment().set('hour', 9).set('minute', i * totalMinutesPerTime).format('hh:mm a')}
        </div>
      )
    );
  }

  return (
    <div>
      { divisors }
      { times }
    </div>
  );
};

Divisors.propTypes = {
  totalMinutes: React.PropTypes.number,
  totalMinutesPerDivisor: React.PropTypes.number,
};

export default Divisors;
