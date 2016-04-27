import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Item.scss';

class Item extends Component {
  componentDidUpdate() {

  }

  render() {
    var self = this;
    return (
      <div className={s.root}>
        <div className={s.title} title={self.props.title}>{self.props.title}</div>
        <div className={s.contact} title={self.props.contact}>{self.props.contact}</div>
      </div>
    );
  }
}

Item.PropTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired
}

Item.defaultProps = {
  title: "N/A",
  contact: "N/A"
}

export default withStyles(Item, s);
