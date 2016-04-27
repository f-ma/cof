import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Label.scss';
import Title from './Title';
import AdditionButton from './AdditionButton';
import CartActions from '../../../../actions/Cart';

class Label extends Component {
  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.active]: self.props.active
    });
    return (
      <div className={rootClass} onClick={this._handleOnClick}>
        <Title active={self.props.active} />
        <AdditionButton active={self.props.active} />
      </div>
    );
  }
  _handleOnClick(event) {
    event.stopPropagation();
    CartActions.toggleCustomerAssignment();
  }
}

Label.propTypes = {
  active: PropTypes.bool.isRequired
}

Label.defaultProps = {
  active: false
}

export default withStyles(Label, s);
