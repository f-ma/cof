import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './ItemList.scss';
import Item from './Item';
import Cart from '../../../stores/Cart';

class ItemList extends Component {
  getIsMustBeShrinked() {
    return Cart.getIsCustomerAssigning() || false;
  }
  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.deactive]: self.getIsMustBeShrinked()
    });
    return (
      <div className={rootClass}>
        <div className={s.wrapper}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}

export default withStyles(ItemList, s);
