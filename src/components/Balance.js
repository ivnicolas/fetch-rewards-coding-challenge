import React, {useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Balance = () => {
    const {transactions }= useContext(GlobalContext);

    const amount = transactions.map( transaction => transaction.points)
    const total = amount.reduce((acc, item) => (acc +=item),0)
    
    return (
        <div>
            <h2>Your Balance</h2>
                <h4>{total} POINTS</h4>
        </div>
    );
};

export default Balance;

