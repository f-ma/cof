import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Search.scss';

class Search extends Component {
  componentDidUpdate() {
    if (this.props.focus === true) {
      this.refs.searchInput.focus();
    }
  }

  render() {
    return (
      <div className={s.root}>
        <input type="text" placeholder="Search for an existing Customer" ref="searchInput" />
      </div>
    );
  }
}

Search.propTypes = {
  focus: PropTypes.bool.isRequired
}

Search.defaultProps = {
  focus: false
}


export default withStyles(Search, s);
