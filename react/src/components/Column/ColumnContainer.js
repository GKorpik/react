import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, listId) => cards.filter(cards => cards.listId == listId);


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);