import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Title.scss';

class Title extends Component {
  render() {
    return (
      <div className={s.root}>
        <span>{this.props.content} (<strong>{this.props.cartItemNumber}</strong>)</span>
      </div>
    );
  }
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
  cartItemNumber: PropTypes.number.isRequired
};

Title.defaultProps = {
  content: 'CART',
  cartItemNumber: 0
};

export default withStyles(Title, s);
