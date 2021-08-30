import React from 'react';

export const Transaction = ({transaction}) => {
    return (
        <li className={transaction.points> 0? 'positive' : 'negative'}>
            {transaction.payer} - [{transaction.points} POINTS] - {transaction.timestamp}
        </li>
       
    );
};