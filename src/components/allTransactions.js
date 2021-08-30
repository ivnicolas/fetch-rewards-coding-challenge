import React, { Component } from 'react';
import {Transaction} from './Transaction';

class allTransactions extends Component {
    render() {
     debugger
        return (
            <div>
                <h1> AllTransactions</h1>
                {localStorage.transactions ? JSON.parse(localStorage.transactions).map(transaction =>( <Transaction key={transaction.id} transaction={transaction}/>)) : 'No Transactions' }
            </div>
        );
    }
}

export default allTransactions;

