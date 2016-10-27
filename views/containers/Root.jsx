import React from 'react';
import { Provider } from 'react-redux';
import Agenda from '../containers/Agenda';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Agenda />
    </Provider>
  );
};

Root.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default Root;
