import React, { Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './CustomerList.scss';
import Item from './Item';

class CustomerList extends Component {
  componentDidUpdate() {

  }

  render() {
    return (
      <div className={s.root}>
        <Item title="Huy Pham" contact="+841213866888" />
        <Item title="Barrack Obama" contact="obama@whitehouse.gov.us" />
        <Item title="John F.Kennedy Whit Luis" contact="kennedy@whitehouse.gov.us" />
        <Item title="Jet vs. Plane" contact="+243230101001" />
      </div>
    );
  }
}

export default withStyles(CustomerList, s);
