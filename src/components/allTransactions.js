import React, { Component } from 'react';
import {Transaction} from './Transaction';

class allTransactions extends Component {
    render() {
        return (
            <div>
                <h1> AllTransactions</h1>
                {localStorage.transactions.length === 0 ? 'No Transactions' : JSON.parse(localStorage.transactions).map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>))}
            </div>
        );
    }
}

export default allTransactions;

