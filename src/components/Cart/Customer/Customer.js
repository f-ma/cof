import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Customer.scss';

class Customer extends Component {
  render() {
    return(
      <div className={s.root}>
        Customer
      </div>
    );
  }
}

export default withStyles(Customer, s);
