import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Cart.scss';
import Header from './Header';
import CustomerAssignment from './CustomerAssignment';
import ItemList from './ItemList';
import Sum from './Sum';
import Confirmation from './Confirmation';
import CartStore from '../../stores/Cart';


class Cart extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    CartStore.addChangeListener(this._onCartChange.bind(this));
  }
  componentWillUnmount() {
    CartStore.removeChangeListener(this._onCartChange);
  }
  render() {
    return (
      <div className={s.root}>
        <Header />
        <CustomerAssignment active={ CartStore.getIsCustomerAssigning() } />
        <ItemList />
        <Sum />
        <Confirmation />
      </div>
    );
  }
  _onCartChange() {
    this.forceUpdate();
  }
  getState() {
    return {};
  }
}

export default withStyles(Cart, s);
