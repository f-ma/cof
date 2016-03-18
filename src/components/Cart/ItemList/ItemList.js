import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './ItemList.scss';
import Item from './Item';

class ItemList extends Component {
  render() {
    return (
      <div className={s.root}>
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default withStyles(ItemList, s);
