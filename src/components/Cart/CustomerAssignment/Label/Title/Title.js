import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Title.scss';

class Title extends Component {
  render() {
    return (
      <div className={s.root}>
        Add a Customer
      </div>
    );
  }
}

export default withStyles(Title, s);
