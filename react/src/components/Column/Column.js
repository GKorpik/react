import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';


class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }; 

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string.isRequired,
  };
  
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []          
          }
        ]
      }
    ));
  }

  render(){
    return(
      <section className ={styles.component}>
        <h3 className ={styles.title}>
        <span className={styles.icon}>
          <Icon name={Icon} />
        </span>
        {this.props.title}</h3>
        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardsProps}) => (
            <Card key={key} {...cardsProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }

}

export default Column;