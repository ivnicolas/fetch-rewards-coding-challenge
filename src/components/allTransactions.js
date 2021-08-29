import React, {useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

const AllTransactions = () => {

    const {transactions }= useContext(GlobalContext);

    return (
        <div>
             <h1>All transactions</h1>

             {transactions.map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>))}
        </div>
    );
};

export default AllTransactions;




