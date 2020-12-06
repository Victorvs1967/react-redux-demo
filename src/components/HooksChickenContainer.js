import { useSelector, useDispatch } from 'react-redux';

import { buyChicken } from '../redux';

const HooksChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Num of Hooks Chickens - {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}
                style={{padding: '10px', borderRadius: '1.5rem', border: 'none', fontSize: '16px'}}>
                Buy Chicken
            </button>
        </div>
    )
};

export default HooksChickenContainer;