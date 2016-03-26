import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './CustomerAssignment.scss';
import Label from './Label';
import WorkPlace from './WorkPlace';
import CartStore from '../../../stores/Cart';

class Customer extends Component {
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
    return(
      <div className={s.root}>
        <Label />
        <WorkPlace active = { CartStore.getIsCustomerAssigning() } />
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

export default withStyles(Customer, s);
