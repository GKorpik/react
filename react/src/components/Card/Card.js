import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';


class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  
  render() {
    const {title} = this.props;
    return(

      <div className ={styles.component}>
        <h3 className ={styles.title}>{title}</h3>
      </div>
    );
  }
}


export default Card;
