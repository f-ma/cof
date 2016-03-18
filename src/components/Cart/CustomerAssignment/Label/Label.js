import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Label.scss';
import Title from './Title';
import AdditionButton from './AdditionButton';

class Label extends Component {
  render() {
    return (
      <div className={s.root}>
        <Title />
        <AdditionButton />
      </div>
    );
  }
}

export default withStyles(Label, s);
