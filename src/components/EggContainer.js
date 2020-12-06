import { connect } from 'react-redux';

import { buyEgg } from '../redux';

const EggContainer = ({ numOfEggs, buyEgg }) => (
    <div>
        <h2>Number of Eggs - {numOfEggs}</h2>
        <button onClick={buyEgg}
                style={{padding: '10px', borderRadius: '1.5rem', border: 'none', fontSize: '16px'}}>
            Buy Egg
        </button>
    </div>
);

const mapStateToProps = state => ({numOfEggs: state.egg.numOfEggs});
const mapDispatchToProps = dispatch => ({buyEgg: () => dispatch(buyEgg())});

export default connect(mapStateToProps, mapDispatchToProps)(EggContainer);
