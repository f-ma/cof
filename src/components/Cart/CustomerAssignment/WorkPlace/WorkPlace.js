import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './WorkPlace.scss';
import CartActions from '../../../../actions/Cart';
import Search from './Search';

class WorkPlace extends Component {
  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.active]: self.props.active
    });
    return (
      <div className={rootClass}>
        <Search focus={self.props.active} />
      </div>
    );
  }
}

WorkPlace.propTypes = {
  active: PropTypes.bool.isRequired,
  className: PropTypes.string
}

WorkPlace.defaultProps = {
  active: false
}

export default withStyles(WorkPlace, s);
