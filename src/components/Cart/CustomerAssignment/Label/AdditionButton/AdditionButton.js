import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './AdditionButton.scss';

class AdditionButton extends Component {
  render() {
    return (
      <div className={s.root}>
        <span>+</span>
      </div>
    );
  }
}

export default withStyles(AdditionButton, s);
