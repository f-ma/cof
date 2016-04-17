import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Item.scss';

class Item extends Component {
  render() {
    var self = this;
    return (
      <div className={s.root}>
        <div className={s.quantity}>{ self.props.quantity }</div>
        <div className={s.indentifier}>
          <div className={s.title}>T-Shirt ABC White</div>
          <div className={s.subtitle}>White</div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  active: PropTypes.bool.isRequired,
  quantity: PropTypes.number.isRequired
}

Item.defaultProps = {
  active: false,
  quantity: 1
}

export default withStyles(Item, s);
