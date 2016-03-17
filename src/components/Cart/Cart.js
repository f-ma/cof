import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Cart.scss';
import Header from './Header';
import Customer from './Customer';

class Cart extends Component {
  render() {
    return (
      <div className={s.root}>
        <Header />
        <Customer />
      </div>
    );
  }
}

export default withStyles(Cart, s);
