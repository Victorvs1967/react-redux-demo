import React, { useState } from 'react';
import { connect } from 'react-redux';

import { buyEgg } from '../redux';

const NewEggContainer = ({ numOfEggs, buyEgg }) => {
    const [ number, setNumber] = useState(1);
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>Number of Eggs - {numOfEggs}</h2>
            <input type="text" value={number} onChange={event => setNumber(event.target.value)} />
            <button onClick={() => buyEgg(number)}
                style={{padding: '10px', borderRadius: '16px', border: 'none', fontSize: '16px'}}>
                Buy {number} Eggs
            </button>
        </div>
    );
};

const mapStateToProps = state => ({numOfEggs: state.egg.numOfEggs});
const mapDispatchToProps = dispatch => ({buyEgg: number => dispatch(buyEgg(number))});

export default connect(mapStateToProps, mapDispatchToProps)(NewEggContainer);