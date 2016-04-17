import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Confirmation.scss';

class Confirmation extends Component {
  render() {
    return (
      <div className={s.root}>
        PAY
      </div>
    );
  }
}

export default withStyles(Confirmation, s);
