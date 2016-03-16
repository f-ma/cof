import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Sidebar.scss';

class Sidebar extends Component {

  render() {
    var self = this;
    var rootClass = classNames({
      [s.root]: true,
      [s.active]: self.props.active
    });
    return (
      <div className={rootClass}>
        Sidebar
      </div>
    );
  }
}

Sidebar.propTypes = {
  active: PropTypes.bool.isRequired
};
Sidebar.defaultProps = {
  active: false
};

export default withStyles(Sidebar, s);
