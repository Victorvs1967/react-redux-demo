import { connect } from 'react-redux';

import { buyEgg, buyChicken } from '../redux';

const ItemContainer = ({ item, buyItem }) => (
    <>
        <h2>Item - {item}</h2>
        <button onClick={buyItem}
            style={{padding: '10px', borderRadius: '1.5rem', border: 'none', fontSize: '16px'}}>
            Buy Item
        </button>
    </>
);

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.egg ? state.egg.numOfEggs : state.chicken.numOfChickens;

    return {item: itemState};
};
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFn = ownProps.egg ? () => dispatch(buyEgg()) : () => dispatch(buyChicken());

    return {buyItem: dispatchFn};
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);