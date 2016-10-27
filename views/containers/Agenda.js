import React from 'react';
import { connect } from 'react-redux';
import DayCalendar from './DayCalendar';

class Agenda extends React.Component {
  getErrorMessages = () => {
    if (this.props.error) {
      return (
        <div className="agenda__error">{this.props.error}</div>
      );
    }
  };

  render = () => {
    return (
      <div className="agenda">
        <h1 className="agenda__header">Day Calendar</h1>
        {this.getErrorMessages()}
        <div className="agenda__calendar">
          <DayCalendar
            from={9}
            to={21}
            events={this.props.events}
          />
        </div>
      </div>
    );
  }
}

Agenda.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  events: React.PropTypes.array,
  error: React.PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch,
  };
};

const mapStateToProps = (store) => {
  return {
    events: store.Calendar.events,
    error: store.Calendar.error,
  };
};

const connectedAgenda = connect(
  mapStateToProps,
  mapDispatchToProps
)(Agenda);

export default connectedAgenda;
