import { useSelector, useDispatch } from 'react-redux';

import { buyEgg } from '../redux';

const HooksEggContainer = () => {
    const numOfEggs = useSelector(state => state.egg.numOfEggs);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of Hook Eggs - {numOfEggs}</h2>
            <button onClick={() => dispatch(buyEgg())}
                style={{padding: '10px', borderRadius: '1.5rem', border: 'none', fontSize: '16px'}}>
                Buy Egg
            </button>
        </div>
    )
}

export default HooksEggContainer;