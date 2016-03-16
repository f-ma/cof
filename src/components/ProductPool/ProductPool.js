import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './ProductPool.scss';

class ProductPool extends Component {
  render() {
    return (
      <div className={s.root}>
        ProductPool
      </div>
    );
  }
}

export default withStyles(ProductPool, s);
