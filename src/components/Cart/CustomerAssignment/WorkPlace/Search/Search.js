import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Search.scss';

class Search extends Component {
  componentDidUpdate() {
    console.log(this);
  }

  render() {
    console.log("search" + this.props.focus);
    return (
      <div className={s.root}>
        <input type="text" placeholder="Search for an existing Customer" focus="{this.props.focus}" />
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
