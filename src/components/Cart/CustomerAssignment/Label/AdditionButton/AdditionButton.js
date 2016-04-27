import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './AdditionButton.scss';

class AdditionButton extends Component {
  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.active]: self.props.active
    });
    return (
      <div className={rootClass}>
        <span>+</span>
      </div>
    );
  }
}

AdditionButton.propTypes = {
  active: PropTypes.bool.isRequired
}

AdditionButton.defaultProps = {
  active: false
}

export default withStyles(AdditionButton, s);
