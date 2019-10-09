import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string.isRequired,
  };
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };


  render(){
    const {title, icon, cards} = this.props;
    console.log('this',this.props);
    return(
      <section className ={styles.component}>
        <h3 className ={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {this.props.title}</h3>
        <div className={styles.cards}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
      {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
        */}
      </section>
   
    );
  }

}

export default Column;