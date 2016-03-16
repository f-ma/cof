import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './POSPage.scss';
import Sidebar from '../Sidebar';
import ProductPool from '../ProductPool';
import Cart from '../Cart';

const title = 'POS';

class POSPage extends Component {
  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <Sidebar active={false} />
        <ProductPool />
        <Cart />
      </div>
    );
  }
}

POSPage.contextTypes = {
  onSetTitle: PropTypes.func.isRequired,
  onPageNotFound: PropTypes.func.isRequired
};

export default withStyles(POSPage, s);
