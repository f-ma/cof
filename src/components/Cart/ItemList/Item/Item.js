import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Item.scss';

class Item extends Component {
  render() {
    return (
      <div className={s.root}>
        Item 
      </div>
    );
  }
}

export default withStyles(Item, s);
