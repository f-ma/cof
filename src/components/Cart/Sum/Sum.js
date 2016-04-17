import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Sum.scss';

class Sum extends Component {
  render() {
    return (
      <div className={s.root}>
        Sum
      </div>
    );
  }
}

export default withStyles(Sum, s);
