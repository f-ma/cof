import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Header.scss';
import Title from './Title';

class Header extends Component {
  render() {
    return (
      <div className={s.root}>
        <Title />
      </div>
    );
  }
}

export default withStyles(Header, s);
