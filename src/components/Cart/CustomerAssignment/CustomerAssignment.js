import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './CustomerAssignment.scss';
import Label from './Label'

class Customer extends Component {
  render() {
    return(
      <div className={s.root}>
        <Label />
      </div>
    );
  }
}

export default withStyles(Customer, s);
