import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Label.scss';
import Title from './Title';
import AdditionButton from './AdditionButton';
import CartActions from '../../../../actions/Cart';

class Label extends Component {
  render() {
    return (
      <div className={s.root} onClick={this._handleOnClick}>
        <Title />
        <AdditionButton />
      </div>
    );
  }
  _handleOnClick(event) {
    event.stopPropagation();    
    CartActions.toggleCustomerAssignment();
  }
}

export default withStyles(Label, s);
