import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './CustomerAssignment.scss';
import Label from './Label';
import WorkPlace from './WorkPlace';
import CartStore from '../../../stores/Cart';

class CustomerAssignment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.active]: self.props.active
    });
    return(
      <div className={rootClass}>
        <Label />
        <WorkPlace active = { self.props.active } />
      </div>
    );
  }
}

CustomerAssignment.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string
}

CustomerAssignment.defaultProps = {
  active: false
}

export default withStyles(CustomerAssignment, s);
